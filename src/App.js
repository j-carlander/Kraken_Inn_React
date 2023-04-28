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
import { Profile } from "./Pages/Profile";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);

  return (
    <div className="page-wrapper">
      <Header loggedIn={loggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/food" element={<Food />} />
        <Route path="/logout" element={<Logout setLoggedIn={setLoggedIn} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
