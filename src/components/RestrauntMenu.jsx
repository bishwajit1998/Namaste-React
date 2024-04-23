import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [menuData, setMenuData] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, [resId]); // Include resId in dependencies to refetch menu when it changes

  const fetchMenu = async () => {
    try {
      const response = await fetch(MENU_API + resId);
      if (!response.ok) {
        throw new Error('Failed to fetch menu');
      }
      const data = await response.json();
      console.log(data);
      setMenuData(data.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
      // Handle error gracefully, show error message to the user
    }
  };

  if (!menuData) {
    return <div>Loading...</div>; // Show loading spinner or message
  }

  const { cards } = menuData;

  const restaurantName = cards[0]?.card?.card?.info?.name || "Unknown Restaurant";
  const cuisines = cards[0]?.card?.card?.info?.cuisines?.join(", ") || "Cuisines not specified";
  const costForTwo = cards[0]?.card?.card?.info?.costForTwoMessage || "Cost not specified";

  const itemCards =
    cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards || [];

  return (
    <div className="menu">
      <h1>{restaurantName}</h1>
      <p>{cuisines} - {costForTwo}</p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
