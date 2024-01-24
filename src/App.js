import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestrauntMenu.js";
import Shimmer from "./components/Shimmer.js";


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
  return (
    <div className="app">
      <Header />
     <Outlet />
    </div>
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
