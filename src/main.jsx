import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { TodoContextProvider } from './context/TodoContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
    <ToastContainer position='bottom-right' />
  </React.StrictMode>
);
