import { useEffect, useState } from "react";
import Card from "../../components/Card";
import styles from "./Projetos.module.css";

function Projetos() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const buscarRepositorios = async () => {
      const response = await fetch(
        "https://api.github.com/users/tiagogomes187/repos?page=1&per_page=150"
      );
      const data = await response.json();
      setRepositories(data);
    };
    buscarRepositorios();
  }, []);

  return (
    <section className={styles.projetos}>
      <h2>Projetos</h2>
      <section className={styles.lista}>
        <Card
          name={"dscatalog-bootcamp-devsuperior"}
          description="Este App consiste em um catálogo de produtos completo, construir a API com Java e Spring e o Frontend com React."
          html_url={
            "https://github.com/tiagogomes187/dscatalog-bootcamp-devsuperior"
          }
        />
        <Card
          name={"gtincatalog"}
          description="Este projeto consiste em uma API que disponibilisa um catálogo de produtos e seus códigos de barras EAN."
          html_url={"https://github.com/tiagogomes187/gtincatalog"}
        />
        <Card
          name={"RestWithSpringBootUdemy"}
          description="API REST do 0 e implante na AWS c. Spring Boot framework Swagger JWT JUnit 5 Mockito Docker React JS e +"
          html_url={"https://github.com/tiagogomes187/RestWithSpringBootUdemy"}
        />
        <Card
          name={"heroesapi"}
          description="API de gerenciamento de heróis com Spring WebFlux e Reactor. DynamoDB localmente, realizar testes unitários com Junit e gerar documentação usando Postman e Swagger."
          html_url={"https://github.com/tiagogomes187/heroesapi"}
        />
      </section>
      {repositories.length > 0 ? (
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
      )}
    </section>
  );
}

export default Projetos;
