import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
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
import ProgressChart from "./components/ProgressChart";
import NewsModal from "./pages/NewsModal";
import DeptModal from "./pages/DeptModal";
import DeptNewsModal from "./pages/DeptNewsModal";
import SearchBar from "./components/SearchBar";
import EditWidget from "./components/EditWidget";
import Actions from "./pages/Actions";

// axios.defaults.baseURL = "http://10.0.0.5:8000/";
axios.defaults.baseURL = "http://10.0.0.123:8000/";
// axios.defaults.baseURL = "http://192.168.57.92:8000/";
// axios.defaults.baseURL = "http://192.168.191.92:8000/";
// axios.defaults.baseURL = "http://mfkinhost:6969/";
axios.defaults.headers = {
  "Content-Type": "application/json",
};

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
        <Route path="/linecharttest" element={<ProgressChart />} />
        <Route path="/edittest" element={<EditWidget />} />
        <Route path="/searchtest" element={<SearchBar />} />
        {/* <Route path="/pib/news/:id" element={<NewsModal />} /> */}
        <Route path="/pib/news/:id" element={<NewsModal />} />
        <Route path="/dept/news/:id" element={<DeptNewsModal />} />
        <Route path="/dept/detailed" element={<DeptModal />} />
        <Route path="/actions" element={<Actions />} />

        <Route
          path="/progresstest"
          element={
            <ProgressCard percentage={50} strokeWidth={"5"} size={"50px"} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <ChatWidget /> */}
    </>
  );
}

export default App;
