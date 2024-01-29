import { useState, useEffect } from 'react';
import { MENU_API_URL } from './constants';
const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    //fetch data
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async () => {
        const url = 'https://corsproxy.org/?' + encodeURIComponent(MENU_API_URL);
        const data = await fetch(url+resId); 
        const json = await data.json();
        setResInfo(json);
        
    }
    return resInfo;
};

export default useRestaurantMenu;