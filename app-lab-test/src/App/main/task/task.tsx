import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TasksActionTypes } from '../../../store/reducers/tasksReducer';
import { ITask } from '../../data/tasks';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { isTextValid } from '../validation';
import styles from './task.module.css';

interface TaskProp {
  text: string;
  time: string;
  complited: boolean;
}

export const Task = ({ time, text, complited }: TaskProp): JSX.Element => {
  const dispatch = useDispatch();
  const { tasks } = useTypedSelector((state) => state.tasks);
  const [curText, setText] = useState(text);
  const [mode, setMode] = useState(true);
  const editButtonClass = mode ? styles.editButton : styles.saveButton;
  const coverClass = mode ? styles.cover : styles.hidden;
  const textInputClass = mode ? styles.hidden : styles.text;

  const changeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const changeStatus = () => {
    const changedTask: ITask = {
      text: text,
      time: time,
      complited: !complited,
    };
    dispatch({ type: TasksActionTypes.put, payload: changedTask });
  };

  const putTask = () => {
    if (mode) {
      setMode(!mode);
    } else if (isTextValid(curText, time, tasks)) {
      const puttingTask: ITask = {
        text: curText,
        time: time,
        complited,
      };
      dispatch({ type: TasksActionTypes.put, payload: puttingTask });
      setMode(!mode);
    }
  };

  const deleteTask = () => {
    const deletingTask: ITask = {
      text,
      time,
      complited,
    };
    dispatch({ type: TasksActionTypes.del, payload: deletingTask });
  };

  return (
    <li className={styles.task} key={time}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={complited}
        onChange={() => changeStatus()}
      />
      <div className={coverClass}>{curText}</div>
      <input
        className={textInputClass}
        type="text"
        value={curText}
        onChange={(e) => changeTask(e)}
      />
      <div className={styles.wrapper}>
        <p className={styles.time}>{time}</p>
        <button className={editButtonClass} onClick={() => putTask()}></button>
        <button
          className={styles.delButton}
          onClick={() => deleteTask()}
        ></button>
      </div>
    </li>
  );
};
