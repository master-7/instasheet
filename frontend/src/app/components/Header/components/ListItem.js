// @flow

import React, {PureComponent} from 'react'
import styled from 'styled-components'
import {colors} from 'app/data/StyledConst'

type Props = {
    isActive: boolean,
    className: string,
    children: any
}
class Item extends PureComponent {
    props: Props;

    render() {
        const {className, children} = this.props;
        return (
            <li className={className}>
                {children}
            </li>
        )
    }
}

export default styled(Item)`
    padding: .5em 1em;
    color: ${props => props.isActive ? colors.white : colors.malibu};
    cursor: pointer;
    display: flex;
    align-items: center;
    
    :hover {
        color: ${colors.regentStBlue}
    }
`
