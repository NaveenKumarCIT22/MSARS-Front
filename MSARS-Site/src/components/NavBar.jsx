import React, { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export function NavBar() {
  const usr = sessionStorage.getItem("MSARS_ActiveUsr");
  // const usr = "Admin";
  console.log(usr);
  const [isOpen, setIsOpen] = useState(false);
  const [isShort, setIsShort] = useState(false);
  const hamburgerMenuRef = useRef(null);
  const navContentRef = useRef(null);
  const rankingsTabRef = useRef(null);
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
  // const clickHandler = (e) => {
  //   e.target.classList.add("active-nav");
  // };

  // Click handlers
  // const rankingsClickHandler = () => {
  //   console.log(rankingsTabRef.current.style);
  //   rankingsTabRef.current.style.backgroundColor = "rgb(231, 204, 49)";
  // };
  // --------------------------------
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
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/rankings">
                Rankings
              </NavLink>
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </div>
          ) : (
            isOpen && (
              <div className="nav-right">
                <NavLink className="nav-link" to="/ranking">
                  Rankings
                </NavLink>
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
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
    const role = "dept";
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
                <NavLink className="nav-link" to="/dashboard">
                  Dashboard
                </NavLink>
                <NavLink className="nav-link" to="/sources">
                  Sources
                </NavLink>
                <NavLink className="nav-link" to="profile">
                  {usr}
                </NavLink>
              </div>
            ) : (
              isOpen && (
                <div className="nav-right">
                  <NavLink className="nav-link" to="dashboard">
                    Dashboard
                  </NavLink>
                  <NavLink className="nav-link" to="sources">
                    Sources
                  </NavLink>
                  <NavLink className="nav-link" to="profile">
                    {usr}
                  </NavLink>
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
                <NavLink className="nav-link" to="profile">
                  {usr}
                </NavLink>
              </div>
            ) : (
              isOpen && (
                <div className="nav-right">
                  <NavLink className="nav-link" to="profile">
                    {usr}
                  </NavLink>
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
  // if (usr == null) {
  //   return (
  //     <div className="nav-wrapper">
  //       <div className="nav-content" ref={navContentRef}>
  //         <div className="nav-left">
  //           <div className="nav-brand">MSARS</div>
  //         </div>
  //         {!isShort ? (
  //           <div className="nav-right">
  //             <div className="nav-link">Home</div>
  //             <div
  //               className="nav-link"
  //               ref={rankingsTabRef}
  //               onClick={rankingsClickHandler}
  //             >
  //               Rankings
  //             </div>
  //             <div className="nav-link">Login</div>
  //           </div>
  //         ) : (
  //           isOpen && (
  //             <div className="nav-right">
  //               <div className="nav-link">Rankings</div>
  //               <div className="nav-link">Login</div>
  //             </div>
  //           )
  //         )}
  //       </div>
  //       <div
  //         className="hamburger-menu"
  //         ref={hamburgerMenuRef}
  //         onClick={toggleMenu}
  //       >
  //         <span></span>
  //         <span></span>
  //         <span></span>
  //       </div>
  //     </div>
  //   );
  // } else {
  //   // const role = sessionStorage.getItem("MSARS_ActiveUsrRole");
  //   const role = "dept";
  //   if (role == "pib") {
  //     return (
  //       <div className="nav-wrapper">
  //         <div className="nav-content" ref={navContentRef}>
  //           <div className="nav-left">
  //             <div className="nav-brand">MSARS</div>
  //             <div className="nav-role">PIB Panel</div>
  //           </div>
  //           {!isShort ? (
  //             <div className="nav-right">
  //               <div className="nav-link">Dashboard</div>
  //               <div className="nav-link">Sources</div>
  //               <div className="nav-link">{usr}</div>
  //             </div>
  //           ) : (
  //             isOpen && (
  //               <div className="nav-right">
  //                 <div className="nav-link">Dashboard</div>
  //                 <div className="nav-link">Sources</div>
  //                 <div className="nav-link">{usr}</div>
  //               </div>
  //             )
  //           )}
  //         </div>
  //         <div
  //           className="hamburger-menu"
  //           ref={hamburgerMenuRef}
  //           onClick={toggleMenu}
  //         >
  //           <span></span>
  //           <span></span>
  //           <span></span>
  //         </div>
  //       </div>
  //     );
  //   } else if (role == "dept") {
  //     return (
  //       <div className="nav-wrapper">
  //         <div className="nav-content" ref={navContentRef}>
  //           <div className="nav-left">
  //             <div className="nav-brand">MSARS</div>
  //             <div className="nav-role">Department Panel</div>
  //           </div>
  //           {!isShort ? (
  //             <div className="nav-right">
  //               <div className="nav-link">{usr}</div>
  //             </div>
  //           ) : (
  //             isOpen && (
  //               <div className="nav-right">
  //                 <div className="nav-link">{usr}</div>
  //               </div>
  //             )
  //           )}
  //         </div>
  //         <div
  //           className="hamburger-menu"
  //           ref={hamburgerMenuRef}
  //           onClick={toggleMenu}
  //         >
  //           <span></span>
  //           <span></span>
  //           <span></span>
  //         </div>
  //       </div>
  //     );
  //   }
  // }
}

// export default { NavBar };
