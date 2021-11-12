import { tasks, ITask } from '../../App/data/tasks';

interface ITaskState {
  tasks: ITask[];
}

export enum TasksActionTypes {
  get = 'GET_TASKS',
  add = 'ADD_TASK',
  put = 'PUT_TASK',
  del = 'DELETE_TASK',
}

interface ITasksAction {
  type: TasksActionTypes;
  payload: ITask;
}

const initialState = {
  tasks,
};

// операции по изменению данных лучше произовдить на стороне сервера
// и конечно поиск и замену задач лучше производить по ID на стороне сервера
// но т.к. тестовое задание выполняем без использования сервера, то выполним эти действия ниже
// в качестве критерия по поиску текущей задачи в массиве будем использовать время
// т.к. в рамках данного ТЗ оно почти всегда будет всегда уникальным

const addTask = (state: ITaskState, payload: ITask): ITaskState => {
  const newTasks = [...state.tasks, payload];
  const newState = { ...state, tasks: newTasks };
  return newState;
};

const putTask = (state: ITaskState, payload: ITask): ITaskState => {
  const newTasks = state.tasks.map((task) => {
    return task.time === payload.time ? payload : task;
  });
  const newState = { ...state, tasks: newTasks };
  return newState;
};

const deleteTask = (state: ITaskState, payload: ITask): ITaskState => {
  const newTasks = state.tasks.filter((task) => task.time !== payload.time);
  const newState = { ...state, tasks: newTasks };
  return newState;
};

export const tasksReducer = (
  state = initialState,
  action: ITasksAction
): ITaskState => {
  switch (action.type) {
    case TasksActionTypes.get:
      return state;
    case TasksActionTypes.add:
      return addTask(state, action.payload);
    case TasksActionTypes.put:
      return putTask(state, action.payload);
    case TasksActionTypes.del:
      return deleteTask(state, action.payload);
    default:
      return state;
  }
};
