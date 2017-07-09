/**
 * @flow
 */

import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from 'modules/Home'

import {Content} from 'components/Layout'

export default class Router extends Component {
    render () {
        return (
            <Content>
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
            </Content>
        );
    }
}
