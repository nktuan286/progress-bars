import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './core/app';
import * as serviceWorker from './serviceWorker';
import './assets/stylesheets/app.scss';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
	document.getElementById('root') || document.createElement('div')
);

process.env.REACT_APP_STAGE === 'PROD'
? serviceWorker.register()
: serviceWorker.unregister();
