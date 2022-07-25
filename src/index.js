import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import Login from './components/components/Login/Login';
import Navbar from './components/components/Navbar/Navbar';
import './index.css'
import Signup from './components/components/Signup/Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
      </Routes>
  </BrowserRouter>
);

