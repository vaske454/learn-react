import React, { StrictMode } from 'react';
//ovo je react biblioteka da komunicira sa web browser-om
import ReactDOM from 'react-dom/client';
import "./styles.css";
// import './index.css';

// komponenta koju smo kreirali u App.js
import Profile from './Profile';
// import Products from './Products';
// import App from './App';


// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <StrictMode>
    <Profile />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
