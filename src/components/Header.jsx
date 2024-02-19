import { LOGO_URL } from "../utils/constants";

import { useState } from "react";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("LogIn");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home </li>
          <li>About Us </li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li
            className="login"
            onClick={() => {
              btnNameReact === "LogIn"
                ? setBtnNameReact("LogOut")
                : setBtnNameReact("LogIn");
            }}
          >
            {" "}
            {btnNameReact}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
