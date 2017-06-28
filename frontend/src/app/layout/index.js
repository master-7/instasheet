import React, {Component} from 'react'
import {Layout} from 'antd'
import Content from './Content'
import Header from './Header'
import Footer from 'app/components/Footer'

export default class extends Component {
    render () {
        return (
            <Layout className="layout">
                <Layout>
                    <Header/>
                    <Content/>
                    <Footer>
                        Instasheet ©{new Date().getFullYear()}
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}
