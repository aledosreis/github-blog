import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

import { CardPost } from "../../components/CardPost";
import { GithubUser } from "../../@types/githubUser";
import { Issue } from "../../@types/githubIssues";

import { api } from "../../lib/axios";

import styles from "./index.module.css";

export function Home() {
  const [userData, setUserData] = useState<GithubUser>();
  const [posts, setPosts] = useState<Issue[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  function handleSearchPosts(e: FormEvent) {
    e.preventDefault()
    fetchPosts(searchText)
  }

  function handleSearchPostTextChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value)
  }

  async function fetchUserData() {
    const response = await api.get("users/aledosreis");
    setUserData(response.data);
  }

  async function fetchPosts(search?: string) {
    console.log(search)
    const response = await api.get("search/issues", {
      params: {
        q: search
          ? `${search} repo:aledosreis/github-blog label:post`
          : "repo:aledosreis/github-blog label:post",
      },
    });

    setPosts(response.data.items);
  }

  useEffect(() => {
    fetchUserData();
    fetchPosts();
  }, []);

  return (
    <>
      <div className={styles.profile}>
        <img src={userData?.avatar_url} />
        <div className={styles.profileInfo}>
          <div className={styles.profileHeader}>
            <h1>{userData?.name}</h1>
            <a href="https://github.com/aledosreis" target="_blank">
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <p>{userData?.bio || "Descrição do autor não informada"}</p>
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

      <div className={styles.pageHeader}>
        <span>Publicações</span>
        <span>{posts.length} publicações</span>
      </div>

      <form onSubmit={handleSearchPosts}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Buscar conteúdo"
          value={searchText}
          onChange={handleSearchPostTextChange}
        />
      </form>

      <div className={styles.posts}>
        {posts.map((post) => {
          return (
            <CardPost
              key={post.number}
              route={`/post/${post.number}`}
              title={post.title}
              body={post.body}
              date={post.created_at}
            />
          );
        })}
      </div>
    </>
  );
}
