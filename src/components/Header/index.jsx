import styles from './styles.module.css'

export default function Header() {
    return (
        <header className={styles.wrapper}>
            <h1 className="header-title">Wagie BOT</h1>
            <img src="" alt="" />
            <h2 className="header-subtitle">Daily Wagie quotes</h2>
        </header>
    );
}
