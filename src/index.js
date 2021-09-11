import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Footer from "./Footer/Footer";
import App from './App/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer></Footer>
  </React.StrictMode>,
  document.getElementById('root')
);

