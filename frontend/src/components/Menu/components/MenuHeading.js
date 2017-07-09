// @flow

import React, {PureComponent} from 'react'
import styled from 'styled-components'

import {colors} from 'data/StyledConst'

export default class MenuHeading extends PureComponent {
    render () {
        return (
            <StyledMenuHeading>
                {this.props.children}
            </StyledMenuHeading>
        );
    }
}

const StyledMenuHeading = styled.li`
    font-size: 1.1em;
    color: ${colors.kashimirBlue};
    padding: .5em 1em;
    text-transform: uppercase;
    text-decoration: none;
    white-space: nowrap;
    border-bottom: none;
`;
