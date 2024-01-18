
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
        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=18.5323976&lng=73.94406459999999&page_type=DESKTOP_WEB_LISTING");
    
        const json = await data.json();
        const value = json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;        ;
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
                    console.log(filteredList);
                    setFilteredRestaurant(filteredList);        
            }} >Top Rated Restaurants</button>
            <button className="filter-btn" onClick={()=>{
                
                setSearchText("");
                setFilteredRestaurant(listOfRestaurants);
            }}>Clear Filters</button>
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