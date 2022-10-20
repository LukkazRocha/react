import { Header } from './components/Header';
import { Post } from './Post';

import './styles.css'

export function App() {

  return (
    <div>
      <Header />
      <Post 
        author="Lucas Rocha" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus numquam ipsam tenetur dignissimos eius assumenda reprehenderit, iste molestias delectus odit, alias praesentium consequatur nihil quis minus exercitationem? Voluptatem, minima ratione."  
      />
      <Post
        author="Diego Fernandes"
        content="Um novo post muito legal"
      />      
    </div>
  )
};

