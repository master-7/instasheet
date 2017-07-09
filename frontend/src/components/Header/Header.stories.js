// @flow

import React from 'react'
import {storiesOf} from '@storybook/react'
import Header, {MenuItem, Avatar} from './index'
import avatarIMG from './tilo-avatar.png'
import {BrowserRouter} from 'react-router-dom'

storiesOf('Header', module)
    .add('default', () => <BrowserRouter>
        <Header>
            <MenuItem>
                <Avatar src={avatarIMG} />
                Tilo Mitra
            </MenuItem>
            <MenuItem>
                logout
            </MenuItem>
        </Header>
    </BrowserRouter>);
