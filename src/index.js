import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import store from './redux/state'

let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <App
                    state={state}
                    dispatch={store.dispatch.bind(store)}
                />
            </Router>
        </React.StrictMode>,
        document.getElementById('root')
    );

}

reportWebVitals();

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
