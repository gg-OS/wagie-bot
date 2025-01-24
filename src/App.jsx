import Header from './components/Header'
import WagieBody from './components/WagieBody'
import styles from './App.module.css'

export default function App() {
  return (
    <div className={styles.root}>
      <Header />
      <WagieBody />
    </div>
  )
}