import styles from './toDo.module.css';
import { Task } from '../task/task';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const ToDo = (): JSX.Element => {
  const { tasks } = useTypedSelector((state) => state.tasks);

  return (
    <section className={styles.toDo}>
      <h3 className={styles.title}>todo</h3>
      <ul className={styles.list}>
        {tasks
          .filter((task) => !task.complited)
          .map((task) => {
            return (
              <Task
                key={task.time}
                text={task.text}
                time={task.time}
                complited={task.complited}
              />
            );
          })}
      </ul>
    </section>
  );
};
