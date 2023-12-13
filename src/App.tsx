import { Header } from "./components/Header";
import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
export function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl:
          "https://cdn.meutimao.com.br/_upload/idolos-do-corinthians/adenor.jpg",
        name: "Diogo Henrique",
        role: "Web Developer",
      },
      content: [
        { type: "paragraph", content: "Fala galera 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: "jane.design/doctorcare" },
      ],
      publishedAt: new Date("2023-12-10 20:00:00"),
    },
    {
      id: 2,
      author: {
        avatarUrl:
          "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/10/Tite-flamengo-1.jpeg?w=1200&h=1200&crop=1",
        name: "Tite Traíra",
        role: "Técnico de Futebol",
      },
      content: [
        { type: "paragraph", content: "Fala galera 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        },
        { type: "link", content: "jane.design/doctorcare" },
      ],
      publishedAt: new Date("2023-12-09 20:00:00"),
    },
  ];

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post post={post} key={post.id} />;
          })}
        </main>
      </div>
    </div>
  );
}
