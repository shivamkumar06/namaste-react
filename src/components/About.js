import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component {
    constructor(props){
        super(props);
        
    }

    componentDidMount(){
        
    }

    render(){
        
       return (
        <div>
        <h1>About Class Component</h1>
        <h2>This is Namaste React!</h2>
        <User name={"Shivam Kumar {functional}"} location={"Pune {functional}"}/>
        {/* <UserClass name={"Shivam Kumar {Class}"} location={"Pune {class}"}/> */}
    </div>
       );
    };
}


/*
- Parent Constructor
- Parent Render

    - First Child Constructor
    - First Child Render

    - Second Child Constructor
    - Second Child Render

    <DOM UPDATED - IN SINGLE BATCH>

    - First Child Component Did Mount
    - Second Child Component Did Mount

- Parent Component Did Mount
*/


// const About = () => {
//     return (
//         <div>
//             <h1>About Us</h1>
//             <h2>This is Namaste React!</h2>
//             {/* <User name={"Shivam Kumar {functional}"} location={"Pune {functional}"}/> */}
//             <UserClass name={"Shivam Kumar {Class}"} location={"Pune {class}"}/>
//         </div>
       
//     );
// }

export default About;