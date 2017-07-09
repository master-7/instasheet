import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'

import App from 'modules/App'

import appStore from './configureStore'

render(
    <App store={appStore} />,
    document.getElementById('app')
);
