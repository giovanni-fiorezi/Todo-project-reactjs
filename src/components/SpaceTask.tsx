import styles from './SpaceTask.module.css';

import notepad from '../assets/Clipboard.svg';

export function SpaceTask() {
    return (
        <article className={styles.container}>
            <header>
                <div className={styles.header}>
                    <p className={styles.create}>Tarefas criadas 0</p>
                    <p className={styles.done}>Concluidas 0</p>
                </div>
            </header>
            <footer className={styles.footer}>
                {/* <div> */}
                    <img 
                        src={notepad} 
                        height={56}
                        width={56}
                        alt="Imagem da agenda"
                    />
                    <strong>Você ainda não tem tarefas cadastradas</strong>
                    <span>Crie tarefas e organize seus itens a fazer</span>
                {/* </div> */}
            </footer>
        </article>   
    )
}