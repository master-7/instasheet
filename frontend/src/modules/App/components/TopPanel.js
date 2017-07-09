/**
 * @flow
 */

import React, {Component} from 'react'

import {Top} from 'components/Layout'

import Header, {
    MenuItem as HeaderMenuItem,
    Avatar
} from 'components/Header/index'

import avatarIMG from 'components/Header/tilo-avatar.png'

export default class TopPanel extends Component {
    render () {
        return (
            <Top>
                <Header>
                    <HeaderMenuItem>
                        <Avatar src={avatarIMG}/>
                        Tilo Mitra
                    </HeaderMenuItem>
                    <HeaderMenuItem>
                        logout
                    </HeaderMenuItem>
                </Header>
            </Top>
        );
    }
}
