import React from 'react';
import { Route } from 'react-router';
import classes from './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  let state = props.store.getState()
  return (
    <div className="app-wrapper">
      <Header />

      <Navbar friends={state.sidebar.friends} />
      <div className="app-wrapper-content">

        <Route
          exact
          path="/"
          render={() => <Profile store={props.store} />}
        />
        <Route
          exact
          path="/dialogs"
          render={() => <DialogsContainer store={props.store} />}
        />

      </div>

    </div>
  );
}
export default App;
