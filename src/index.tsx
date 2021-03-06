import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './p2-main/m1-ui/u1-app/App';
import * as serviceWorker from './serviceWorker';
import Ping from "./p2-main/m1-ui/u3-ping/Ping";

ReactDOM.render(
    <>
        {/*off StrictMode if release*/}
        {/*<React.StrictMode>*/}
            <Ping show/>
            <App/>
        {/*</React.StrictMode>*/}
    </>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
