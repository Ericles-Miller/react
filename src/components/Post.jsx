import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import {format} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { formatDistanceToNow } from 'date-fns/esm';
import { useState } from 'react';
/**
 * author { avatar_url : '' , name: '', role: ''}
 * publishedAt: Date
 * content: string
 */
export function Post({ author , publishedAt,content}) {

  const [comments, setComments] = useState([
    'Post legal!'
  ])

  const [newCommentText, setNewCommentText] = useState('')
  
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'",{
    locale:ptBR
  });

  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale : ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment() {
    event.preventDefault()
  
    console.log(event.target.comment) // serve para verificar qual tipo de evento esta acontecendo 
    const newCommentText = event.target.comment.value
    // imutabilidade 
    setComments([...comments, newCommentText ])
    setNewCommentText('');

  }

  function handleNewCommentChange() {
   setNewCommentText(event.target.value);
  }
  

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} src={author.avatarUrl} alt="" />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph'){
            return <p>{line.content}</p>;
          }else if(line.type ==='link') {
            return <p><a href='#'>{line.content}</a></p>;
          }
        })}

      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu Feedback</strong>
        <textarea
          name='comment'
          placeholder='Deixe um comentario'
          onChange={handleNewCommentChange}
          value={newCommentText}
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment content={comment}/>
        })}
      </div>
    </article>
  );
}