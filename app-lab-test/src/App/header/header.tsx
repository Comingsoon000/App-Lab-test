import styles from './header.module.css';
import image from '../../assets/eisenhower-matrix.jpg';

export const AppHeader = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <img
        className={styles.image}
        src={image}
        alt="Eisenhower Matrix scheme"
      />
      <nav>
        <a
          className={styles.href}
          href="https://goal-life.com/page/method/matrix-eisenhower"
        >
          Want more details?
        </a>
      </nav>
    </header>
  );
};
