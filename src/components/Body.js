import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardWithOpenLabel = withOpenLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5323976&lng=73.94406459999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const value =
      json.data.cards[1].card.card.gridElements.infoWithStyle?.restaurants;
    setListOfRestaurant(value);
    setFilteredRestaurant(value);
  };

  const onlineStatus = useOnlineStatus();

  // conditional rendering
  if (!onlineStatus)
    return (
      <div className="offline-status">
        Looks like you're offline!! Please check your internet connection.
      </div>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex flex-wrap">
        <div className="search m-4 p-4">
          <input
            className="border border-solid border-black p-2"
            type="text"
            placeholder="Search for restaurants"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg shadow-md"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter(
                (restaurant) =>
                  restaurant.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-2 py-2 bg-gray-200 m-4 rounded-lg shadow-md"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (restaurant) => restaurant.info.avgRating > 4
              );

              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
          <button
            className="px-2 py-2 bg-gray-200 m-4 rounded-lg shadow-md"
            onClick={() => {
              setSearchText("");
              setFilteredRestaurant(listOfRestaurants);
            }}
          >
            Clear Filters
          </button>
          <div>
            <label>Username </label>
            <input
              className="border border-black p-2"
              value={loggedInUser}
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex-container flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.totalRatingsString.includes("K+") ? (
              <RestaurantCardWithOpenLabel resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
