import styles from "./post.module.css";

export function Post() {
  return (
    <>
      <div className={styles.postInfo}>
        <div className={styles.postActions}>
          <a href="/">VOLTAR</a>
          <a href="https://github.com/aledosreis">VER NO GITHUB</a>
        </div>
        <h1>JavaScript data types and data structures</h1>
        <div className={styles.postMetrics}>
          <span>aledosreis</span>
          <span>Há 1 dia</span>
          <span>5 comentários</span>
        </div>
      </div>
    </>
  );
}
