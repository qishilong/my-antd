import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Button from './button/index';

ReactDOM.render(
  <React.StrictMode>
    <Button type="primary">click me</Button>
    <Button >click me</Button>
    <Button type="primary" className="my-btn">primary button </Button>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
