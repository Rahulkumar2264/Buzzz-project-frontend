import { combineReducers } from 'redux';

import user from './user/user.reducer';

export default function() {
  return combineReducers({
    user
  });
}