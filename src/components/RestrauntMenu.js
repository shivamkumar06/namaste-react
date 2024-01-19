import { useEffect, useState
 } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API_URL+resId); 
        const json = await data.json();
        setResInfo(json);
    };

    if(resInfo === null) return <Shimmer/>;

    
    const {name,cuisines,costForTwoMessage} = resInfo?.data.cards[2].card.card.info;
    const {itemCards} = resInfo.data.cards[5].groupedCard.cardGroupMap.REGULAR.cards[3].card.card.categories[1];
    console.log();

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h2>Main Course - Non-Veg</h2>
            <ul>
            {
                itemCards.map((item)=> <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)
            }
            </ul>
        </div>
    );
};

export default RestaurantMenu; 