import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { TravelAgency } from './TravelAgency';
import { store } from './store';
import { ColorModeProvider, TravelAgencyProvider } from './context';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TravelAgencyProvider>
      <ColorModeProvider>
        <Provider store={store}>
          <BrowserRouter>
            <TravelAgency />
          </BrowserRouter>
        </Provider>
      </ColorModeProvider>
    </TravelAgencyProvider>
  </React.StrictMode>,
)
