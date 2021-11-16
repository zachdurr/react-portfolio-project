import React, { Component } from 'react';
import './App.css';
import TweetsContainer from './containers/TweetsContainer';

// import Home from './components/navbar/Home';
// import About from './components/navbar/About';
// import Login from './components/navbar/Login';
// import Navbar from './components/navbar/Navbar';
// import { BrowserRouter as Router, Route} from 'react-router-dom';

class  App extends Component {
  render() {
    return (
      <div className="App">
          {/* <Router>

              <Navbar />
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/login" component={Login} />
     
          </Router>, */}
        <TweetsContainer />
      </div>
    );
  }
}

export default App;
