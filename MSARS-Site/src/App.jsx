import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { NavBar } from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import NewsCard from "./components/NewsCard";
import PIB_Dashboard from "./pages/PIB_Dashboard";
import DeptCard from "./components/DeptCard";
import ProgressCard from "./components/ProgressCard";
import ChatWidget from "./components/ChatWidget";
import NotFound from "./pages/NotFound";
import Sources from "./pages/Sources";

function App() {
  const [count, setCount] = useState(0);
  const usr = sessionStorage.getItem("ActiveUsr");
  console.log("usr:", usr);
  return (
    <>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={!usr ? <Home /> : <></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/pib/dashboard" element={<PIB_Dashboard />} />
        <Route path="/newscardtest" element={<NewsCard />} />
        <Route path="/deptcardtest" element={<DeptCard />} />
        <Route path="/pib/sources" element={<Sources />} />
        <Route
          path="/progresstest"
          element={
            <ProgressCard percentage={50} strokeWidth={"5"} size={"50px"} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ChatWidget />
    </>
  );
}

export default App;
