//Libraries
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux"
import * as firebase from 'firebase';
import "bootstrap/dist/css/bootstrap.css";
//Reducer
import langReducer from "./reducers/LangReducer";
//Style
import './styles/index.css';
//Connector
import Container from './connectors/Container';

var firebaseConfig = {
  apiKey: "AIzaSyCj0tf8h93rA2Iz-o_0M4cgL8UkxPCDCp0",
  authDomain: "habit66-5c0a3.firebaseapp.com",
  databaseURL: "https://habit66-5c0a3.firebaseio.com",
  projectId: "habit66-5c0a3",
  storageBucket: "habit66-5c0a3.appspot.com",
  messagingSenderId: "843460267435"
};

firebase.initializeApp(firebaseConfig);

var destination = document.querySelector("#container");

var store = createStore(langReducer);

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  destination
);
