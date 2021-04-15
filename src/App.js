import React from 'react';
import { Route } from 'react-router';
import classes from './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />

      <div className="app-wrapper-content">

        <Route
          exact
          path="/"
          render={() => <Profile />}
        />
        <Route
          exact
          path="/dialogs"
          render={() => <DialogsContainer />}
        />

      </div>

    </div>
  );
}
export default App;
