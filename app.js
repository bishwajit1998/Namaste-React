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
/*
*- Header 
* -logo 
* -navitems
*-body
* -searchbar
* -searchbutton
* -restraunt container
*  -image
*  -star
*-footer
* -copyright
* -links
* -address
* -contact

*/
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://i.pinimg.com/originals/34/0c/6a/340c6add7519212185a08d4205eb1965.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us </li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestrauntCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.data.imageId
        }
      />
      <h3>{resData.data.name}</h3>
      <h4>{resData.data.cuisines.join(", ")}</h4>
      <h4>{resData.data.avgRating}</h4>
      <h4>{resData.data.deliveryTime}</h4>
    </div>
  );
};
const resObj = {
  data: {
    name: "Delicious Bistro",
    cuisines: ["French", "Italian", "Mediterranean"],
    avgRating: 4.7,
    deliveryTime: "45 minutes",
    imageId: "56c9ab92bd79745fd152a30fa2525426",
  },
};
const Body = () => {
  return (
    <div className="body">
      <div className="search"> Search </div>
      <div className="res-container">
        <RestrauntCard resData={resObj} />
      </div>
    </div>
  );
};
const AppLayoutc = () => {
  <Header />;
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayoutc />);
