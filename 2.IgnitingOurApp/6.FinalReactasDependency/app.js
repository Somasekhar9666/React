import React from "react";
import ReactDOM from "react-dom";

const parent1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement(
      "h1",
      { id: "heading1" },
      "I am h1 tag  with only one single sibling in Parent-1 with only one DIV"
    )
  )
);

const parent2 = React.createElement("div", { id: "parent2" }, [
  React.createElement(
    "div",
    { id: "div-child1" },
    [
      React.createElement(
        "h1",
        { id: "heading1" },
        "Inside DIV-1 I am h1 Sibling-1 "
      ),
      React.createElement(
        "h1",
        { id: "heading2" },
        "Inside DIV-1 I am h2 Sibling-2 "
      ),
    ] //******Passing siblings as arary of children , so you can create mutliple sibilings insted of single child
  ),

  React.createElement(
    "div",
    { id: "div-child2" },
    [
      React.createElement(
        "h1",
        { id: "heading1" },
        "Inside DIV-2 I am h1 Sibling-1 "
      ),
      React.createElement(
        "h1",
        { id: "heading2" },
        "Inside DIV-2 I am h2 Sibling-2 "
      ),
      React.createElement(
        "h1",
        { id: "heading3" },
        "Inside DIV-2 I am h3 Sibling-3 "
      ),
    ] //******Passing siblings as arary of children , so you can create mutliple sibilings insted of single child
  ),
]);

console.log(parent1); // JS object is represented as React Element becomes that browser understands
console.log(parent2);

const root1 = ReactDOM.createRoot(document.getElementById("root1"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root1.render(parent1);
root2.render(parent2);
