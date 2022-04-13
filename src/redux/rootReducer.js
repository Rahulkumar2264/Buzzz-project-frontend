import { combineReducers } from 'redux';

import user from './user/user.reducer';

export default function createRootReducer() {
  return combineReducers({
    user
  });
}