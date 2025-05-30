// src/App.jsx

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Router from "./router/Router";
import CoverGeneratorTest from "./components/CoverGeneratorTest";

function App() {
  return (
    <BrowserRouter>
      <header style={{ padding: "12px 24px", background: "#333" }}>
        <Link to="/" style={{ color: "#fff", textDecoration: "none", fontWeight: "bold" }}>
          도서 관리 시스템
        </Link>
        <Link to="/test" style={{ color: "#fff", marginLeft: "20px" }}>
          테스트
        </Link>
      </header>

      <Routes>
        <Route path="/*" element={<Router />} />
        <Route path="/test" element={<CoverGeneratorTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
