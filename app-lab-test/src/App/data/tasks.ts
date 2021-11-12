export interface ITask {
  text: string;
  time: string;
  complited: boolean;
}

export const tasks: ITask[] = [
  {
    text: 'Task 1',
    time: '12.11.2021, 16:28:20',
    complited: false,
  },
  {
    text: 'Task 2',
    time: '12.11.2021, 16:28:40',
    complited: false,
  },
  {
    text: 'Task 3',
    time: '12.11.2021, 16:28:45',
    complited: true,
  },
];
