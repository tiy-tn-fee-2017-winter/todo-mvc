import { combineReducers } from 'redux';

export function todos(state, action) {
  switch (action.type) {
    case '':
    default:
      return state;
  }
}

export default combineReducers({
  todos,
});
