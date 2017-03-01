export function createTask(description) {
  return {
    type: 'TASK@CREATE_COMPLETE',
    data: {
      description,
      _id: new Date(), // This will get replaced by the server
      createdAt: new Date(),
      completed: false,
    },
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

export function findAllTask(data = []) {
  return {
    type: 'TASK@FINDALL_COMPLETE',
    data,
  };
}

export function removeTask(_id) {
  return {
    type: 'TASK@REMOVE_COMPLETE',
    _id,
  };
}
