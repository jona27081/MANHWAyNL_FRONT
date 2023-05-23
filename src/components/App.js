//import React, { Component } from 'react';
import LinkList from './LinkList';
//import logo from './../logo.svg';
import './../styles/App.css';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import CreateLink from './CreateLink';
import Profile from './About';
import Login from './Login';
import TextDavinci from './openai/TextDavinci';
import ImageDalle from './openai/ImageDalle';

function App() {
  return (
    <div className="container-blur">
      <Header />
      <div className="">
        <Routes>
          <Route path="/manhwas" element={<LinkList/>} />
          <Route path="/subir" element={<CreateLink/>} />
          <Route path="/about" element={<Profile/>} />
          <Route path="/login" element={<Login/>} />
          <Route path='/davinci' element={<TextDavinci/>} />
          <Route path="/imagesIA" element={<ImageDalle/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
 
