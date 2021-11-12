import styles from './complited.module.css';
import { Task } from '../task/task';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const Complited = (): JSX.Element => {
  const { tasks } = useTypedSelector((state) => state.tasks);

  return (
    <section className={styles.complited}>
      <h3 className={styles.title}>done</h3>
      <ul>
        {tasks
          .filter((task) => task.complited)
          .map((task) => (
            <Task
              key={task.time}
              text={task.text}
              time={task.time}
              complited={task.complited}
            />
          ))}
      </ul>
    </section>
  );
};
