import React from 'react';
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "../state/reducer";

import '../styles/App.css';

let store;
export const resetStore = () => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(reducer, composeEnhancers (applyMiddleware(thunk)));
};
resetStore();

export default function App() {
 
  return (
    <div className="App">
      <h1>Branden's Portfolio Piece</h1>
    </div>
  );
}

