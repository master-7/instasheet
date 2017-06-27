/**
 * @flow
 */
import React, {Component} from 'react'
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import 'antd/dist/antd.css'

import Layout from 'app/pages/Layout'

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
                    <Layout />
                </BrowserRouter>
            </Provider>
        );
    }
}
