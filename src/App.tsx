import React from 'react';

import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

import GlobalStyle from './styles/global';

import ToastContainer from './Components/ToastContainer'
import { AuthProvider } from './hooks/AuthContext';


const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />

        <ToastContainer />
      </AuthProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
