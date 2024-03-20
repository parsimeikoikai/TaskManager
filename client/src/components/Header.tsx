import React, { Fragment, useContext, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Dialog, Transition } from "@headlessui/react";
import { FaSignOutAlt } from "react-icons/fa";
import { useQueryClient } from 'react-query';
import { createTaskUrl } from "./urls/apiUrls";

interface HeaderProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}
const Header: React.FC<HeaderProps> = ({ setSearchQuery }) => {

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };



  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();

  const [values, setValues] = useState({
    title: "",
    description: "",
    status: "",
    deadline: ""
  });


  const closeModal = () => {
    setIsOpen(false);
    setValues({
      title: "",
      description: "",
      status: "",
      deadline: ""
    });
  };

  function openModal() {
    setIsOpen(true);
  }
  const { logout } = useAuth0();


  const createTask = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const formattedDateTime = values.deadline + 'T12:00:00Z';
      values.deadline = formattedDateTime;

      const res = await fetch(createTaskUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
      });
      if (res.ok) {
        await res.json();
        queryClient.invalidateQueries('tasks');
        closeModal();
      } else {
        console.error('Failed to create task');
      }
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setValues(prevValues => ({ ...prevValues, [id]: value }));
  };

  return (

    <div>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 mb-2">
        <div className="col-span-1 flex-1  flex-col divide-gray-200 rounded-lg text-center">
          <div className="mt-1">

          </div>
        </div>
        <div className="col-span-1 flex-1  flex-col divide-gray-200 rounded-lg text-center">
          <div className="mt-1">
            <div className="flex justify-center px-4 py-2 w-full block">

            </div>
          </div>
        </div>
        <div className="ml-40 col-span-1 flex-1  flex-col divide-gray-200 rounded-lg text-right">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button
              className="border rounded px-2 py-2 hover:bg-violet-600
              hover:text-white"
              onClick={() => logout()}
              style={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #4B0082'
              }}
            >
              <FaSignOutAlt className="mr-0" />
              <span className="ml-2">Logout</span>
            </button>
          </div>

        </div>

        <div className="col-span-1 flex-1 bg-white flex-col divide-gray-200 rounded-lg text-center">
          <div className="mt-1">
            <input
              type="text"
              id="password"
              required
              onChange={handleSearchChange}
              autoFocus
              placeholder="Search task"
              className="w-full px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
            />
          </div>
        </div>
        <div className="col-span-1 flex-1  flex-col divide-gray-200 rounded-lg text-center">
          <div className="mt-3 flex justify-center px-4 py-2 w-full block transition hover:text-rose-600 dark:hover:text-slate-200">

          </div>
        </div>
        <div className="col-span-1 flex-1 bg-white flex-col divide-gray-200 rounded-lg text-center">
          <div className="mt-1 flex justify-end">
            <button
              type="button"
              className="btn"
              onClick={openModal}
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add Task
                  </Dialog.Title>
                  <form onSubmit={createTask} className="mt-4 space-y-6">
                    <div className="border-2 border-gray-200 rounded-md p-4">
                      <label htmlFor="name"
                        className="block text-sm font-medium mb-2 dark:text-white">
                        Title</label>
                      <div className="relative">
                        <input type="text"
                          id="title"
                          name="title"
                          placeholder="Title"
                          required
                          onChange={handleInputChange}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
        rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        <div
                          className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                          <span className="text-gray-500"></span>
                        </div>
                      </div>
                      <label htmlFor="description" className="block text-sm font-medium mb-2 dark:text-white">
                        Description
                      </label>
                      <div className="relative">
                        <textarea
                          id="description"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                          resize-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          name="description"
                          onChange={handleInputChange}
                          rows={4}
                          required
                          placeholder="Enter description here..."
                        ></textarea>
                        <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                          <span className="text-gray-500"></span>
                        </div>
                      </div>

                      <label htmlFor="name"
                        className="block text-sm font-medium mb-2 dark:text-white">
                        Status
                      </label>
                      <select
                        id="status"
                        name="status"
                        required
                        onChange={handleInputChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
        rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option disabled value="">Select</option>

                        <option value="TODO">
                          TODO
                        </option>
                        <option value="IN_PROGRESS">
                          IN_PROGRESS
                        </option>
                        <option value="COMPLETED">
                          COMPLETED
                        </option>

                      </select>
                      <label htmlFor="name"
                        className="block text-sm font-medium mb-2 dark:text-white">
                        Deadline</label>
                      <div className="relative">
                        <input type="date"
                          id="deadline"
                          name="deadline"
                          placeholder="Deadline"
                          required
                          onChange={handleInputChange}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
        rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                        <div
                          className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
                          <span className="text-gray-500"></span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between">
                      <button
                        type="button"
                        onClick={closeModal}
                        className="px-4 py-3 border border-gray-300 text-black rounded-lg bg-white c flex items-center text-lg"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-3 border
    border-gray-300 text-white rounded-lg bg-violet-600 hover:bg-violet-600
    hover:text-white flex items-center text-lg"
                      >
                        Save
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>

  );
};

export default Header;