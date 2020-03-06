import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import {Provider} from 'react-redux'
import myAwesomeStore from './redux/store'

ReactDOM.render(
  <BrowserRouter>
    <Provider store={myAwesomeStore}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
