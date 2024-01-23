import React from "react";

class UserClass extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      userinfo: {
        name: "Dummy User",
        location: "Dummy Location",
        twitter_username: "Dummy Contact",
        avatar_url: "https://dummyimage.com/600x400/000/fff",
      },
      };
    };
    
   async componentDidMount(){
      const data = await fetch("https://api.github.com/users/shivamkumar06");
      const json = await data.json();
      this.setState({userinfo:json});
  
    }

    componentDidUpdate(){
      console.log("Component Updated");
    }

    componentWillUnmount(){
        console.log("Component Unmounted");
        }


  render() {
    const { name, location, twitter_username,avatar_url} = this.state.userinfo;
    console.log("Render");
    return (
      <div className="user-card">
        <img src={avatar_url} alt="user" />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {twitter_username}</h4>
      </div>
    );
  }
}


export default UserClass;

/*****
 * 
 * 
 * Constructor(dummy data)
 * Render (dummy data)
 *      <HTML DUMMY DATA>
 * Component Did Mount
 *      <API CALL>
 * 
 *  ----- UPDATE -----
 * 
 *  render(API data)
 *     <HTML API DATA>
 * 
 * Component Did Update
 * 
 * 
 */