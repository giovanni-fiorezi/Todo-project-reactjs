import { useState } from 'react'
import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { SpaceTask } from './components/SpaceTask'
import './global.css'

import styles from './App.module.css'

const tasks = [
  {
    id: 1,
    content: 'Desenvolver projeto e praticar'
  },
  {
    id: 2,
    content: 'Aprimorar conhecimento'
  }

]

export function App() {
  return (

    <div>
      <Header />
        <div className={styles.wrapper}>
          <NewTask />
              <main>
                  <SpaceTask />
            </main>
        </div>
      </div>
  )
}
