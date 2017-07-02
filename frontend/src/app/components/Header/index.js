// @flow

import React from 'react'
import styled from 'styled-components'
import Logo from './components/Logo'
import Nav from './components/Nav'

const Header = ({className}) => <header className={className}>
    <Logo />
    <Nav />
</header>;

export default styled(Header)`
    background: #2d3e50;
    padding: 0.5em;
    box-shadow: 0 1px 1px rgba(0,0,0, 0.10);
    width: 100%;￼  
    height: 42px;
    align-items: center;
    justify-content: space-between;
    display: flex;
`;
