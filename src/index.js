import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import img from './img/ava.jpg'


let posts = [
  { message: 'Hi, how are you', id: 1, img: img, likes: 130 },
  { message: 'Hi, how are you', id: 2, img: '', likes: 250 },
  { message: 'Hi, how are you', id: 3, img: '', likes: 10 },
  { message: 'Hi, how are you', id: 4, img: img, likes: 1530 },
  { message: 'Hi, how are you', id: 5, img: '', likes: 124 },
  { message: 'Hi, how are you', id: 6, img: img, likes: 194 },
  { message: '', id: 7, img: '', likes: 111 },
]

let dialogs = [
  { name: 'Sultan', id: 1 },
  { name: 'Adam', id: 2 },
  { name: 'Usman', id: 3 },
  { name: 'Emir', id: 4 },
  { name: 'Ilim', id: 5 },
  { name: 'Azamat', id: 6 },
  { name: 'Kaira', id: 7 },
]

let messages = [
  { id: 1, message: 'Hey' },
  { id: 2, message: 'Bye' },
  { id: 3, message: 'How\'re u doing?' },
  { id: 4, message: 'Yo' },
  { id: 5, message: 'How\'re u doing?' },
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
