import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key: "child1" }, [
    React.createElement("h1", { id: "h1_tag", key: "h1_1" }, "h1 tag"),
    React.createElement("h2", { id: "h2_tag", key: "h2_1" }, "h2 tag"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { id: "h1_tag", key: "h1_2" }, "h1 tag"),
    React.createElement("h2", { id: "h2_tag", key: "h2_2" }, "h2 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);
console.log(parent);
