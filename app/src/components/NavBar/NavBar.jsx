import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const history = useHistory();
  const location = useLocation();

  return (
    <div className="NavBar">
      <div className="navBarContainer">
        <div className="logo">
          <h1>VibrantDX</h1>
        </div>
        {location.pathname === "/" ? (
          <p
            onClick={() => {
              history.push("contact");
            }}
          >
            Contact
          </p>
        ) : (
          <p
            onClick={() => {
              history.push("/");
            }}
          >
            Home
          </p>
        )}
      </div>
    </div>
  );
}

export default NavBar;
