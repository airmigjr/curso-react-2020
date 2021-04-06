import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App nome="Fulano de tal" idade = {44}/>
  </React.StrictMode>,
  document.getElementById('root')
);


