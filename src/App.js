import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";
import { Home } from "./Pages/Home";
import { Header } from "./Components/Header/Header";
import { NoPage } from "./Pages/NoPage";
import { Food } from "./Pages/Food";
import { Logout } from "./Pages/Logout";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="page-wrapper">
      <Header loggedIn={loggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route
          path="/register"
          element={<Register setLoggedIn={setLoggedIn} />}
        />
        <Route path="/food" element={<Food />} />
        <Route path="/logout" element={<Logout setLoggedIn={setLoggedIn} />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
