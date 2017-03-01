import { combineReducers } from 'redux';

export function counters(state = [0], action) {
  switch (action.type) {
    case 'COUNTER@ADD_COUNTER':
      return [...state, 0];
    case 'COUNTER@INCREMENT':
      // loop through all of the items if the index is the same
      // replace that item with its current value + 1
      return state.map((curr, index) => {
        if (index === action.index) {
          return curr + 1;
        }

        return curr;
      });
    default:
      return state;
  }
}

export default combineReducers({
  counters,
});
