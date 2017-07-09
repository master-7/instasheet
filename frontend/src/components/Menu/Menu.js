// @flow

import React, {PureComponent} from 'react'
import styled from 'styled-components'

import {General, colors} from 'data/StyledConst'

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

const StyledMenu = styled.nav`
    user-select: none;
    width: 100%;
    height: 100%;
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
