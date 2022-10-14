import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles.css';
import App from './App';
import { DataListContextProvider } from './dataListContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <DataListContextProvider>
        <App />
      </DataListContextProvider>
  </Router>

);

