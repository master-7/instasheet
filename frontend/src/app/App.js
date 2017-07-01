/**
 * @flow
 */
import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './modules/Home'

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
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={Home}
                        />
                        <Route
                            render={() => <h1>404</h1>}
                        />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}
