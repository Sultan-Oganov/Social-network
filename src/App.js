import React from 'react';
import { Route } from 'react-router';
import classes from './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />

      <Navbar friends={props.state.sidebar.friends} />
      <div className="app-wrapper-content">

        <Route
          exact
          path="/"
          render={() => <Profile
            profilePage={props.state.profilePage}
            dispatch={props.dispatch}
          />
          }
        />
        <Route
          exact
          path="/dialogs"
          render={() => <Dialogs
            dialogsPage={props.state.dialogsPage}
            dispatch={props.dispatch}
          />}
        />

      </div>

    </div>
  );
}
export default App;
