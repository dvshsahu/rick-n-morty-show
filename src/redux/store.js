import {createStore, applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';

import AvatarReducer from './reducers/AvatarReducer';


const reducers = combineReducers({
    avatar : AvatarReducer
})
/**
 * function to create redux store
 */
const store = createStore(reducers, applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()))

export default store;