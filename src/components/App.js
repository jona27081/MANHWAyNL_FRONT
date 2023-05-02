//import React, { Component } from 'react';
import LinkList from './LinkList';
//import logo from './../logo.svg';
import './../styles/App.css';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import CreateLink from './CreateLink';
import Profile from './About';

function App() {
  return (
    <div className="container-blur">
      <Header />
      <div className="">
        <Routes>
          <Route path="/manhwas" element={<LinkList/>} />
          <Route path="/subir" element={<CreateLink/>} />
          <Route path="/about" element={<Profile/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
 
