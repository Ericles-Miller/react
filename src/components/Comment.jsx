import styles from './Comment.module.css';
import {Trash,ThumbsUp} from 'phosphor-react'

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/Anna-Luiza-Gusmao.png" alt="" />
      <div className={styles.CommentBox}>
        <div className={styles.CommentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Anna Luiza Gusmão</strong>
              <time title='11 de Maio de 2022' dateTime='2022-05-11 08:13:30'>Cerca de uma hora atrás 1h</time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Daniel, parabéns!! 👏👏 </p>
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