import React, { useEffect, useState } from "react";
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Layout/Header/Header";
import Footer from './components/Layout/Footer/Footer'
import Home from "./components/Home/Home";

function App() {

  return (
    <div className="app-container">
      <Router>
        <div className="box">
          <Header />
        </div>
        <Home />
        <div className="box">
          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App
