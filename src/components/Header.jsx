import { LOGO_URL } from "../utils/constants";

import { useEffect, useState } from "react";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("LogIn");

  //if no dependency array , it is called after every render
  //if dependenct array is present and its empty -> [] => the use effect is called on only the initial render (first time only)
  //if dependency array is present and its not empty [1,2,3,4] => then the useEffect will be called every time the dependency changes-> btnNameReact updates , useEffect is called
  useEffect(() => {
    console.log("useEffect called ");
  }, [btnNameReact]);

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
