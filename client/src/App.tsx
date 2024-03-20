import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import TodoList from './components/TodoList';
import { Auth0Provider } from '@auth0/auth0-react';
import Logout from './components/Logout';
function App() {

  const domain = process.env.REACT_APP_AUTH0_DOMAIN || 'dev-rgxgx08i1mi7kqfj.us.auth0.com';
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID || 'dG00qtQR2dAX328F4R4jJm4j6ZSnaCHH';
  const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL;
  const queryClient = new QueryClient();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: redirectUri,
        }}
      >
        <QueryClientProvider client={queryClient}>
          
          <Router>

            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/list" element={<TodoList />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
          </Router>
        </QueryClientProvider>


      </Auth0Provider>

    </div>
  );
}

export default App;