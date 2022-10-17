import styles from './NewTask.module.css';
// import { Plus } from 'phosphor-react'

export function NewTask() {
    return (
        <div className={styles.container}>
            <form className={styles.newtaskForm}>
                <textarea
                    placeholder="Adicione uma nova tarefa"
                />
            </form>
            <div>
                <button className={styles.button} 
                    type="submit">
                    {/* <Plus size={32} weight="thin" /> */}
                    Criar +
                </button>
            </div>
            
        </div>
    );
}