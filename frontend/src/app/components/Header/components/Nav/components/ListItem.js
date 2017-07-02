// @flow

import React from 'react'
import styled from 'styled-components'

const item = ({className, children}) => <li className={className}>
    {children}
</li>;

export default styled(item)`
    padding: .5em 1em;
    color: ${props => props.isActive ? '#FFF' : '#6FBEF3'};
    cursor: pointer;
    display: flex;
    align-items: center;
    
    :hover {
        color: #AECFE5;
    }
`
