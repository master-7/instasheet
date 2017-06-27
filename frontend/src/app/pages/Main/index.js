import React, {Component} from 'react'
import {Layout} from 'antd'
import Content from './Content'
import Header from './Header'

export default class Main extends Component {
    render () {
        const {Footer} = Layout;
        return (
            <Layout className="layout">
                <Header/>
                <Content/>
                <Footer style={{ textAlign: 'center' }}>
                    Instasheet ©{new Date().getFullYear()}
                </Footer>
            </Layout>
        )
    }
}
