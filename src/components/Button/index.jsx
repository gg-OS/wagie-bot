import styles from './styles.module.css'

export default function Button(props) {
    return (
        <button className={styles.btn}>
            <span>{props.name}</span>
        </button>
    )
}