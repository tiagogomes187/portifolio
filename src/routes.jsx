import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import Contatos from "./pages/Contatos";
import Page404 from "./pages/Page404";
import PageBase from "./pages/PaginaBase";
import ProjetoDetalhes from "./pages/ProjetoDetalhes";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageBase />}>
          <Route index element={<Home />}></Route>
          <Route path="/sobre" element={<Sobre />}></Route>
          <Route path="/projetos" exact element={<Projetos />}></Route>
          <Route path="/projetos/detalhes" element={<ProjetoDetalhes />}></Route>
          <Route path="/contatos" element={<Contatos />}></Route>
          <Route path="/" element={<Contatos />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
