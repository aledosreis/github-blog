import Markdown from "react-markdown";
import styles from "./post.module.css";

const markdown = `**Programming languages all have built-in data structures, but these often differ from one language to another.** This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.\n

[Dynamic typing](#)\n
JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:\n

~~~javascript
let foo = 42;   // foo is now a number
foo = ‘bar’;    // foo is now a string
foo = true;     // foo is now a boolean
~~~
`

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

      <Markdown className={styles.postContent}>
        {markdown}
      </Markdown>
    </>
  );
}
