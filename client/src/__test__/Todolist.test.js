import { render } from '@testing-library/react';
import Todolist from '../components/TodoList';
import { useQuery } from 'react-query';

jest.mock('react-query');

describe('Todolist component', () => {
  test('displays loading message while data is loading', () => {
   
    useQuery.mockReturnValue({ isLoading: true });

 
    const { getByText } = render(<Todolist />);


    expect(getByText('Loading...')).toBeInTheDocument();
  });

  test('displays error message when request fails', () => {
 
    useQuery.mockReturnValue({ error: true });

  
    const { getByText } = render(<Todolist />);

 
    expect(getByText('Request Failed')).toBeInTheDocument();
  });

  test('displays tasks when data is successfully fetched', () => {
    
    const mockData = [
      { id: 1, title: 'Task 1', description: 'Description 1' },
      { id: 2, title: 'Task 2', description: 'Description 2' }
    ];
    useQuery.mockReturnValue({ data: mockData });

    const { getByText } = render(<Todolist />);
   
    expect(getByText('Task 1')).toBeInTheDocument();
    expect(getByText('Task 2')).toBeInTheDocument();
  });
});
