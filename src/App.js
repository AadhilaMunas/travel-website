import React from 'react';
import Navbar from '../src/components/Navbar/Navbar';
import './App.css';
import Home from '../src/components/Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from '../src/components/Pages/Services';
import Products from '../src/components/Pages/Products';
import SignUp from '../src/components/Pages/SignUp'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home />
        <Routes>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Routes>
      </Router>
    </>
  );
}

export default App;