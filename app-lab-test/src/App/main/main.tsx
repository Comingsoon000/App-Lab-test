import styles from './main.module.css';
import { AddTask } from './addTask/addTask';
import { ToDo } from './toDo/toDo';
import { Complited } from './completed/complited';

export const AppMain = (): JSX.Element => {
  return (
    <main className={styles.main}>
      <AddTask />
      <ToDo />
      <Complited />
    </main>
  );
};
