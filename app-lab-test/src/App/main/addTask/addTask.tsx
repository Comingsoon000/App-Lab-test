import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TasksActionTypes } from '../../../store/reducers/tasksReducer';
import { ITask } from '../../data/tasks';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { isTextValid } from '../validation';
import styles from './addTask.module.css';

export const AddTask = (): JSX.Element => {
  const dispatch = useDispatch();
  const { tasks } = useTypedSelector((state) => state.tasks);
  const [text, setText] = useState('');

  const addTask = () => {
    const time = `${new Date().toLocaleString()}`;
    if (isTextValid(text, time, tasks)) {
      const newTask: ITask = {
        text,
        time,
        complited: false,
      };
      dispatch({ type: TasksActionTypes.add, payload: newTask });
      setText('');
    }
  };

  return (
    <section className={styles.addTask}>
      <div className={styles.wrapper}>
        <input
          className={styles.input}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className={styles.button} onClick={() => addTask()}>
          add task
        </button>
      </div>
    </section>
  );
};
