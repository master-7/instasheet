import React, {PureComponent} from 'react'
import {Layout, Menu} from 'antd'

import {Link} from 'react-router-dom'

export default class Header extends PureComponent {
    render () {
        const {Header} = Layout;
        return (
            <Header className="header">
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">
                        <Link to="/qwe">
                            Search
                        </Link>
                    </Menu.Item>
                </Menu>
            </Header>
        )
    }
}
