import ImgFront from "../ProjetoDetalhes/Imagens/oficial.png";
import ImgBack from "../ProjetoDetalhes/Imagens/backend.png";
import "./styles.css";
import Terminal from "../../components/Terminal";

function ProjetoDetalhes() {
  return (
    <>
      <div>
        <h1>Catálogo de Produtos | Miss-Miss Calçados</h1>
        <h3>Conheça a melhor vitrine digital que você já viu.</h3>
      </div>
      <div className="bodydetalhes">
        <div className="sobredetalhes">
          <div>
            <h2>Sobre o sistema</h2>
            <p>
              O sistema foi concebido e desenvolvido com o objetivo de atender
              às demandas do cliente, proporcionando uma exposição eficiente de
              seus produtos tanto para clientes quanto para colaboradores, de
              maneira intuitiva e ágil. <br />
              <br />O sistema deve gerenciar de forma eficiente o cadastro de
              usuários, produtos e suas respectivas categorias. Cada usuário
              deve ser registrado com informações detalhadas, incluindo nome,
              e-mail, telefone, data de nascimento e uma senha de acesso segura.{" "}
              <br /> <br />
              No que diz respeito aos produtos, o sistema deve armazenar dados
              como nome, descrição, preço, imagem, SKU, marca, NCM (Nomenclatura
              Comum do Mercosul), código EAN (European Article Number), e data
              de fabricação. <br />
              <br />
              Para facilitar a experiência do usuário, o sistema deve oferecer
              um <strong>catálogo de produtos</strong> acessível, permitindo
              filtrar a busca pelo nome do produto. A partir desse catálogo, os
              usuários podem selecionar um produto específico para visualizar
              seus detalhes de maneira clara e intuitiva. <br />
              <br />
              Além disso, usuários com privilégios administrativos terão acesso
              a uma área exclusiva, a qual proporciona a administração dos
              cadastros de usuários, produtos e categorias de forma centralizada
              e eficaz. Isso possibilita uma gestão facilitada, contribuindo
              para a eficiência e organização do sistema como um todo.
            </p>
          </div>
        </div>

        <div className="iconesdetalhes">
          <img src={ImgFront} alt="Imagem do frontend" />
          <img src={ImgBack} alt="Imagem do frontend" />
        </div>

        <div className="acesse">
          <a
            href="https://gtincatalog.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Clique aqui e acesse o catálogo em produção
          </a>
        </div>
      </div>

      <div className="ferramentas">
        <h2>Tecnologias utilizadas</h2>
        <table>
          <tr>
            <th>1º Passo</th>
            <td>CRUD</td>
          </tr>
          <tr>
            <th>Ferramentas</th>
            <td>
              Java, Spring Boot, Maven, H2, Postgresql, Postman, Spring Data JPA
            </td>
          </tr>
          <tr>
            <th>Detalhes</th>
            <td>
              Meu projeto, baseado na versão LTS do Java 17, encontra-se agora
              plenamente em produção. Desenvolvi uma aplicação corporativa
              focada em escalabilidade e desempenho, aproveitando as últimas
              características do Java 17 para otimizar a eficiência e segurança
              do código. <br /> <br />A implementação de uma arquitetura modular
              tem contribuído significativamente para facilitar a manutenção do
              sistema. A integração de tecnologias modernas, desde a fase de
              desenvolvimento até a fase de produção, fortaleceu a solidez da
              solução, proporcionando uma experiência robusta aos usuários.{" "}
              <br /> <br />
              Os resultados obtidos até o momento são promissores, e estou
              confiante de que meu projeto está plenamente alinhado com as
              melhorias oferecidas pela versão LTS do Java. Este ambiente de
              produção reflete não apenas a eficiência do código, mas também a
              capacidade de adaptação e integração das mais recentes inovações
              da linguagem Java.
            </td>
          </tr>
        </table>

        <table>
          <tr>
            <th>2º Passo</th>
            <td>Testes automatizados</td>
          </tr>
          <tr>
            <th>Ferramentas</th>
            <td>JUnit, Mockito, MockBean</td>
          </tr>
          <tr>
            <th>Detalhes</th>
            <td>
              Implementei testes automatizados em meu projeto usando JUnit para
              testes de unidade, Mockito para simular comportamentos de objetos
              e o MockBean para testes de integração, garantindo cobertura
              abrangente e confiabilidade no desenvolvimento.
            </td>
          </tr>
        </table>

        <table>
          <tr>
            <th>3º Passo</th>
            <td>Validação e segurança</td>
          </tr>
          <tr>
            <th>Ferramentas</th>
            <td>Bean Validation, Spring Security, JWT, OAuth2</td>
          </tr>
          <tr>
            <th>Detalhes</th>
            <td>
              Priorizei a robustez das camadas de validação e segurança para
              assegurar a integridade e proteção dos dados. Utilizei a
              especificação Bean Validation para realizar validações em tempo de
              execução, garantindo que os dados atendam aos requisitos
              estabelecidos. <br />
              <br />
              Para controle de acesso, adotei o Spring Security, uma ferramenta
              poderosa que facilita a implementação de autenticação e
              autorização. Isso me permitiu definir políticas de segurança de
              forma flexível e adaptável às necessidades específicas do meu
              aplicativo. <br />
              <br />
              Na gestão de identidades, escolhi utilizar JSON Web Tokens (JWT)
              em conjunto com OAuth2. Essas tecnologias proporcionam um método
              seguro e eficiente para autenticar usuários, garantindo a
              confidencialidade e integridade das informações transmitidas entre
              o cliente e o servidor. O OAuth2, por sua vez, oferece um
              framework padrão para autorização, permitindo que eu gerencie
              permissões e acesso de maneira escalável e modular. <br /> <br />
              Essas escolhas refletem meu compromisso em criar um ambiente
              seguro e confiável para meu projeto, incorporando as melhores
              práticas de validação e segurança proporcionadas por essas
              ferramentas.
            </td>
          </tr>
        </table>

        <table>
          <tr>
            <th>4º Passo</th>
            <td>Domínio e ORM, autorizações</td>
          </tr>
          <tr>
            <th>Ferramentas</th>
            <td>Modelo de domínio, JPA, SQL seed</td>
          </tr>
          <tr>
            <th>Detalhes</th>
            <td>
              No meu projeto, concentrei-me na implementação robusta do domínio
              e na gestão eficiente de autorizações, utilizando um modelo de
              domínio bem elaborado, a tecnologia JPA (Java Persistence API)
              para mapeamento objeto-relacional e a semente (seed) SQL para
              inicialização do banco de dados. <br />
              <br />
              O modelo de domínio foi projetado de forma a abranger cenários
              complexos, proporcionando uma representação conceitual completa. A
              JPA foi fundamental para traduzir esse modelo complexo em
              estruturas de banco de dados relacionais, facilitando a
              persistência e recuperação de dados de maneira eficiente.
              <br />
              <br />
              Para garantir a segurança e autorizações customizadas, implementei
              um sistema abrangente. As autorizações foram personalizadas em
              nível de serviço, permitindo controle granular sobre as operações
              realizadas. Além disso, adotei estratégias para fornecer conteúdo
              customizado para usuários logados, promovendo uma experiência
              personalizada. <br />
              <br />
              A gestão de tokens também foi uma prioridade, incluindo a
              implementação de refresh tokens para manter a autenticação do
              usuário. Adotei pré-autorização de métodos para controlar o acesso
              a determinadas funcionalidades, garantindo que apenas usuários
              autorizados possam executar operações específicas.
              <br />
              <br />
              Esse enfoque integrado no modelo de domínio, JPA, SQL seed e
              autorizações customizadas resultou em um sistema robusto, seguro e
              adaptável, capaz de lidar com complexidades inerentes ao ambiente
              conceitual do projeto.
            </td>
          </tr>
        </table>

        <table>
          <tr>
            <th>5º Passo</th>
            <td>Consultas ao banco de dados</td>
          </tr>
          <tr>
            <th>Ferramentas</th>
            <td>Spring Data JPA, JPQL, SQL</td>
          </tr>
          <tr>
            <th>Detalhes</th>
            <td>
              No meu projeto, adotei uma abordagem abrangente para consultas ao
              banco de dados, aproveitando as funcionalidades do Spring Data
              JPA, JPQL e SQL para otimizar o acesso e manipulação de dados.{" "}
              <br />
              <br />
              Para consultas mais simples e operações básicas de persistência,
              aproveitei o Spring Data JPA. Essa ferramenta facilitou a criação
              de repositórios de dados e a execução de consultas de maneira
              eficiente, proporcionando uma camada de abstração que simplificou
              significativamente o código. <br />
              <br />
              Enfrentei o desafio das consultas N+1, comuns em ORM, ao utilizar
              a JPQL (Java Persistence Query Language). Essa linguagem me
              permitiu definir consultas mais específicas e orientadas a
              objetos, evitando o problema das múltiplas consultas
              desnecessárias, resultando em um desempenho mais eficaz.
              <br />
              <br />
              Além disso, para situações que demandavam maior controle sobre as
              consultas ou para resolver desafios específicos, recorri a
              consultas nativas com SQL. Essa abordagem direta possibilitou a
              execução de consultas personalizadas e otimizadas, atendendo a
              requisitos específicos do projeto. <strong>Exemplo: </strong>
              <mark>
                @Query(&quot;SELECT obj FROM Product obj JOIN FETCH
                obj.categories WHERE obj.id IN :productsIds ORDER BY
                obj.name&quot;)
              </mark>{" "}
              <br /> <br />
              Assim, a combinação estratégica de Spring Data JPA, JPQL e SQL
              permitiu que eu atendesse eficazmente às diferentes demandas de
              consulta do meu projeto, garantindo desempenho, flexibilidade e
              controle.
            </td>
          </tr>
        </table>
      </div>
      <div className="contribuicao">
        <h2>Como contribuir</h2>
        <p>
          <strong>Repositório: </strong>
          <a
            href="https://github.com/tiagogomes187/gtincatalog"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/tiagogomes187/gtincatalog
          </a>
        </p>

        <div className="terminal">
          <Terminal />
        </div>
      </div>

      <div className="contribuicao">
        <h2>Collection do Postman</h2>
        <p>
          <strong>Collection: </strong>
          <a
            href="https://github.com/tiagogomes187/gtincatalog/blob/f0e1b8dbfcf391581692030b8355b4964fa4551a/collection-postman/GtinCatalog%20Railway.postman_collection.json"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clique para baixar, depois importe no Postman
          </a>
        </p>
        <p>
          <strong>Environment: </strong>
          <a
            href="https://github.com/tiagogomes187/gtincatalog/blob/f0e1b8dbfcf391581692030b8355b4964fa4551a/collection-postman/gtincatalog-RAILWAY.postman_environment.json"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clique para baixar, depois importe no Postman
          </a>
        </p>
      </div>

      <div className="contribuicao">
        <h2>Diretório estruturado em Monorepo</h2>
        <p>gtincatalog</p>
        <span className="contribuicao-span">./backend</span>
        <span className="contribuicao-span">./frontend</span>
      </div>

      <div className="contribuicao">
        <h2>Licença</h2>
        <p>
          Este projeto está sob licença do MIT. Veja o arquivo{" "}
          <a
            href="https://github.com/tiagogomes187/gtincatalog/blob/b92e7482747734708d4795f81f18e410734fa97b/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
          >
            LICENSE
          </a>{" "}
          para mais detalhes.
        </p>
      </div>

      <div className="contribuicao">
        <h2>Desenvolvedor</h2>
        <p>
          <a
            href="https://www.tiagogomes.dev.br"
            rel="noreferrer"
          >
            <img
              src="https://ik.imagekit.io/dpiu5qcwt/Icons/PerfilGitHub.png?updatedAt=1701533807360"
              width="120"
              height="120"
              alt="Tiago Gomes"
            />
          </a><br />
          <span>TIAGO GOMES</span>
        </p>
      </div>
    </>
  );
}

export default ProjetoDetalhes;
