import "./styles.css";

function Terminal() {
  return (
    <>
      <div className="bodyubuntu">
        <div className="containerubuntu">
          <div className="Terminal">
            <div className="Terminal__Toolbar">
              <div className="Toolbar__buttons">
                <button className="Toolbar__button Toolbar__button--exit">
                  &#10005;
                </button>
                <button className="Toolbar__button">&#9472;</button>
                <button className="Toolbar__button">&#9723;</button>
              </div>
              <p className="Toolbar__user">tiago@developer:~</p>
            </div>
            <div className="Terminal__body">
              <div className="Terminal__text">Bem vindo ao meu projeto!</div>
              <div className="comentario"># Clone o projeto</div>
              <div className="Terminal__Prompt">
                <span className="Prompt__user">tiago@developer:</span>
                <span className="Prompt__location">~</span>
                <span className="Prompt__dollar">$</span>
                <span className="Prompt__cursor"></span>
                <span className="Terminal__text">git clone https://github.com/tiagogomes187/gtincatalog.git</span>
              </div>
              <br />
              <div className="comentario"># Rode o backend com o seguinte comando, dentro do diretório &apos;gtincatalog&apos; digite:</div>
              <div className="Terminal__Prompt">
                <span className="Prompt__user">tiago@developer:</span>
                <span className="Prompt__location">~</span>
                <span className="Prompt__dollar">$</span>
                <span className="Prompt__cursor"></span>
                <span className="Terminal__text">cd backend && ./mvnw spring-boot:run</span>
              </div>
              <br />
              <div className="comentario"># Rode o Frontend com o seguinte comando, dentro do diretório &apos;gtincatalog&apos; digite:</div>
              <div className="Terminal__Prompt">
                <span className="Prompt__user">tiago@developer:</span>
                <span className="Prompt__location">~</span>
                <span className="Prompt__dollar">$</span>
                <span className="Prompt__cursor"></span>
                <span className="Terminal__text">cd frontend && yarn && yarn dev</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Terminal;
