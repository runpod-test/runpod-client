import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/global.css';
import HomePage from './views/HomePage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);

reportWebVitals();
