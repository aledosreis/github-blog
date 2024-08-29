import styles from './CardPost.module.css'

type CardPostProps = {
  route: string
  title: string
  body: string | null
  date: string
}

export function CardPost({route, title, body, date}: CardPostProps) {
  return (
    <a href={route} className={styles.cardPost}>
      <div className={styles.cardHeader}>
        <strong>{title}</strong>
        <span>{date}</span>
      </div>

      <p>
        {body || "Não informado"}
      </p>
    </a>
  );
}
