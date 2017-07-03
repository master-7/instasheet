import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {BrowserRouter} from 'react-router-dom'

import {Menu, MenuHeading, MenuItem} from './index';

storiesOf('Menu', module)
    .add('Simple menu', () => (
        <BrowserRouter>
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
        </BrowserRouter>
    ))
