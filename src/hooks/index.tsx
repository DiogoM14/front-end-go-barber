import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';


const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider></ToastProvider>
  </AuthProvider>
)

export default AppProvider;
