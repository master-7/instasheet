import React, {Component} from 'react'
import {Layout, Icon, Menu} from 'antd'
import {Route, Switch} from 'react-router-dom';

import Breadcrumbs from 'app/components/Breadcrumbs'
import BreadcrumbsItem from 'app/components/Breadcrumbs/Item'

import StyledLayout from 'app/components/Layout'

import Home from 'app/pages/Home/index';

export default class Content extends Component {
    render () {
        const {SubMenu} = Menu;
        const {Content, Sider} = Layout;

        return (
            <Content>
                <Breadcrumbs>
                    <BreadcrumbsItem>Home</BreadcrumbsItem>
                    <BreadcrumbsItem>List</BreadcrumbsItem>
                    <BreadcrumbsItem>App</BreadcrumbsItem>
                </Breadcrumbs>
                <StyledLayout>
                    <Sider width={200} style={{ background: '#fff' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%' }}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                                <Menu.Item key="1">option1</Menu.Item>
                                <Menu.Item key="2">option2</Menu.Item>
                                <Menu.Item key="3">option3</Menu.Item>
                                <Menu.Item key="4">option4</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                                <Menu.Item key="5">option5</Menu.Item>
                                <Menu.Item key="6">option6</Menu.Item>
                                <Menu.Item key="7">option7</Menu.Item>
                                <Menu.Item key="8">option8</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                                <Menu.Item key="9">option9</Menu.Item>
                                <Menu.Item key="10">option10</Menu.Item>
                                <Menu.Item key="11">option11</Menu.Item>
                                <Menu.Item key="12">option12</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: '100%' }}>
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
                </StyledLayout>
            </Content>
        )
    }
}
