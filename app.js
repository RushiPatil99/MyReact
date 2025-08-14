const parent = React.createElement(
  "div",
  { id: "parent", xyz: "abc" },
  "I'm Parent",
  React.createElement(
    "div",
    { id: "child" },
    "I'm Child",
    [
      React.createElement("h1", { id: "h1_tag" }, "h1 tag"),
      React.createElement("h2", { id: "h2_tag" }, "h2 tag"),
    ],
    React.createElement("div", { id: "child2" }, "I'm Child2", [
      React.createElement("h1", { id: "h1_tag" }, "h1 tag"),
      React.createElement("h2", { id: "h2_tag" }, "h2 tag"),
    ])
  )
);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);
console.log(parent);
