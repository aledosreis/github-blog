import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import styles from "./CardPost.module.css";

type CardPostProps = {
  route: string;
  title: string;
  body: string | null;
  date: string;
};

export function CardPost({ route, title, body, date }: CardPostProps) {
  return (
    <a href={route} className={styles.cardPost}>
      <div className={styles.cardHeader}>
        <strong title={title}>{title}</strong>
        <span>
          {formatDistanceToNow(date, {
            locale: ptBR,
            addSuffix: true,
          })}
        </span>
      </div>

      <p>{body || "Não informado"}</p>
    </a>
  );
}
