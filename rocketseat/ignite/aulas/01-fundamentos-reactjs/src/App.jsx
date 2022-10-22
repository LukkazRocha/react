import { Header } from './components/Header';
import { Post } from './Post'

import styles from './App.module.css'

import './global.css'
import { Sidebar } from './components/Sidebar';

export function App() {

  return (    
    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post 
            author="Lucas Rocha" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nobis neque totam dolor maiores saepe sunt placeat fugit vero tempore magni, assumenda architecto aliquam modi odit earum sequi omnis. Aperiam!" 
          />  
          <Post
            author="Diego Fernandes"
            content="Um novo post muito legal"
          />      
        </main>
      </div>
    </div>    
  )
}

