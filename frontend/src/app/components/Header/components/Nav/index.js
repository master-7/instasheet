// @flow

import React from 'react'
import styled from 'styled-components'
import List from './components/List'

const nav = ({className}) => <nav className={className} >
    <List />
</nav>;

export default styled(nav)`
    display: inline-block;
`
