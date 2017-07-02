// @flow

import React, {PureComponent} from 'react'
import styled from 'styled-components'

import {Panels} from 'app/data/StyledConst'

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
    font-family: ${Panels.fontFamily};
    border: none;
    text-align: left;
    box-sizing: border-box;
    background: ${Panels.background};
`;

const StyledMenuItems = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;
