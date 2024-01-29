import React, { lazy, Suspense , useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestrauntMenu.js";
import Shimmer from "./components/Shimmer.js";
import UserContext from "./utils/UserContext.js";


/**
 * Chunking
 * Code Spliting
 * Lazy Loading
 * On Demand Loading
 * Dynamic Import
 */

const Grocery = lazy(() => import("./components/Grocery.js"));
const About = lazy(() => import("./components/About.js"));

const AppLayout = () => {
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    const data = {
      name: "Shivam Kumar",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="app">
      <Header />
     <Outlet />
    </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
   element: <AppLayout />,
    children: [
      { path: "/", element: <Body />},
      { path: "/about", element: <Suspense fallback={<Shimmer/>}><About /></Suspense> },
      { path: "/contact", element: <Contact /> },
      { path: "/grocery", element: <Suspense fallback={<Shimmer/>}><Grocery /></Suspense> },
      { path: "/restaurants/:resId", element: <RestaurantMenu /> }
    ],
   errorElement: <Error/> 
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
//root.render(<HeadComponent />);
