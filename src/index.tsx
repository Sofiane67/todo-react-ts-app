import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { PersistStoreFct, store } from './redux/index';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {TouchBackend} from "react-dnd-touch-backend";

const windowWidth = window.innerWidth;
const backend = windowWidth > 1024 ? HTML5Backend : TouchBackend;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={PersistStoreFct(store)}>
      <DndProvider backend={backend}>
        <App />
      </DndProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
