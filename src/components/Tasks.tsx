import styles from './Tasks.module.css';

export function Tasks() {
    return (
        <article className={styles.tasks}>
            <header>
                <div className={styles.taskCreate}></div>
                <div className={styles.taskDone}></div>
            </header>
            <footer>
                <img className={styles.image} src=""/>
                Você ainda não tem tarefas cadastradas
                Crie tarefas e organize seus itens a fazer
            </footer>
        </article>   
    )
}