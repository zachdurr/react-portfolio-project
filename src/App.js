import React, { Component } from 'react';
import './App.css';

import Home from './components/navbar/Home';
import About from './components/navbar/About';
import Login from './components/navbar/Login';
import Navbar from './components/navbar/Navbar';
import SignUp from './components/navbar/Signup';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


const nav = {
  display: 'inline-block',
  float: 'left'
}
class  App extends Component {
  render() {
    return (
      <div className="App" style={nav}>
          <Router>

              <Navbar />
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/about" element={<About />} />
                  <Route exact path="/login" element={<Login />} />
                  <Route exact path="/signup" element={<SignUp />} />
                </Routes>
     
          </Router>


      </div>
    );
  }
}

export default App;
