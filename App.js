import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/logo.svg"

// React.createElement => Object => Becomes HTMLElement when rendered

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React 🚀"
//   );

const elm = (
  <span>React Element</span>
);





const Title = function () {
  return (
    <h1 className="head" tabIndex="1">
      Namaste React Title using JSX 🚀
    </h1>
  );
};

const number = 1000;

const HeadComponent = () => (
  <div id="container">
    <Title />
    <Title></Title>
    {Title()}
    {console.log('here')}
    <h2>Love you {number*3}!🦸</h2>
    {jsxHeading}
    <h1 className="heading">Namaste From Single line</h1>
  </div>
);

const HeadingComponent = () => {
  return <h1 className="heading">Namaste React Functional Component</h1>;
};

// React Element
const jsxHeading = (
  <h1 className="head" tabIndex="1">
    {elm}
    Namaste React using JSX element🚀
  </h1>
);





//element created using React.createElement
const headerElement = React.createElement("div",{class:"title"},
[React.createElement("h1",{class:"title-1"},"Title 1"),
React.createElement("h2",{class:"title-2"},"Title 2"),
React.createElement("h3",{class:"title-3"},"Title 3"),
]);

// using JSX
const headerElementJSX = (<div className="title">
  <h1 className="title-1">JSX Title 1</h1>
  <h2 className="title-2">JSX Title 2</h2>
  <h3 className="title-3">JSX Title 3</h3>
</div>
);

const HeaderComponentSearch = () => {
  return <div className="header">
    <img src={logo} alt="Logo" className="logo-img" />
    <input type="text" />
    <i class="fi fi-sr-user"></i>
  </div>
   

};

// Functional Component
const HeaderElement = () => {
  return <div className="title">
    <HeaderComponentSearch/>
    <Title/>
    {headerElementJSX}
  <h1 className="title-1">Functional Title 1</h1>
  <h2 className="title-2">Functional Title 2</h2>
  <h3 className="title-3">Functional Title 3</h3>
</div>
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderElement/>);
//root.render(<HeadComponent />);
