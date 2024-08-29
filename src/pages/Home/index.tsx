import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

import { CardPost } from "../../components/CardPost";
import { GithubUser } from "../../@types/githubUser";
import { api } from "../../lib/axios";

import styles from "./index.module.css";

export function Home() {
  const [userData, setUserData] = useState<GithubUser>()

  async function fetchUserData() {
    const response = await api.get('users/aledosreis')
    setUserData(response.data)
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <>
      <div className={styles.profile}>
        <img src={userData?.avatar_url} />
        <div className={styles.profileInfo}>
          <div className={styles.profileHeader}>
            <h1>{userData?.name}</h1>
            <a href="https://github.com/aledosreis">
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <p>
            {userData?.bio || "Descrição do autor não informada"}
          </p>
          <div className={styles.profileFooter}>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              {userData?.login}
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              {userData?.company || "Não informado"}
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              {userData?.followers} seguidores
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
