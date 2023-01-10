import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface IAvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean
}



export function Avatar({ hasBorder = true, ...props}: IAvatarProps) { //o spread operator faz com que chamo todas as props da interface
  // entao nao e mais necessario chamar mais os parametros manualmente 
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props} // import as props da img que foram declaradas na extend da interface 
    />
  );
}