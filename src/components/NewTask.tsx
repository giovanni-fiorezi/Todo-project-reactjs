import styles from './NewTask.module.css';
import { PlusCircle } from 'phosphor-react'

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
                        <PlusCircle size={16} weight="regular" />
                    Criar
                </button>
            </div>
            
        </div>
    );
}