import React from 'react';
import ReactDOM from 'react-dom';
import DataLayer from './components/DataLayer/Datalayer';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <DataLayer>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);
