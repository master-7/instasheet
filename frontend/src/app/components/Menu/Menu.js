// @flow

import React, {PureComponent} from 'react'
import styled from 'styled-components'

import {General, colors} from 'app/data/StyledConst'

export default class Menu extends PureComponent {
    render () {
        return (
            <StyledMenu>
                <StyledMenuItems>
                    {this.props.children}
                </StyledMenuItems>
            </StyledMenu>
        );
    }
}

const StyledMenu = styled.div`
    user-select: none;
    width: 10em;
    font-family: ${General.fontFamily};
    border: none;
    text-align: left;
    box-sizing: border-box;
    background: ${colors.ebonyClay};
`;

const StyledMenuItems = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;
