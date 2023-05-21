import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';
import { Route, HashRouter, BrowserRouter, Link } from 'react-router-dom'; // HashRouter = serve static file, BrowserRouter = serve พวก url
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persister } = configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <HashRouter>
      <PersistGate persistor={persister}>
        <Route path="/" component={App} />
      </PersistGate>
    </HashRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/* reportWebVitals(); */
serviceWorker.unregister();
