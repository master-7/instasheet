import React, {PureComponent} from 'react'
import {Layout} from 'antd'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'

export default class extends PureComponent {
    render () {
        return (
            <Layout className="layout">
                <Header/>
                <Content/>
                <Footer/>
            </Layout>
        )
    }
}
