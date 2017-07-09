import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {mount} from 'enzyme'

import {Menu, MenuHeading, MenuItem} from './index'

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
        expect(wrapper.find('nav')).toHaveLength(1);
        expect(wrapper.find('nav ul')).toHaveLength(1);
        expect(wrapper.find('nav ul li')).toHaveLength(1);
        expect(wrapper.find('nav ul li a')).toHaveLength(1);
    })
    it('base render with item onClick handler', () => {
        const onClickFunc = jest.genMockFunction(),
            wrapper = mount(
                <BrowserRouter>
                    <Menu>
                        <MenuItem href="#"
                                  onClick={onClickFunc}>
                            Click me!
                        </MenuItem>
                    </Menu>
                </BrowserRouter>
            );

        const menuItem = wrapper.find('a');

        menuItem.simulate('click');

        expect(onClickFunc).toBeCalled();
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
        expect(wrapper.find('nav')).toHaveLength(1);
        expect(wrapper.find('nav ul')).toHaveLength(1);
        expect(wrapper.find('nav ul li')).toHaveLength(1);
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
        expect(wrapper.find('nav')).toHaveLength(1);
        expect(wrapper.find('nav ul')).toHaveLength(1);
        expect(wrapper.find('nav ul li')).toHaveLength(2);
    })
});
