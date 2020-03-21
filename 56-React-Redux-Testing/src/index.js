
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import manageWords from './reducers/manageWords';

const store = createStore(manageWords)

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, 
    document.getElementById('root')
);
