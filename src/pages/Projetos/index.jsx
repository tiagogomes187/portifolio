import Card from "../../components/Card";
import styles from "./Projetos.module.css";

function Projetos() {
  // const [repositories, setRepositories] = useState([]);

  // useEffect(() => {
  //   const buscarRepositorios = async () => {
  //     const response = await fetch(
  //       "https://api.github.com/users/tiagogomes187/repos?page=1&per_page=20"
  //     );
  //     const data = await response.json();
  //     setRepositories(data);
  //   };
  //   buscarRepositorios();
  // }, []);

  return (
    <section className={styles.projetos}>
      <h2>Projetos</h2>
      <section className={styles.lista}>

        <Card
          name={"Catálogos de Produtos"}
          description="Este projeto consiste em uma API que disponibilisa um catálogo de produtos e seus códigos de barras EAN."
          html_url={"projetos/detalhes"}
        />
        <Card
          name={"dscatalog-bootcamp-devsuperior"}
          description="Este App consiste em um catálogo de produtos completo, construir a API com Java e Spring e o Frontend com React."
          html_url={
            "https://github.com/tiagogomes187/dscatalog-bootcamp-devsuperior"
          }
        />
      </section>
      {/* {repositories.length > 0 ? (
        <section className={styles.lista}>
          {repositories.map((repo) => (
            <Card
              key={repo.id}
              name={repo.name}
              description={repo.description}
              html_url={repo.html_url}
            />
          ))}
        </section>
      ) : (
        <p>Carregando repositórios...</p>
      )} */}
    </section>
  );
}

export default Projetos;
