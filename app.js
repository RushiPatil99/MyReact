import React from "react";
import ReactDOM from "react-dom/client";
const Title = () => (
  <h1 className="Titleheading" tabIndex={1}>
    Namaste by JSX
  </h1>
);
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <Title></Title>
    {Title()}
    <h1 className="heading">Namaste React from functional components</h1>
  </div>
);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<HeadingComponent />);
