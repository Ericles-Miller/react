import styles from './Sidebar.module.css';
import photoPerfil from '../img/jefferson-santos-9SoCnyQmkzI-unsplash.jpg';
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={photoPerfil} />
      <div className={styles.profile}>
        <Avatar hasBorder ={true} src="https://github.com/Ericles-Miller.png" />
        
        <strong>Ericles Miller</strong>
        <span>FullStack</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine />
          Editar Perfil
        </a>
      </footer>
    </aside>

  );
}