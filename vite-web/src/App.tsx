import React, { Fragment } from 'react';

import './App.css';
import Register from './pages/Register';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// toast.configure();

function App() {
  return (
    <Fragment>
      <ToastContainer />
      <Register />
    </Fragment>
  );
}

export default App;
