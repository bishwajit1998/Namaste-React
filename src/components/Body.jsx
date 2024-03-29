import RestrauntCard from "./RestrauntCard";
//import { resObj } from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
//import resList from "../utils/mockdata";
import { Link } from "react-router-dom";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestraunts, setListOfRestraunt] = useState([]);
  const [filteredRestraunt, setfilteredRestraunt] = useState([]);
  const [searchText, setSearchText] = useState("");

  //whenever local state variablle changes , react triggers a reconciliation cycle
  //console.log("rerendered", filteredRestraunt, searchText);
  console.log("Body Rendered");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    //optional chaining
    setListOfRestraunt(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestraunt(
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
              //filter logic
              const _filteredRestraunt = listOfRestraunts.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestraunt(_filteredRestraunt);
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
        {filteredRestraunt.map((restraunt) => (
          <Link key={restraunt.info.id} to={"/restraunt/" + restraunt.info.id}>
            <RestrauntCard resData={restraunt} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
