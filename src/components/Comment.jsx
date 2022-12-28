import styles from './Comment.module.css';
import {Trash,ThumbsUp} from 'phosphor-react'
import { Avatar } from './Avatar';
import { useState } from 'react';

export function Comment({content, onDeleteComment}) {
  
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    console.log('deletar');

    onDeleteComment(content);
  }

  function handleLikeComment() {
    console.log('like');
    setLikeCount(likeCount +1 )
  }
  
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/Diego3g.png" alt="" />
      <div className={styles.CommentBox}>
        <div className={styles.CommentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Antunes</strong>
              <time title='11 de Maio de 2022' dateTime='2022-05-11 08:13:30'>Cerca de uma hora atrás 1h</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          
          <p>{content} </p>
        </div> 
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}