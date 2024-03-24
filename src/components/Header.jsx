import { LOGO_URL } from "../utils/constants";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("LogIn");

  //if no dependency array , it is called after every render
  //if dependenct array is present and its empty -> [] => the use effect is called on only the initial render (first time only)
  //if dependency array is present and its not empty [1,2,3,4] => then the useEffect will be called every time the dependency changes-> btnNameReact updates , useEffect is called

  useEffect(() => {
    //console.log("useEffect called ");
  }, [btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us </Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <button
              className="login"
              onClick={() => {
                btnNameReact === "LogIn"
                  ? setBtnNameReact("LogOut")
                  : setBtnNameReact("LogIn");
              }}
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
