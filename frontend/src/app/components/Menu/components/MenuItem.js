// @flow

import React, {PureComponent} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import {Panels} from 'app/data/StyledConst'

type Props = {
    children?: any,
    href: string
}

export default class MenuItem extends PureComponent {
    props: Props;

    render () {
        const {children, href} = this.props;
        return (
            <StyledMenuItem>
                <StyledMenuItemLink to={href}>
                    {children}
                </StyledMenuItemLink>
            </StyledMenuItem>
        );
    }
}

const StyledMenuItem = styled.li`
    position: relative;
    padding: 0;
    margin: 0;
    height: 100%;
`;

const StyledMenuItemLink = styled(Link)`
    text-decoration: none;
    color: ${Panels.fontColor};
    padding: .5em 1em;
    display: block;
    text-decoration: none;
    white-space: nowrap;
    &:hover, &:focus {
        background: ${Panels.elementIsActiveBackground};
    }
`;
