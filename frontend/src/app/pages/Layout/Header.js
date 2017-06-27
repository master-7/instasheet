import React, {PureComponent} from 'react'
import {Layout, Menu} from 'antd'

// import {Link} from 'react-router-dom'

export default class Header extends PureComponent {
    render () {
        const {Header} = Layout;
        return (
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                >
                        <Menu.Item key="1">Search</Menu.Item>
                </Menu>
            </Header>
        )
    }
}
