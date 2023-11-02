import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; 
import { store } from './redux/store'
import App from './App.jsx';
import './index.css';
// import { fetchAllAdverts } from './utils/adverts-api.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter basename="/car-rental-service">
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
// fetchAllAdverts()