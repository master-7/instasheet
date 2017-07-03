// @flow

import React, {PureComponent} from 'react'
import styled from 'styled-components'

type Props = {
    className: string,
    children: any
}
class Nav extends PureComponent {
    props: Props;

    render() {
        const {className, children} = this.props;
        return (
            <nav className={className} >
                <List>
                    {children}
                </List>
            </nav>
        )
    }
}

const List = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    margin: 0;
`;

export default styled(Nav)`
    display: inline-block;
`
