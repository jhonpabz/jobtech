import React, { Fragment } from 'react';

import './App.css';
import Register from './pages/Register';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from '@routes/Router';
// toast.configure();

function App() {
  return (
    <Fragment>
      <ToastContainer />
      {/* <Register /> */}
      <Router />
    </Fragment>
  );
}

export default App;
