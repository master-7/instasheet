import React, {PureComponent} from 'react'
import {Layout} from 'antd'

import {Link} from 'react-router-dom'

import Menu from 'app/components/Menu'
import MenuItem from 'app/components/Menu/Item'

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
                >
                    <MenuItem key="1">
                        <Link to="/qwe">
                            Search
                        </Link>
                    </MenuItem>
                </Menu>
            </Header>
        )
    }
}
