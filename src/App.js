import React from 'react';
import { Route } from 'react-router';
import classes from './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Sidebar/Sidebar';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/dialogs" component={Dialogs} />
      </div>

    </div>
  );
}
export default App;
