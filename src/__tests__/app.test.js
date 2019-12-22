import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import MyApp from '../core/app';

const mockStore = configureStore([]);

describe('My Connected React-Redux Component', () => {
    let store;
    let component;
    beforeEach(() => {
        store = mockStore({
            myState: 'sample text',
        });
        component = renderer.create(
            <Provider store={store}>
                <BrowserRouter>
                    <MyApp />
                </BrowserRouter>
            </Provider>
        );
    });
    it('should render with given state from Redux store', () => {
        expect(component);
    });
});