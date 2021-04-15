import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import store from './redux/redux-store'

let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <Router>
                <App
                    store={store}
                />
            </Router>
        </React.StrictMode>,
        document.getElementById('root')
    );

}

reportWebVitals();

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
});
