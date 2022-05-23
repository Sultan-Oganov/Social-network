import React, { useEffect } from 'react';
import { Route } from 'react-router';
import classes from './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { initialize } from './redux/reducers/app-reducer';
import Preloader from './components/common/Preloader/Preloader';

const App = ({ initialize, initialized }) => {

  useEffect(() => {
    initialize();
  }, []);

  if (!initialized) {
    return <Preloader />
  }

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <NavbarContainer />

      <div className="app-wrapper-content">

        <Route
          path="/profile/:userId?"
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
        <Route
          path="/login"
          render={() => <Login />}
        />

      </div>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default compose(withRouter, connect(mapStateToProps, { initialize }))(App);