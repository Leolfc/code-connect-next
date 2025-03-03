// const post =  {

//     "id": 1,
//     "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-react.png",
//     "title": "Introdução ao React",
//     "slug": "introducao-ao-react",
//     "body": "Neste post, vamos explorar os conceitos básicos do React, uma biblioteca JavaScript para construir interfaces de usuário. Vamos cobrir componentes, JSX e estados.",
//     "markdown": "```javascript\nfunction HelloComponent() {\n  return <h1>Hello, world!</h1>;\n}\n```",
//     "author": {
//         "id": 101,
//         "name": "Ana Beatriz",
//         "username": "anabeatriz_dev",
//         "avatar": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png"
//     }
// }
import { CardPost } from "@/components/CardPost";
import Image from "next/image";
import styles from "./page.module.css";
import logger from "@/logger";
async function getAllPosts() {
  const response = await fetch("http://localhost:3042/posts");
  if (!response.ok) {
    logger.error("Ops! Algo deu errado");
  }
  logger.info("Post obtido com sucesso!!!😊");
  return response.json();
}

export default async function Home() {
  const posts = await getAllPosts();
  return (
    <main>
      {posts.map((post) => (
        <CardPost post={post} />
      ))}
    </main>
  );
}
