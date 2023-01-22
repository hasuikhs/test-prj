import { combineReducers } from 'redux';
import search from './search';
import favorite from './favorite';

const rootReducer = combineReducers({
  search, favorite
});

export default rootReducer;