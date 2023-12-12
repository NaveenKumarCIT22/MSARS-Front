import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import NewsCard from "./components/NewsCard";

function App() {
  const [count, setCount] = useState(0);
  const usr = sessionStorage.getItem("ActiveUsr");
  console.log("usr:", usr);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={!usr ? <Home /> : <></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/newscardtest" element={<NewsCard />} />
      </Routes>
    </>
  );
}

export default App;
