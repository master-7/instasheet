import React, {PureComponent} from 'react'
import {Layout} from 'antd'

import styled from 'styled-components'

export default class extends PureComponent {
    render () {
        const {Footer} = Layout;

        const StyledFooter = styled(Footer)`
            text-align: center;
        `;

        return (
            <StyledFooter>
                {this.props.children}
            </StyledFooter>
        )
    }
}
