import styles from "./styles.module.css"

export default function Fundo(){
    return(
        <>
            <div className={styles.cabecalho}>
                <img src="/perfil.png.jpg" 
                 alt="Foto de Aminah" className={styles.perfil}/>
                <h1 className={styles.titulo}>Aminah Roca Makhoul</h1>
                <div class={styles.contato}>

                    <a href="https://github.com/AminahMakhoul10" 
                     target="_blank">
                        <img src="/github.png"
                        width={50} 
                        height={50}
                        alt="Logo do GitHub"/>
                    </a>

                    <a href="https://gitlab.fslab.dev/AminahMakhoul1"
                     target="_blank">
                        <img src="/gitlab.png" 
                        width={50}
                        height={50}
                        alt="Logo do GitLab"/>
                    </a>
                    <a href="https://www.linkedin.com/in/aminah-makhoul-a3331722a/"
                     target="_blank">
                        <img src="/linkedin.png"
                        width={50}
                        height={50}
                        alt="Logo do LinkedIn"/>
                    </a>

                    <a href="https://www.instagram.com/sra_hastings/"
                    target="_blank">
                        <img src="/instagram.png"
                        width={50}
                        height={50} 
                        alt="Logo do Instagram"/>
                    </a>
                </div>
            </div>   
        </>
    )
}