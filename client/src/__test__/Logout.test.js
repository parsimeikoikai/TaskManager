import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Logout from '../components/Logout';
import { useAuth0 } from '@auth0/auth0-react';

jest.mock('@auth0/auth0-react');

describe('Logout component', () => {

  test('clicking logout button triggers logout function', () => {
 
    const mockLogout = jest.fn();
    useAuth0.mockReturnValue({ logout: mockLogout });

    const { getByText } = render(<Logout />);

    const logoutButton = getByText('Log Out');

    fireEvent.click(logoutButton);

    expect(mockLogout).toHaveBeenCalledTimes(1);
  });
  
});
