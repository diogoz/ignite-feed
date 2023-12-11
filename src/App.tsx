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
        avatarUrl: "https://github.com/diogoz.png",
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
      publishedAt: new Date("2022-12-10 20:00:00"),
    },
    {
      id: 2,
      author: {
        avatarUrl: "https://github.com/renatojfsantos.png",
        name: "Renato Santos",
        role: "Developer",
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
      publishedAt: new Date("2022-12-09 20:00:00"),
    },
  ];

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <div key={post.id}>
                <Post
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              </div>
            );
          })}
        </main>
      </div>
    </div>
  );
}
