import React from 'react'
import Header from './index'
import {mount} from 'enzyme'

describe('Header', () => {
    it('base render', () => {
        const wrapper = mount(<Header />);
        expect(wrapper.find('header')).toHaveLength(1);
        expect(wrapper.find('a')).toHaveLength(1);
        expect(wrapper.find('ul')).toHaveLength(1);
        expect(wrapper.find('img')).toHaveLength(1);
        expect(wrapper.find('li')).toHaveLength(2);
    })
});
