{
  /* <div id="parent">
        <div id="child">
            <h1>I'm an H1 tag</h1>
            <h2>I'm an H2 tag</h2>
        </div>
         <div id="child2">
            <h1>I'm an H1 tag</h1>
            <h2>I'm an H2 tag</h2>
        </div>
    </div> */
}
//structrure created using JS
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an H1 tag"),
    React.createElement("h2", {}, "I'm an H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm a child H1 tag"),
    React.createElement("h2", {}, "I'm a child H2 tag"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React!"
);

// console.log(heading);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
