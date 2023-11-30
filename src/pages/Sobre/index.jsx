import styles from "./Sobre.module.css";
import avatar from "./images/avatar.png";
import java from "./images/java.svg";
import spring from "./images/spring.svg";
import springBoot from "./images/springboot.svg";
import git from "./images/git.svg";
import postgress from "./images/postgresql.svg";
import react from "./images/react.svg";
import html5 from "./images/html5.svg";
import css from "./images/css.svg";

function Sobre() {
  return (
    <section className={styles.sobre}>
      <div className={styles.bio}>
        <img src={avatar} alt="Avatar" className={styles.avatar} />
        <div className={styles.textos}>
          <h2>Sobre</h2>

          <p>
            Sou <span>Tiago Gomes</span> <br />
            <strong>Dev Java Júnior</strong>{" "}
          </p>

          <p>
            Meu nome é Tiago Gomes e busco uma posição como Desenvolvedor Java
            Junior. Iniciei meus estudos com desenvolvimento de aplicações no
            ano de 2017, ao entrar no curso universitário &quot;Análise e
            Desenvolvimento de Sistemas&quot; (UNICID/São Paulo). <br />
            <br />
            Graduei em 2019 e desde então venho aprimorando meus conhecimentos
            por meio de estudos de diversas tecnologias. <br />
            Uma das quais tenho me desenvolvido mais é a linguagem Java e os
            principais frameworks de desenvolvimento de mercado. <br />
            Apesar de ainda não ter atudo na área de TI, tenho participado de
            diversos bootcamps e acredito ter uma base bem sólida quanto a
            desenvolvimento de aplicações. <br /> <br />
            Estou muito confiante e preparado para assumir uma posição como
            desenvolvedor. Dentre minhas qualidades destaco o fato de ser muito
            curioso, quanto ao funcionamento da tecnologia, motivado para
            assimilação e aprimoração de meus conhecimentos e em particular,
            busco manter-me atualizado no mundo TI. <br /> <br />
            Atualmente estou finalizando uma loja virtual. <br /> <br />
            Neste momento estou buscando uma posição para atuar de forma efetiva
            numa organização que permita e incentive meu desenvolvimento na
            área. Estou à disposição!
          </p>
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
  );
}

export default Sobre;
