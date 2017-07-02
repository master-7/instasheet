// @flow

import React from 'react'
import styled from 'styled-components'

const Logo = ({className}) => <a href="/" className={className}>
    instasheet
</a>;

export default styled(Logo)`
    color: white;
￼   font-weight: 400;
￼   font-size: 1.2em;
    padding: .5em 1em;
    text-transform: uppercase;
    text-decoration: none;
`
