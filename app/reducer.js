import { combineReducers } from 'redux';

export function todos(state = [], action) {
  switch (action.type) {
    case 'TODO@CREATE_COMPLETE':
      return [...state, action.data];
    case 'TODO@FINDALL_COMPLETE':
      return [...state, ...action.data];
    case 'TODO@UPDATE_COMPLETE':
      return state.map((curr) => {
        if (curr._id === action.data._id) {
          return action.data;
        }

        return curr;
      });
    case 'TODO@REMOVE_COMPLETE':
      return state.filter(c => c._id !== action.id);
    default:
      return state;
  }
}

export default combineReducers({
  todos,
});
