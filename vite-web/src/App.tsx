import React, { Fragment } from 'react';

import './App.css';

import { BrowserRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from '@routes/Router';
// toast.configure();

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <ToastContainer />
        <Router />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
