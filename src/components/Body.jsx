import RestrauntCard from "./RestrauntCard";
//import { resObj } from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
//import resList from "../utils/mockdata";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestraunts, setListOfRestraunt] = useState([]);
  const [searchText, setSearchText] = useState("");
  //whenever local state variablle changes , react triggers a reconciliation cycle
  console.log("rerendered");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(
      //json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[1].info.name
      json.data
    );

    //optional chaining
    setListOfRestraunt(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //normal js variable
  //let listOfRestraunts = [];

  return listOfRestraunts.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter the res and update the UI
              //searchtext
              console.log(searchText);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestraunts.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestraunt(filteredList);
            console.log("button clicked");
            // Filter logic here
          }}
        >
          Top Rated Restraunts{" "}
        </button>
      </div>
      <div className="res-container">
        {listOfRestraunts.map((restraunt) => (
          <RestrauntCard key={restraunt.info.id} resData={restraunt} />
        ))}
      </div>
    </div>
  );
};

export default Body;
