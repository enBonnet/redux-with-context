import React from 'react';
import { render } from 'react-dom';
import { StoreProvider } from './context/StoreContext';
import App from './component/App';

import './style.css';

render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById('app')
);
