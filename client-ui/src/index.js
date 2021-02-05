import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './app/App';
import {StoreProvider} from "./app/store";


ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);