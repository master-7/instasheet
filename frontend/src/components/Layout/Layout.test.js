import React from 'react'
import {mount} from 'enzyme'

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

describe('Layout', () => {
    it('base render', () => {
        const wrapper = mount(
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
                            <MenuItem href="#">
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
        );
        expect(wrapper.find('header')).toHaveLength(1);
        expect(wrapper.find('header a')).toHaveLength(1);
        expect(wrapper.find('header ul')).toHaveLength(1);
        expect(wrapper.find('header img')).toHaveLength(1);
        expect(wrapper.find('header li')).toHaveLength(2);

        expect(wrapper.find('nav')).toHaveLength(2);
        expect(wrapper.find('nav ul')).toHaveLength(2);
        expect(wrapper.find('nav ul li')).toHaveLength(8);
        expect(wrapper.find('nav ul li a')).toHaveLength(4);

        expect(wrapper.find('main')).toHaveLength(1);
        expect(wrapper.find('main div')).toHaveLength(1);

        expect(wrapper.find('footer')).toHaveLength(1);
        expect(wrapper.find('footer div')).toHaveLength(1);
    })
});
