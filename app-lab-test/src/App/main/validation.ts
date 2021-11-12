import { ITask } from '../data/tasks';

// если текст задачи уже есть в задачах, то возращаем false, иначе true
export const isTextValid = (
  text: string | undefined,
  time: string,
  tasks: ITask[]
): boolean => {
  if (text === '') {
    return false;
  }

  const result = !tasks
    .filter((task) => task.time !== time)
    .find((task) => task.text === text);

  return result;
};
