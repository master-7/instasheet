import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import Button from './index';

storiesOf('Button', module)
    .add('Simple button', () => (
        <Button>
            Simple button
        </Button>
    ))
    .add('With onClick event handler', () => (
        <Button onClick={action('clicked')}>
            Simple button
        </Button>
    ))
