import React from 'react';
import ReactDOM from 'react-dom/client';
import { LicenseManager } from '@ag-grid-enterprise/core';
import App from './App';

LicenseManager.setLicenseKey(process.env.REACT_APP_AG_GRID_LICENSE);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
