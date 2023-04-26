import { Routes, Route, NavLink } from "react-router-dom";

import "./App.css";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { Home } from "./Pages/Home";
import { Header } from "./Components/Header/Header";
import { NoPage } from "./Pages/NoPage";

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
