import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import logo from "./logo.svg";
import "./App.css";
import store from './redux/store'
import {Provider} from 'react-redux'
import {BrowserRouter, withRouter} from 'react-router-dom'
import App from './components/App'

ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById("root"));
