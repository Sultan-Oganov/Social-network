import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom'
import classes from './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route exact path="/" component={Profile} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/dialogs" component={Dialogs} />
        </div>

      </div>
    </Router>
  );
}
export default App;
