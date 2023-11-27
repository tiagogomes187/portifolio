import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import styles from "./Contatos.module.css";

function Contatos() {
  return (
    <>
      <section className={styles.contatos}>
        <h2>Contatos</h2>

        <h3>Entre em contato</h3>
        <p>Para que possamos conversar mais sobre</p>

        <div className={styles.icones}>
          <a
            href="mailto:tiago@tiagogomes.dev.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoMail className={styles.icone} />
          </a>

          <a
            href="https://www.instagram.com/tiago.gomes187"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram className={styles.icone} />
          </a>

          <a
            href="https://api.whatsapp.com/send/?phone=5511994032475&text=Ol%C3%A1%20Tiago,%20tudo%20bem%20com%20voc%C3%AA?"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsWhatsapp className={styles.icone} />
          </a>

          <a
            href="https://github.com/tiagogomes187"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className={styles.icone} />
          </a>

          <a
            href="https://www.linkedin.com/in/tiago-gomes187/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin className={styles.icone} />
          </a>
        </div>
      </section>
    </>
  );
}

export default Contatos;
