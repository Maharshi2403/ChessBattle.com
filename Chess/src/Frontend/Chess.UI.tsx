import { useState } from "react";
import "./App.css";

function ChessApp() {
  // Toggle menu visibility

  return (
    <>
      <MenuBar />
    </>
  );
}

function MenuBar() {
  const [menuDisplayed, setMenuDisplat] = useState(false);

  function setSidBar() {
    setMenuDisplat(!menuDisplayed);

    if (menuDisplayed == true) {
      const sidebar = document.querySelector(".sideBar");
      if (sidebar && sidebar instanceof HTMLElement) {
        sidebar.style.display = "block";
      }
    } else {
      const sidebar = document.querySelector(".sideBar");

      if (sidebar && sidebar instanceof HTMLElement) {
        sidebar.style.display = "none";
      }
    }
  }
  return (
    <>
      <div className="topNav">
        <div className="menuBox">
          <button className="menuBtn" onClick={setSidBar}>
            ☰
          </button>
        </div>
        <div className="logoBox">
          <span className="logo">ChessBattle.com</span>
        </div>
      </div>
      <div className="sideBar">
        <div className="btnBox">
          <button>Resign</button>
        </div>
        <div className="btnBox">
          <button>Draw</button>
        </div>
        <div className="btnBox">
          <button>Sign-up</button>
        </div>
        <div className="btnBox">
          <button>Sign-in</button>
        </div>
        <div className="btnBox">
          <button>Computer</button>
        </div>
      </div>
    </>
  );
}

export default ChessApp;
