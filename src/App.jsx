import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav>
          <Link to="/">Página Inicial</Link> | <Link to="/about">Sobre</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />

          <Route path="/home/section1" element={<Section1 />} />
          <Route path="/home/section2" element={<Section2 />} />
        </Routes>
      </main>
      <footer>© 2025 Minha Aplicação React</footer>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div className="page">
      <h1>Página Inicial</h1>
      <p>Bem-vindo à nossa aplicação! Explore nossas funcionalidades.</p>
      <nav>
        <Link to="/home/section1">Seção 1</Link> |{" "}
        <Link to="/home/section2">Seção 2</Link>
      </nav>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <h1>Sobre</h1>
      <p>Saiba mais sobre nossa missão, visão e equipe incrível.</p>
      <nav>
        <Link to="/about/history">História</Link> |{" "}
        <Link to="/about/team">Equipe</Link>
      </nav>
      <Routes>
        <Route path="history" element={<History />} />
        <Route path="team" element={<Team />} />
      </Routes>
    </div>
  );
}

function Section1() {
  return (
    <div>
      <h2>Seção 1</h2>
      <p>
        Esta é a Seção 1, onde você pode aprender mais sobre os principais
        recursos da nossa aplicação.
      </p>
    </div>
  );
}

function Section2() {
  return (
    <div>
      <h2>Seção 2</h2>
      <p>
        Bem-vindo à Seção 2! Aqui mostramos exemplos práticos de como usar
        nossas funcionalidades.
      </p>
    </div>
  );
}

function History() {
  return (
    <div>
      <h2>História</h2>
      <p>
        Nossa empresa foi fundada em 2025 com o objetivo de criar aplicações
        incríveis que ajudam desenvolvedores a crescer.
      </p>
    </div>
  );
}

function Team() {
  return (
    <div>
      <h2>Equipe</h2>
      <p>
        Temos uma equipe apaixonada e diversificada, formada por profissionais
        que amam tecnologia e inovação.
      </p>
    </div>
  );
}

export default App;
