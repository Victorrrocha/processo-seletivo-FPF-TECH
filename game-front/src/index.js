import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import store from './store/index'
import { Provider } from 'react-redux'

ReactDOM.render(<Provider store={store}><App /></Provider>,document.getElementById('root')
);

reportWebVitals();
