// @flow

import React, {PureComponent} from 'react'
import styled from 'styled-components'

import {General, ButtonStyles} from 'app/data/StyledConst'

type Props = {
    onClick?: () => void,
    children: any
}

export default class Button extends PureComponent {
    props: Props;

    render () {
        const {
            onClick = () => {},
            children
        } = this.props;

        return (
            <StyledButton onClick={onClick}>
                {children}
            </StyledButton>
        );
    }
}

const StyledButton = styled.button`
    display: inline-block;
    font-family: ${General.fontFamily};
    font-size: 1.2em;
    padding: .5em 1em;
    color: ${ButtonStyles.fontColor};
    border-radius: 2px;
    border: transparent;
    background-color: ${ButtonStyles.background};
    text-decoration: none;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    &:focus {
        outline: 0;
    }
`;
