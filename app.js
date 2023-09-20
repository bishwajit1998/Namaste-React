import React from "react";
import ReactDOM from "react-dom/client";

//what is a react Element
//JSX
// const jsxHeading = (<h1 className="head" tabIndex="5">
//     Namaste React using JSX 🚀
//     </h1>);

//React Components
//Class Based Components - old way
//Functional Component - New way
const elem = <h2>React Element </h2>
const Title = () =>(
  <h1 className = "head" tabIndex="5">
    {elem}
    namaste react using jsx as title !!
    </h1>
);
const number = 1000;

const HeadingComponent = () => (
  <div id="contailer">
    <Title></Title>
    <h1 className="heading"> Namaste React Functional Component !</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
