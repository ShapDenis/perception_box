import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {index} from "./store";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <Provider store={index}>
        <BrowserRouter>
            <React.StrictMode>
                <App/>
            </React.StrictMode>,
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();