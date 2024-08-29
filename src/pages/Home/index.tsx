import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CardPost } from "../../components/CardPost";
import styles from "./index.module.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

export function Home() {
  return (
    <>
      <div className={styles.profile}>
        <img src="https://github.com/aledosreis.png" />
        <div className={styles.profileInfo}>
          <div className={styles.profileHeader}>
            <h1>Alessandro Reis</h1>
            <a href="https://github.com/aledosreis">
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
          <div className={styles.profileFooter}>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              aledosreis
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              DXC Technology
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} />0 seguidores
            </span>
          </div>
        </div>
      </div>

      <div className={styles.homeContent}>
        <div className={styles.pageHeader}>
          <span>Publicações</span>
          <span>6 publicações</span>
        </div>

        <input
          className={styles.searchInput}
          type="text"
          placeholder="Buscar conteúdo"
        />

        <div className={styles.posts}>
          {Array.from({ length: 6 }).map((_, index) => {
            return <CardPost key={index} route={`/post/${index}`} />;
          })}
        </div>
      </div>
    </>
  );
}
