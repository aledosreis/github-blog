import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Issue } from "../../@types/githubIssues";
import { api } from "../../lib/axios";

import styles from "./post.module.css";

export function Post() {
  const { postId } = useParams();

  const [post, setPost] = useState<Issue>();

  async function fetchPost() {
    const response = await api.get(
      `repos/rocketseat-education/reactjs-github-blog-challenge/issues/${postId}`
    );
    setPost(response.data);
  }

  useEffect(() => {
    fetchPost();
  }, []);

  if (!post) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <div className={styles.postInfo}>
        <div className={styles.postActions}>
          <a href="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            VOLTAR
          </a>
          <a href={post.html_url} target="_blank">
            VER NO GITHUB
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
        <h1>{post.title}</h1>
        <div className={styles.postMetrics}>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {post.user.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faCalendarDay} />
            {formatDistanceToNow(post.created_at, {
              locale: ptBR,
              addSuffix: true,
            })}
          </span>
          <span>
            <FontAwesomeIcon icon={faComment} />
            {post.comments} comentários
          </span>
        </div>
      </div>

      <Markdown
        className={styles.postContent}
        children={post.body}
        components={{
          code(props) {
            const { children, className, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                PreTag="div"
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                style={dracula}
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}
      />
    </>
  );
}
