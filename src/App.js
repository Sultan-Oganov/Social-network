import React from 'react';
import { Route } from 'react-router';
import classes from './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavbarContainer />

      <div className="app-wrapper-content">

        <Route
          path="/profile"
          render={() => <ProfileContainer />}
        />
        <Route
          path="/dialogs"
          render={() => <DialogsContainer />}
        />
        <Route
          path="/users"
          render={() => <UsersContainer />}
        />
        {/* <Route
          exact
          path="/"
          render={() => <ProfileContainer />}
        /> */}

      </div>

    </div>
  );
}
export default App;
