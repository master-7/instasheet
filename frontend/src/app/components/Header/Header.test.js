import React from 'react'
import {mount} from 'enzyme'
import Header, {MenuItem, Avatar} from './index'
import avatarIMG from './tilo-avatar.png'

import {BrowserRouter} from 'react-router-dom'

describe('Header', () => {
    it('base render', () => {
        const wrapper = mount(
            <BrowserRouter>
                <Header>
                    <MenuItem>
                        <Avatar src={avatarIMG} />
                        Tilo Mitra
                    </MenuItem>
                    <MenuItem>
                        logout
                    </MenuItem>
                </Header>
            </BrowserRouter>
        );

        expect(wrapper.find('header')).toHaveLength(1);
        expect(wrapper.find('a')).toHaveLength(1);
        expect(wrapper.find('ul')).toHaveLength(1);
        expect(wrapper.find('img')).toHaveLength(1);
        expect(wrapper.find('li')).toHaveLength(2);
    })
});
