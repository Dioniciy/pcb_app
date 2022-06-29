import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {store} from "./app/store";
import {Provider} from "react-redux";
//import Header from "./Components/Header.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
//let state = store.getState();
//console.log (state);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,

);