import Image from "next/image";
import { Avatar } from "../Avatar";
import styles from "./Card.module.css"
export const CardPost = ({ post }) => {
  return (
    <article className={styles.article} >
      <header className={styles.header}>
        <figure>
          <Image
            src={post.cover}
            width={438}
            height={133}
            alt={`Capa do poste do de titulo: ${post.title}`}
          />
        </figure>
      </header>
      <section className={styles.body}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        texto
      </section>
      <footer className={styles.footer}>
        <Avatar  imageSrc={post.author.avatar} name={post.author.Username} />
      </footer>
    </article>
  );
};
