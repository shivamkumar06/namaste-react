import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
  
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla} = resData?.info;
    
    return (
      // <div className="res-card" style={styleCard}>
      //   <h3>Meghna Foods</h3>
      // </div> or it can be written as
      <div className="m-4 p-4 w-[250px] rounded-lg shadow-lg bg-gray-50 hover:bg-gray-200" >
        <img
          className="rounded-lg"
          alt="res-logo"
          src={CDN_URL+cloudinaryImageId}
        />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.slaString}</h4>
      </div>
    );
  };

  export default RestaurantCard;