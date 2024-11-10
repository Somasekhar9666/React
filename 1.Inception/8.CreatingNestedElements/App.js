/*Design Nested elements flow 

*<div id="parent">
*       <div id ="child1"> 
                <h1> i am H1 tag</h1>
                <h2> i am H2 tag</h2>

*
*           </div>
*    </div>
*
*
*
*/
//React.createElement(type, props, children);
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

/*
**<div id="root1">
      <!----*******If you Put any childs here already before the elements comming from the App.js , they are Replaced, once the componts are mounted from App.js , split second you can see  that while refresing ******-->
      <h1>
        any way i will be replaced because of the elemnts coming from App.js
      </h1>
      <!----****The <h1> inside div#root1 gets replaced because when you mount React components, React will take over the root div and completely replace whatever is inside it with the elements rendered by your React components. This is part of how React manages the DOM efficiently and ensures that the UI reflects the current state of your application.-->
    </div>
*/
