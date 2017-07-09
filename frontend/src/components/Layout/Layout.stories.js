import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import {BrowserRouter} from 'react-router-dom'

import {
    Container,
    Top,
    LeftPanel,
    Content,
    Bottom
} from './index'

import avatarIMG from '../Header/tilo-avatar.png'

import Header, {
    MenuItem as HeaderMenuItem,
    Avatar
} from '../Header'

import {
    Menu,
    MenuHeading,
    MenuItem
} from '../Menu'

storiesOf('Layout', module)
    .add('Simple layout', () => (
        <BrowserRouter>
            <Container>
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
                <LeftPanel>
                    <Menu>
                        <MenuHeading>
                            Some head
                        </MenuHeading>
                        <MenuItem href="#" onClick={action('clicked')}>
                            Click me!
                        </MenuItem>
                        <MenuItem href="#">
                            Some item 2
                        </MenuItem>
                        <MenuHeading>
                            Some head 2
                        </MenuHeading>
                        <MenuItem href="#">
                            Some item
                        </MenuItem>
                        <MenuItem href="#">
                            Some item 2
                        </MenuItem>
                    </Menu>
                </LeftPanel>
                <Content>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        background: '#fff',
                        color: '#000'
                    }}
                    >
                        Content
                    </div>
                </Content>
                <Bottom>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        background: '#000',
                        color: '#fff'
                    }}
                    >
                        Bottom
                    </div>
                </Bottom>
            </Container>
        </BrowserRouter>
    ))
