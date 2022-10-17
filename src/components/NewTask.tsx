import styles from './NewTask.module.css';

export function NewTask() {
    return (
        <div>
            <form className={styles.newtaskForm}>
                <textarea
                    placeholder="Adicione uma nova tarefa"
                />
                <button type="submit">
                    Criar +
                </button>
            </form>
        </div>
    );
}