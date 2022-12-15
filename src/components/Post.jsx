import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';

/**
 * author { avatar_url : '' , name: '', role: ''}
 * publishedAt: Date
 * content: string
 */
export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder={true} src="https://github.com/Anna-Luiza-Gusmao.png" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Anna Luiza Gusmão</strong>
                        <span>FrontEnd</span>
                    </div>
                </div>
                <time title='11 de Maio de 2022' dateTime='2022-05-11 08:13:30'>Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>
                <textarea 
                    placeholder='Deixe um comentario'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    );
}