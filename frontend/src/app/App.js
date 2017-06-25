/**
 * @flow
 */
import React, {Component} from 'react'
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

type Props = {
    store: Object
};

export default class App extends Component {
    props: Props;

    render () {
        const { store } = this.props;
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        Instasheet ready!
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}
