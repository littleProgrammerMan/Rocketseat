// JSX = JavaScript + XML

import { Header } from "./components/Header";
import { Post } from "./Components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Victor Costa"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum ipsa saepe cumque omnis eum illo! Iure quia dolor facere veritatis aspernatur hic, pariatur id magnam. Quidem ea perspiciatis sequi odit."
          />
          <Post 
            author="Diego" 
            content="Novos conteúdos" 
          />
        </main>
      </div>
    </div>
  );
}
