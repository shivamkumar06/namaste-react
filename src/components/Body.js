
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {

    // Local State Variable - Super powerful variable
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurants, setFilteredRestaurant] = useState([]); 
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        // const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=18.5323976&lng=73.94406459999999&page_type=DESKTOP_WEB_LISTING");
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5323976&lng=73.94406459999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        const value = json.data.cards[1].card.card.gridElements.infoWithStyle?.restaurants;
        setListOfRestaurant(value);
        setFilteredRestaurant(value);
    };
    
     const onlineStatus = useOnlineStatus();

    // conditional rendering

    if(!onlineStatus) return <div className="offline-status">Looks like you're offline!! Please check your internet connection.</div>;

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
                <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}> <RestaurantCard  resData={restaurant}/></Link>
           
            ))}
        </div>
      </div>
    );
  };

    export default Body;