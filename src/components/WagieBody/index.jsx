import WagieWindow from './WagieWindow'
import styles from './styles.module.css'
import Button from '../Button'

export default function WagieBody() {
    return (
        <div className={styles.wrapper}>
            <WagieWindow />

            <div className={styles.menu}>
                <Button name="copy that shit" />
                <Button name="give me another one"/>
            </div>
        </div>
    )
}