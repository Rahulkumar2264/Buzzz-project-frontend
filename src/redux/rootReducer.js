import { combineReducers } from 'redux';

import user from './user/user.reducer';
import post from './post/post.reducer';

export default function createRootReducer() {
  return combineReducers({
    user,
    post
  });
}