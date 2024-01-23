import { useEffect, useState  } from "react";
const User = ({name,location}) => {
    const [count,setCount] = useState(0);

    useEffect(()=>{
        //api call
    },[]);
  
    return (
    <div className="user-card">
        <h1>Count: {count}</h1>
        <button onClick={()=>{
            setCount(count+1);
        }}>Count</button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @ShivamSaha</h4>
    </div>
    );
};

export default User;



