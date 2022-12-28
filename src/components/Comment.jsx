import styles from './Comment.module.css';
import {Trash,ThumbsUp} from 'phosphor-react'
import { Avatar } from './Avatar';

export function Comment({content, onDeleteComment}) {
  
  function handleDeleteComment() {
    console.log('deletar');

    onDeleteComment(content);
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
          <button>
            <ThumbsUp />
            Aplaudir <span>{20}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}