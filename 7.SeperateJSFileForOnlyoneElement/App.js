//**createElement will create a  JS object
//React.createElement(type, props, children);
const Heading = React.createElement(
  "h1",
  { id: "TopHeading", xyz: "abc" },
  "Hello World From React Inside!!"
);

console.log(Heading); // gives a JS object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(Heading); // this render() function takes that JS object and convert it to  element and put that in DOM as Visual apperance
