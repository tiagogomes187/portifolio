import styles from './Sobre.module.css';
import avatar from './images/avatar.png';
import java from './images/java.svg';
import spring from './images/spring.svg';
import springBoot from './images/springboot.svg';
import git from './images/git.svg';
import postgress from './images/postgresql.svg';
import react from './images/react.svg';
import html5 from './images/html5.svg';
import css from './images/css.svg';




function Sobre() {
    return (
        <section className={styles.sobre}>
            
            <div className={styles.bio}>
                <img src={avatar} alt="Avatar" className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>

                    <p>Sou <span>Tiago Gomes</span> <br />
                    <strong>Dev Java Júnior</strong> </p>

                    <p>Iniciei na área de programação no ano de 2017, quando optei em fazer faculdade de &quot;Análise e desenvolvimento de sistemas&quot; pela universidade de são Paulo - UNICID.<br/> Graduado em dezembro de 2019, desde então eu venho estudando tudo sobre programação e em específico a linguagem Java e os principais Frameworks em alta no mercado de trabalho atual.</p>

                    <p>Eu ainda não trabalho na área de programação e nem fiz nenhum estágio, porém devido a muitos estudos e realizações de vários Bootcamps tenho uma base bem sólida sobre o assunto e estou muito confiante e preparado para o meu primeiro emprego como programador.</p>

                    <p>Sou muito dedicado e sempre curioso em aprender novas habilidades ou aprimorar os meus conhecimentos já adquiridos, mantendo-se sempre atualizado o mundo da TI.</p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                <img src={java} alt="Ícone do Java" />
                <img src={spring} alt="Ícone do Spring" />
                <img src={springBoot} alt="Ícone do Spring Boot" />
                <img src={git} alt="Ícone do Spring Security" />
                <img src={postgress} alt="Ícone do PostgresSql" />
                <img src={html5} alt="Ícone do Html5" />
                <img src={css} alt="Ícone do Css" />
                <img src={react} alt="Ícone do React" />

                </div>
            </div>

        </section>
    )
}

export default Sobre

