import React, { useRef, useState, useEffect } from "react";
import "./NavBar.css";

export function NavBar() {
  const usr = sessionStorage.getItem("MSARS_ActiveUsr");
  //   const usr = "Admin";
  console.log(usr);
  const [isOpen, setIsOpen] = useState(false);
  const [isShort, setIsShort] = useState(false);
  const hamburgerMenuRef = useRef(null);
  const navContentRef = useRef(null);
  const toggleMenu = () => {
    hamburgerMenuRef.current.classList.toggle("active");
    navContentRef.current.classList.toggle("active");
    setIsOpen(!isOpen);
    console.log("Opening", isOpen, !isShort);
  };
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
      if (window.innerWidth <= 760) {
        setIsShort(true);
      } else {
        setIsShort(false);
      }
    };
    if (window.innerWidth <= 760) {
      setIsShort(true);
    } else {
      setIsShort(false);
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  if (usr == null) {
    return (
      <div className="nav-wrapper">
        <div className="nav-content" ref={navContentRef}>
          <div className="nav-left">
            <div className="nav-brand">MSARS</div>
          </div>
          {!isShort ? (
            <div className="nav-right">
              <div className="nav-link">Rankings</div>
              <div className="nav-link">Login</div>
            </div>
          ) : (
            isOpen && (
              <div className="nav-right">
                <div className="nav-link">Rankings</div>
                <div className="nav-link">Login</div>
              </div>
            )
          )}
        </div>
        <div
          className="hamburger-menu"
          ref={hamburgerMenuRef}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
  } else {
    // const role = sessionStorage.getItem("MSARS_ActiveUsrRole");
    const role = "pib";
    if (role == "pib") {
      return (
        <div className="nav-wrapper">
          <div className="nav-content" ref={navContentRef}>
            <div className="nav-left">
              <div className="nav-brand">MSARS</div>
              <div className="nav-role">PIB Panel</div>
            </div>
            {!isShort ? (
              <div className="nav-right">
                <div className="nav-link">Dashboard</div>
                <div className="nav-link">Sources</div>
                <div className="nav-link">{usr}</div>
              </div>
            ) : (
              isOpen && (
                <div className="nav-right">
                  <div className="nav-link">Dashboard</div>
                  <div className="nav-link">Sources</div>
                  <div className="nav-link">{usr}</div>
                </div>
              )
            )}
          </div>
          <div
            className="hamburger-menu"
            ref={hamburgerMenuRef}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      );
    } else if (role == "dept") {
      return (
        <div className="nav-wrapper">
          <div className="nav-content" ref={navContentRef}>
            <div className="nav-left">
              <div className="nav-brand">MSARS</div>
              <div className="nav-role">Department Panel</div>
            </div>
            {!isShort ? (
              <div className="nav-right">
                <div className="nav-link">{usr}</div>
              </div>
            ) : (
              isOpen && (
                <div className="nav-right">
                  <div className="nav-link">{usr}</div>
                </div>
              )
            )}
          </div>
          <div
            className="hamburger-menu"
            ref={hamburgerMenuRef}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      );
    }
  }
}

// export default { NavBar };
