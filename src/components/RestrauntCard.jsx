import { CDN_URL } from "../utils/constants";
const RestrauntCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
    resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>

      <div>
        <h4>{avgRating}</h4>
      </div>
      <h4>{deliveryTime}</h4>
    </div>
  );
};
export default RestrauntCard;
