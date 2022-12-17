import { useState } from 'react'
import { Header } from './components/Header';
import { Post } from './components/Post';
import './global.css';
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar';

/**
 * author { avatar_url : '' , name: '', role: ''}
 * publishedAt: Date
 * content: string
 */
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Ericles-Miller.png',
      name: 'Ericles Miller',
      role: 'BackEnd @ Estudio Haus'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link',      content:'👉 jane.design/doctorcare </a>'},      
    ],
    publishedAt: new Date('2022-12-15 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/Anna-Luiza-Gusmao.png',
      name: 'Anna Luiza Gusmão',
      role: 'FrontEnd @ Estudio Haus'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link',      content:'👉 https://github.com/Anna-Luiza-Gusmao.png'},      
    ],
    publishedAt: new Date('2022-12-15 20:00:00')
  }
]

const algo = posts.map(post => {
  return 1;
})

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (<Post 
              author      = {post.author}
              content     = {post.content}
              publishedAt = {post.publishedAt}
              
            />)
          })}
        </main>
      </div>
    </div>
  );
}
export default App
