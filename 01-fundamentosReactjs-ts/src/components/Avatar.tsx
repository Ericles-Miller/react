import styles from './avatar.module.css';

interface IAvatarProps {
  hasBorder?: boolean,
  src: string;
  alt?: string;
}



export function Avatar(props: IAvatarProps) {
  return (
    <div>
      <img
        className={props.hasBorder ? styles.avatarWithBorder : styles.avatar}
        src={props.src}
        alt="" />
    </div>
  );
}