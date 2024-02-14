import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div data-testid="resCard"
     className="m-4 p-4 w-[250px] h-[400px] rounded-lg shadow-lg bg-gray-50 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export const withOpenLabel = (RestaurantCard) => {
  function ratingString(ratings) {
    if (ratings.includes("10K+")) {
      return (
        <label className="absolute bg-green-500 text-white ma-2 p-1 rounded-lg">
          10K+ ratings
        </label>
      );
    } else if (ratings.includes("1K+")) {
      return (
        <label className="absolute bg-yellow-500 text-white ma-2 p-1 rounded-lg">
          1K+ ratings
        </label>
      );
    }
  }
  return (props) => {
    const { totalRatingsString } = props.resData.info;

    return (
      <div>
        {ratingString(totalRatingsString)}
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
