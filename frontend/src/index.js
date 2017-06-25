import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'

import App from './app'

import './styles/index.styl'

import appStore from 'app/configureStore'

render(
    <App store={appStore} />,
    document.getElementById('app')
);
