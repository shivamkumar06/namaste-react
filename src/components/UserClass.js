import React from "react";

class UserClass extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        count: 0,
        count2: 0,
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

    componentDidUpdate(prevProps,prevState){
        /**if we want to update the state on the basis of previous state,
         *  ie; if we want to update the state only when the previous state is different from the current state
         * {based on count like we used to do in useEffect dependency array} */
        // if(this.state.count === prevState.count || this.state.count2 === prevState.count2){

        // }
        this.timer = setInterval(()=>{
            console.log("Namaste React");
        },1000);
    //   console.log("Component Updated");
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        // console.log("Component Unmounted");
        }


  render() {
    const { name, location, twitter_username,avatar_url} = this.state.userinfo;
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