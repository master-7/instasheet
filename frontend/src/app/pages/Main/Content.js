import React, {Component} from 'react'
import {Layout, Breadcrumb} from 'antd'
import {Route, Switch} from 'react-router-dom';

import Home from '../Home';

export default class Content extends Component {
    render () {
        const {Content} = Layout;
        return (
            <Content style={{ padding: '0 5px' }}>
                <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff'}}>
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
                </div>
            </Content>
        )
    }
}
