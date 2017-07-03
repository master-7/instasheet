// @flow

import React, {PureComponent} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

import {Panels, colors} from 'app/data/StyledConst'

type Props = {
    children?: any,
    onClick?: () => void,
    href: string
}

export default class MenuItem extends PureComponent {
    props: Props;

    render () {
        const {
            children,
            href = '',
            onClick = () => {}
        } = this.props;

        return (
            <StyledMenuItem>
                <StyledMenuItemLink to={href}
                                    onClick={onClick}
                >
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
    color: ${colors.white};
    padding: .5em 1em;
    display: block;
    text-decoration: none;
    white-space: nowrap;
    &:hover, &:focus {
        background: ${colors.oxfordBlue};
    }
`;
