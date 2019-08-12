import { combineReducers } from 'redux';
import {reducer as items } from './items';

const rootReducer = combineReducers({
  items,
});

export default rootReducer;
