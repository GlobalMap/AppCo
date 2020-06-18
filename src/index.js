import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux';
import App from './App';
import './index.scss';
import configureStore from "./configureStore";

const store = configureStore();

const app = (
    <Provider store={store}>
        <Router>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Router>
    </Provider>

)

ReactDOM.render(app, document.getElementById('root')
);
