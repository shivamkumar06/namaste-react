
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {

    // Local State Variable - Super powerful variable
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurants, setFilteredRestaurant] = useState([]); 
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    
        const json = await data.json();
        const value = json?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle.restaurants;
        setListOfRestaurant(value);
        setFilteredRestaurant(value);
    };

    // conditional rendering

    return (listOfRestaurants.length === 0) ? <Shimmer/> : (
      <div className="body">
        <div className="filter">
            <div className="search">
                <input className="search-box" type="text" placeholder="Search for restaurants" value={searchText} onChange={(event)=>{
                    setSearchText(event.target.value);
                }}/>
                <button onClick={()=>{
                    const filteredRestaurant = listOfRestaurants.filter(
                        (restaurant)=> restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));  
                        setFilteredRestaurant(filteredRestaurant);
                }}>Search</button>
            </div>
            <button className="filter-btn" onClick={()=>{
                  const filteredList = listOfRestaurants.filter(
                    (restaurant)=> restaurant.info.avgRating > 4);  
                    setListOfRestaurant(filteredList);        
            }} >Top Rated Restaurants</button>
            <button className="filter-btn" onClick={()=>{
                
                setSearchText("");
                setFilteredRestaurant(listOfRestaurants);
            }}>Clear Search</button>
        </div>
        <div className="res-container">
          {
            filteredRestaurants.map((restaurant)=> (
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
            ))}
        </div>
      </div>
    );
  };

    export default Body;