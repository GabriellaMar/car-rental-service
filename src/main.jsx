
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { persistor, store } from './redux/store'
import App from './App.jsx';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}> 
      <BrowserRouter basename="/car-rental-service">
        <App />
      </BrowserRouter>
     </PersistGate> 
  </Provider>
  // </React.StrictMode>
);

