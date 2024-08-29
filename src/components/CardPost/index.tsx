import styles from './CardPost.module.css'

type CardPostProps = {
  route: string
}

export function CardPost({route}: CardPostProps) {
  return (
    <a href={route} className={styles.cardPost}>
      <div className={styles.cardHeader}>
        <strong>JavaScript data types and data structures</strong>
        <span>Há 1 dia</span>
      </div>

      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.
      </p>
    </a>
  );
}
