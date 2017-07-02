// @flow

import React from 'react'
import styled from 'styled-components'
import ListItem from './ListItem'
import avatarIMG from './tilo-avatar.png'
import Avatar from './Avatar'

const list = ({className}) => <ul className={className}>
    <ListItem>
        <Avatar src={avatarIMG} />
        Tilo Mitra
    </ListItem>
    <ListItem>
        logout
    </ListItem>
</ul>;

export default styled(list)`
    list-style-type: none;
    display: flex;
    align-items: center;
    margin: 0;
`
