import React, {PureComponent} from 'react'
import {Layout, Breadcrumb} from 'antd'

export default class Content extends PureComponent {
    render () {
        const {Content} = Layout;
        return (
            <Content style={{ padding: '0 5px' }}>
                <Breadcrumb>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff'}}>Content</div>
            </Content>
        )
    }
}
