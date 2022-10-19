import { useState } from 'react'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Tasks } from './components/Tasks'
import './global.css'

import styles from './App.module.css'

export function App() {
  // const [count, setCount] = useState(0);

  return (

    <div>
      <Header />
        <div className={styles.wrapper}>
          <NewTask />
        </div>
        <div>
          <Tasks />
        </div>
    </div>
  )
}
