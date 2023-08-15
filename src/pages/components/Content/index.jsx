import Image from "next/image";
import styles from "./styles.module.css";

export default function Content() {

  return (
      <div className={styles.containerContent}>
      <section className={styles.content}>
          <h2>SOBRE</h2>
          <p>Olá me chamo Aminah Makhoul, tenho 19 anos e é um prazer estar aqui para compartilhar as minhas competencias e formação. </p>
        </section>

        <section className={styles.content}>
          <h2>FORMAÇÃO ACADEMICA</h2>
          <p>Atualmente estou cursando ensino superior em Análise e Desenvolvimento de Sistemas (4° período) no Instituto Federal de Rondonia-Campus Vilhena.</p>

        </section>

        <section className={styles.content}>
            <h2>FORMAÇÃO COMPLEMENTAR</h2>
            <p><strong>2021/1 - </strong> Curso Assistente de Produção -Senai Vilhena </p>
            <p><strong>2021/2 - </strong> Curso Assistente Administrativo -Senai Vilhena </p>
            <p><strong>2022 - </strong> Curso Python 3 Básico ao Avançado -Udemy </p>
            <p><strong>2023 - </strong> Programação Orientada a Objetos -Udemy </p>

        </section>

        <section className={styles.content}>
            <h2>PROJETOS</h2>
            <p>Atualmente trabalho no projeto <strong>"Fechaduras Inteligentes"</strong> da matéria Fábrica de Software do Ifro Vilhena.</p>
        </section>

        <section className={styles.content}>
            <h2>GALERIA DE FOTOS</h2>
            <div className={styles.containerImages}>
                <Image
                 src={"/galeria1.png.jpg"}
                 alt="Foto de alunos do ifro"
                 style={{ border: "3px solid var(--gray-300)" }}
                 layout="fill"
                 className={styles.image}
               />

               <Image
                src={"/galeria2.png.jpg"}
                alt="Foto de alunos do ifro"
                style={{ border: "3px solid var(--gray-300)" }}
                layout="fill"
                className={styles.image}
              />

              <Image
               src={"/galeria3.png.jpg"}
               alt="Foto de alunos do ifro"
               style={{ border: "3px solid var(--gray-300)" }}
               layout="fill"
               className={styles.image}
             />

            </div>
        </section>

        
      </div>

      

      
  )
}