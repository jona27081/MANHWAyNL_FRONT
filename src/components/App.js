//import React, { Component } from 'react';
import LinkList from './LinkList';
//import logo from './../logo.svg';
import './../styles/App.css';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="container-blur">
      <Header />
      <div className="">
        <Routes>
          <Route path="/manhwas" element={<LinkList/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
 
