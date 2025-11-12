import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Empresa from "./components/pages/Empresa";
import Contato from "./components/pages/Contato";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;




