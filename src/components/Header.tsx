import styles from './header.module.css'
import igniteLogo from '../img/Ignite simbol.svg' ;


export function Header () {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="logotipo do Ignite" />
        </header>
    );
}
