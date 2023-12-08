import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
        <div>
      <p>&copy; 2023 - Todos os direitos reservados</p>
      <nav>
        <ul>
          <li>
            <a href="/sobre">Sobre mim</a>
          </li>
          <li>
            <a href="/contatos">Contatos</a>
          </li>
        </ul>
      </nav>
      </div>
    </footer>
  );
}

export default Footer;
