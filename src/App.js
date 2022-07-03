import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./defaut.css";
import React from "react";

//Pages

import Erro404 from "./assets/Error/404/Index";
import Home from "./page/home/Index";
import Sobre from "./page/Sobre/Index";
import Esporte from "./page/Esporte/Index";
import Negocios from "./page/Negocios/Index";
import UltimasNoticias from "./page/UltimasNoticias/Index";
import Tecnologia from "./page/Tecnologia/index";
import Entretenimento from "./page/Entretenimento/Index";
import Saude from "./page/Saude/Index";
import Ciencia from "./page/Ciencia/Index";

import ResultSeach from "./components/ResultSeach/Index";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="pesquisa/:id" element={<ResultSeach />} />
          <Route path="ultimasnoticias" element={<UltimasNoticias />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="esporte" element={<Esporte />} />
          <Route path="negocios" element={<Negocios />} />
          <Route path="tecnologia" element={<Tecnologia />} />
          <Route path="entretenimento" element={<Entretenimento />} />
          <Route path="saude" element={<Saude />} />
          <Route path="ciencia" element={<Ciencia />} />
          <Route path="*" element={<Erro404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
