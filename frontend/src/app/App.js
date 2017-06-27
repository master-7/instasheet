/**
 * @flow
 */
import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

import 'antd/dist/antd.css'

import Main from 'app/pages/Main'

type Props = {
    store: Object
};

export default class App extends Component {
    props: Props;

    render () {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Main />
                </BrowserRouter>
            </Provider>
        );
    }
}
