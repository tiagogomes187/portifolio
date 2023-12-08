import styles from "./Card.module.css";
import { FaJava, FaCss3Alt, FaReact } from "react-icons/fa";
import { BiLogoPostgresql,BiLogoSpringBoot } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { BsArrowRight } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
function Card({ name, description, html_url }) {
  return (
    <section className={styles.card}>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className={styles.card_footer}>
        <div className={styles.card_icones}>
          <FaJava />
          <BiLogoSpringBoot />
          <BiLogoPostgresql />
          <FaCss3Alt />
          <SiTypescript />
          <FaReact />
        </div>
        <a
          href={html_url}
          className={styles.botao}
          target="_self"
          rel="noopener noreferrer"
        >
          <BsArrowRight />
        </a>
      </div>
    </section>
  );
}

export default Card;
