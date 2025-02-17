import React, { FC } from "react";

import styles from "./index.module.scss";
import { useToDoStore } from "../../data/stores/useToDoStore";

export const App: FC = () => {
    const [tasks, createTask, updateTask, removeTask] = useToDoStore(state => [
        state.tasks,
        state.createTask,
        state.updateTask,
        state.removeTask,
    ])
    
    createTask("Df");

    return (
        <article className={styles.article}>
            <h1 className={styles.articleTitle}>To Do App</h1>
            <section className={styles.articleSection}>

            </section>
            <section className={styles.articleSection}>

            </section>
        </article>
     )
}