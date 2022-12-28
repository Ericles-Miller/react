import styles from './Comment.module.css';
import {Trash,ThumbsUp} from 'phosphor-react'
import { Avatar } from './Avatar';
import { useState } from 'react';

interface ICommentProps {
  content : string,
  onDeleteComment: (comment: string) => void 
}


export function Comment({content, onDeleteComment}: ICommentProps) {
  
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
              <strong>Pericles</strong>
              <time title='11 de Maio de 2022' dateTime='2022-05-11 08:13:30'>Sou feio</time>
            </div>

            <button onClick={handleDeleteComment} title='busco diversao'>
              <Trash size={24} />
            </button>
          </header>
          <p>Sou conrno</p>
          <div>Ai como to bandida</div>
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