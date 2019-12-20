import {createStore, applyMiddleware,combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';

import AvatarReducer from './reducers/AvatarReducer';


const reducers = combineReducers({
    avatar : AvatarReducer
})
/**
 * function to create redux store
 */

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

//store.subscribe(() => console.log(store.getState()))

export default store;