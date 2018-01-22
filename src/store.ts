import { createStore } from 'redux';
import rootReducer from './reducers/index';

var initialStoreState = {};

const store = createStore(rootReducer, initialStoreState);

export default store;