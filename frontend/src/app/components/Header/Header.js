// @flow

import React, {PureComponent} from 'react'
import styled from 'styled-components'
import Logo from './components/Logo'
import Nav from './components/Nav'
import {General, colors} from '../../data/StyledConst';

type Props = {
    className: string,
    children: any
}

class Header extends PureComponent {
    props: Props;

    render() {
        const {className, children} = this.props;
        return (<header className={className}>
            <Logo />
            <Nav>
                {children}
            </Nav>
        </header>)
    }
}

export default styled(Header)`
    background: ${colors.ebonyClay};
    padding: 0.5em;
    box-shadow: 0 1px 1px rgba(0,0,0, 0.10);
    width: 100%;￼  
    height: 42px;
    align-items: center;
    justify-content: space-between;
    display: flex;
    font-family: ${General.fontFamily};
`;
