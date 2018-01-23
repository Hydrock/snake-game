import { combineReducers } from 'redux';

import size from './size';
import snake from './snake';

const rootReducer = combineReducers({
  size,
  snake
});

export default rootReducer;