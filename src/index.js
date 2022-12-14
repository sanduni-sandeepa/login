import React from 'react';
import ReactDOM from 'react-dom/client'; //manage DOM elements in react page (structure of the page)
import Login from './login';
import Dashboard from './dashboard';
import { BrowserRouter, Route, Routes } from "react-router-dom";
//BrowserRouter - router implementation parent component to store all othet components * keep your UI in sync with the URL
//Routes        - chosen based on the best match instead of being traversed in order
//Route         - renders some UI when its path matches the current URL

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode> 
  <BrowserRouter>
    <Routes>
      <Route index element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
</React.StrictMode>
);

// StrictMode - highlights potential issues in a programme

