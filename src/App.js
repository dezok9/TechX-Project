import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ReactDOM } from 'react';
import {Home} from './Home.js'
import {Nav} from "./Nav.js"
import {About} from "./About.js"

export default function App() {
  return (
    <div className="App">
      <Nav/>
      <Router>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>} />
        </Routes>
      </Router>
    </div>
  );
}

