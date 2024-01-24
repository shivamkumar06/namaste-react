
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
        <div className="filter flex">
            <div className="search m-4 p-4">
                <input className="border border-solid border-black" type="text" placeholder="Search for restaurants" value={searchText} onChange={(event)=>{
                    setSearchText(event.target.value);
                }}/>
                <button className="px-4 py-1 bg-green-100 m-4 rounded-lg" onClick={()=>{
                    const filteredRestaurant = listOfRestaurants.filter(
                        (restaurant)=> restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));  
                        setFilteredRestaurant(filteredRestaurant);
                }}>Search</button>
            </div>
            <div className="search m-4 p-4 flex items-center">
            <button className="px-2 py-1 bg-grey-200 m-4 rounded-lg" onClick={()=>{
                  const filteredList = listOfRestaurants.filter(
                    (restaurant)=> restaurant.info.avgRating > 4);  
                   
                    setFilteredRestaurant(filteredList);        
            }} >Top Rated Restaurants</button>
            <button className="px-2 py-1 bg-grey-200 m-4 rounded-lg" onClick={()=>{
                
                setSearchText("");
                setFilteredRestaurant(listOfRestaurants);
            }}>Clear Filters</button>
            </div>
         
        </div>
        <div className="flex flex-wrap">
          {
            filteredRestaurants.map((restaurant)=> (
                <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}> <RestaurantCard  resData={restaurant}/></Link>
           
            ))}
        </div>
      </div>
    );
  };

    export default Body;