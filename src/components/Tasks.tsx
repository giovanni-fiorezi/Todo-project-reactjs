import styles from './Tasks.module.css';

import notepad from '../assets/Clipboard.svg';

export function Tasks() {
    return (
        <article className={styles.container}>
            <header>
                <div className={styles.header}>
                    <p className={styles.create}>Tarefas criadas 0</p>
                    <p className={styles.done}>Concluidas 0</p>
                </div>
                
            </header>
            <footer className={styles.footer}>
                <div className={styles.image}>
                    <img 
                        src={notepad} 
                        alt="Imagem da agenda"
                        />
                </div>
                        <strong>Você ainda não tem tarefas cadastradas</strong>
                        <span>Crie tarefas e organize seus itens a fazer</span>
                
            </footer>
        </article>   
    )
}