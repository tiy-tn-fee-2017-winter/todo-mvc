const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export function findAllComplete(data) {
  return {
    type: 'TODO@FINDALL_COMPLETE',
    data,
  };
}

export function findAll() {
  return (dispatch) => {
    fetch('http://tiny-tn.herokuapp.com/collections/todo-ryan')
      .then(r => r.json())
      .then((data) => {
        dispatch(findAllComplete(data));
      });
  };
}

export function createTodoComplete(data) {
  return {
    type: 'TODO@CREATE_COMPLETE',
    data,
  };
}

export function createTodo(title, completed = false) {
  return (dispatch) => {
    fetch('http://tiny-tn.herokuapp.com/collections/todo-ryan', {
      method: 'POST',
      headers,
      body: JSON.stringify({ title, completed }),
    }).then(r => r.json())
      .then((data) => {
        dispatch(createTodoComplete(data));
      });
  };
}

export function updateTodoComplete(data) {
  return {
    type: 'TODO@UPDATE_COMPLETE',
    data,
  };
}

export function updateTodo(id, data) {
  return (dispatch) => {
    fetch(`http://tiny-tn.herokuapp.com/collections/todo-ryan/${id}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify(data),
    }).then(r => r.json())
      .then((data) => {
        dispatch(updateTodoComplete(data));
      });
  };
}

export function updateTodoTitle(id, title) {
  return updateTodo(id, { title });
}

export function updateTodoCompleted(id, completed) {
  return updateTodo(id, { completed });
}

export function removeTodoComplete(id) {
  return {
    type: 'TODO@REMOVE_COMPLETE',
    id
  };
}

export function removeTodo(id) {
  return (dispatch) => {
    fetch(`http://tiny-tn.herokuapp.com/collections/todo-ryan/${id}`, {
      method: 'DELETE',
    }).then(() => {
      dispatch(removeTodoComplete(id));
    });
  };
}

export function removeTodoAllCompleted() {
  return (dispatch, getState) => {
    const completedIds = getState().todos
      .filter(x => x.completed)
      .map(x => x._id);

    completedIds.forEach((id) => {
      const thunk = removeTodo(id);

      thunk(dispatch);
    });
  };
}
