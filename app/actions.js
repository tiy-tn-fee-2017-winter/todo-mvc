export function createTask(description) {
  return (dispatch) => {
    fetch('http://tiny-tn.herokuapp.com/collections/todo-ryan', {
      method: 'POST',
      body: JSON.stringify({
        description,
        createdAt: (new Date()).toString(),
        completed: false,
      }),
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
    }).then(r => r.json())
      .then((data) => {
        dispatch({
          type: 'TASK@CREATE_COMPLETE',
          data,
        });
      });
  };
}

export function toggleTask(_id) {
  return {
    type: 'TASK@TOGGLE_COMPLETED',
    _id,
  };
}

export function updateTaskDescription(_id, description) {
  return {
    type: 'TASK@UPDATE_DESCRIPTION',
    _id,
    description,
  };
}

export function updateTask(task) {
  return {
    type: 'TASK@UPDATE_COMPLETE',
    data: task,
  };
}

export function findAllTask() {
  return (dispatch) => {
    fetch('http://tiny-tn.herokuapp.com/collections/todo-ryan')
    .then(r => r.json())
    .then((data) => {
      dispatch({
        type: 'TASK@FINDALL_COMPLETE',
        data,
      });
    });
  };
}

export function removeTask(_id) {
  return {
    type: 'TASK@REMOVE_COMPLETE',
    _id,
  };
}
