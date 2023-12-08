import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import store from './App/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
        <ToastContainer autoClose={3000} limit={2}/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


