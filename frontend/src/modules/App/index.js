/**
 * @flow
 */

import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

import Router from './Router'

import {Container} from 'components/Layout'

import TopPanel from './components/TopPanel'
import LeftNav from './components/LeftNav'
import BottomPanel from './components/BottomPanel'

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
                    <Container>
                        <TopPanel />
                        <LeftNav />
                        <Router />
                        <BottomPanel />
                    </Container>
                </BrowserRouter>
            </Provider>
        );
    }
}
