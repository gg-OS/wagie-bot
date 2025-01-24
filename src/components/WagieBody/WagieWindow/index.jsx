import styles from './styles.module.css'
import Button from '../../Button'
import { Fragment } from 'react'

export default function WagieWindow () {
    return (
        <Fragment>
            <div className={styles.box}>
                <div className={styles.boxTitle}>
                    <h2>Titulo da caixa</h2>
                </div>

                <div className={styles.boxContent}>
                    <p>Conteudo de texto da caixa</p>
                </div>
            </div>
        </Fragment>

    )
}