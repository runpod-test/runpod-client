import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import './styles/global.css';
import HomePage from './views/HomePage/HomePage';
import reportWebVitals from './reportWebVitals';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HomePage/>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
