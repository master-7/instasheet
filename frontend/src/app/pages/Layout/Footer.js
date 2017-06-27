import React, {PureComponent} from 'react'
import {Layout} from 'antd'

export default class Footer extends PureComponent {
    render () {
        const {Footer} = Layout;
        return (
            <Footer style={{ textAlign: 'center' }}>
                Instasheet ©{new Date().getFullYear()}
            </Footer>
        )
    }
}
