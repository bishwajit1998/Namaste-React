import RestrauntCard from "./RestrauntCard";
import { resObj } from "../utils/mockdata";
import { useState } from "react";
import resList from "../utils/mockdata";
const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestraunts, setListOfRestraunt] = useState(resObj);

  //normal js variable
  //let listOfRestraunts = [];

  return (
    <div className="body">
      <div className="filter">
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
