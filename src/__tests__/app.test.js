import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import MyApp from '../core/app';
import { getData } from '../redux/actions/progressBar/progressBarAction';

const mockStore = configureStore([]);

describe('My Connected React-Redux Component', () => {
    let store;
    let component;
    beforeEach(() => {
        store = mockStore({
            myState: 'sample text',
        });
        store.dispatch = jest.fn();
        component = renderer.create(
            <Provider store={store}>
                <BrowserRouter>
                    <MyApp />
                </BrowserRouter>
            </Provider>
        );
    });
    it('should render with given state from Redux store', () => {
        expect(component.toJSON()).toMatchSnapshot();
        
    });
    it('should dispatch an action when init a component', () => {
        expect(store.dispatch).toHaveBeenCalledWith(
            getData({ payload: {} })
        );
    });
});