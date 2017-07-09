/**
 * @flow
 */

import React, {Component} from 'react'

import {LeftPanel} from 'components/Layout'

import {
    Menu,
    MenuHeading,
    MenuItem
} from 'components/Menu';

export default class LeftNav extends Component {
    render () {
        return (
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
        );
    }
}
