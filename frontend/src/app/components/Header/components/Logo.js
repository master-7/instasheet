// @flow

import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Logo = ({className}) => <Link to="/" className={className}>
    instasheet
</Link>;

export default styled(Logo)`
    color: white;
￼   font-weight: 400;
￼   font-size: 1.2em;
    padding: .5em 1em;
    text-transform: uppercase;
    text-decoration: none;
`
