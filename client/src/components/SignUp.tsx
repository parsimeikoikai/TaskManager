export default function SignUp() {
    return (
        <div className="max-w-md w-full space-y-8 bg-g">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-300">
                <h1 className="font-bold uppercase text-center mt-8 text-lg tracking-wide hidden xl:block">
                    To-do list - Sign Up
                </h1>
                <form className="mt-4 space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            autoFocus
                            required
                            className="w-full px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                        <input
                            type="email"
                            id="emailAddress"
                            autoFocus
                            required
                            className="w-full px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            required
                            autoFocus
                            className="w-full px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="btn"
                        >
                            Sign Up
                        </button>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="text-sm">
                            <a href="/signin" className="font-medium text-blue-600 hover:text-blue-500">Sign In</a>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
}