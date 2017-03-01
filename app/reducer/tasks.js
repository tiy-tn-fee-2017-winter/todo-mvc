export default function tasks(state = [], action) {
  switch (action.type) {
    case 'TASK@CREATE_COMPLETE':
      return [...state, action.data];
    case 'TASK@TOGGLE_COMPLETED':
      return state.reduce((snowball, curr) => {
        if (curr._id === action._id) {
          const newObj = {
            ...curr,
            completed: !curr.completed
          };

          return [...snowball, newObj];
        }

        return [...snowball, curr];
      }, []);
    case 'TASK@UPDATE_DESCRIPTION':
      return state.map((curr) => {
        if (curr._id === action._id) {
          return {
            ...curr,
            description: action.description,
          };
        }

        return curr;
      });
    case 'TASK@UPDATE_COMPLETE':
      return state.map((curr) => {
        if (curr._id === action.data._id) {
          return action.data;
        }

        return curr;
      });
    case 'TASK@FINDALL_COMPLETE':
      return action.data;
    case 'TASK@REMOVE_COMPLETE':
      return state.filter((curr) => curr._id !== action._id);
    default:
      return state;
  }
}
