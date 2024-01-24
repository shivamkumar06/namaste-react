
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {

    // const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    if(resInfo === null) return <Shimmer/>;

    console.log(resInfo.data.cards[0].card.card.info);
    const {name,cuisines,costForTwoMessage} = resInfo.data.cards[0].card.card.info;
    const value = resInfo.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[3].card.card;
  
    let val;
    if(value.categories){
         val = value.categories[1];
    } else {
         val = value;
    }
     const {itemCards} = val;
    
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h2>Main Course</h2>
            <ul>
            {
                itemCards.map((item)=> <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)
            }
            </ul>
        </div>
    );
};

export default RestaurantMenu; 