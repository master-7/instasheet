import React from 'react'
import {mount} from 'enzyme'

import Button from './index'

describe('Button', () => {
    it('base render', () => {
        const wrapper = mount(
            <Button>
                Simple button
            </Button>
        );
        expect(wrapper.find('button')).toHaveLength(1);
    })

    it('click button', function() {
        const onClickFunc = jest.genMockFunction(),
            wrapper = mount(
                <Button onClick={onClickFunc} />
            );

        const buttonElement = wrapper.find('button');

        buttonElement.simulate('click');

        expect(onClickFunc).toBeCalled();
    });
});
