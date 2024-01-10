import React from "react";
import ReactDOM from "react-dom/client";

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

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
root.render(<HeadComponent />);
