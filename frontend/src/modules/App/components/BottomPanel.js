/**
 * @flow
 */

import React, {Component} from 'react'
import styled from 'styled-components'

import {colors} from 'data/StyledConst'

import {Bottom} from 'components/Layout'

export default class BottomPanel extends Component {
    render () {
        return (
            <Bottom>
                <BottomContent>
                    © instasheet {new Date().getFullYear()}
                </BottomContent>
            </Bottom>
        );
    }
}

const BottomContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: ${colors.ebonyClay};
    color: ${colors.white};
`;
