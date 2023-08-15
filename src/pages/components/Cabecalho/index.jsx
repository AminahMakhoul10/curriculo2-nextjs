import styles from "./styles.module.css"
export default function Cabecalho(){
    return(
        <>
            <nav>
                <ul className={styles.menu}>
                    <li className={styles.menu_botoes}>INÍCIO</li>
                    <li className={styles.menu_botoes}>FORMAÇÃO</li>
                    <li className={styles.menu_botoes}>PROJETOS</li>
                </ul>
            </nav>
        </>
    )
}