import React from 'react'
import {Menu, MenuHeading, MenuItem} from './index'
import {BrowserRouter} from 'react-router-dom'
import {mount} from 'enzyme'

describe('Menu', () => {
    it('base render without heading', () => {
        const wrapper = mount(
            <BrowserRouter>
                <Menu>
                    <MenuItem href="#">
                        Some item
                    </MenuItem>
                </Menu>
            </BrowserRouter>
        );
        expect(wrapper.find('div')).toHaveLength(1);
        expect(wrapper.find('div ul')).toHaveLength(1);
        expect(wrapper.find('div ul li')).toHaveLength(1);
        expect(wrapper.find('div ul li a')).toHaveLength(1);
    })
    it('base render with heading', () => {
        const wrapper = mount(
            <BrowserRouter>
                <Menu>
                    <MenuHeading>
                        Some heading
                    </MenuHeading>
                </Menu>
            </BrowserRouter>
        );
        expect(wrapper.find('div')).toHaveLength(1);
        expect(wrapper.find('div ul')).toHaveLength(1);
        expect(wrapper.find('div ul li')).toHaveLength(1);
    })
    it('base render with heading and item', () => {
        const wrapper = mount(
            <BrowserRouter>
                <Menu>
                    <MenuHeading>
                        Some heading
                    </MenuHeading>
                    <MenuItem href="#">
                        Some item
                    </MenuItem>
                </Menu>
            </BrowserRouter>
        );
        expect(wrapper.find('div')).toHaveLength(1);
        expect(wrapper.find('div ul')).toHaveLength(1);
        expect(wrapper.find('div ul li')).toHaveLength(2);
    })
});
