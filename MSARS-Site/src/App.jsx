import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import { NavBar } from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const [count, setCount] = useState(0);
  const usr = sessionStorage.getItem("ActiveUsr");
  console.log("usr:", usr);
  return (
    <>
      <NavBar />
      {/* {!usr ? <Home /> : <></>} */}
      <Login />
    </>
  );
}

export default App;
