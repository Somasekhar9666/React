import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1", { id: "heading" }, "Hello sekhar:😊");
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

// React.createElement("h1", { id: "heading" }, "Hello sekhar:😊")
// thsi is very annoying  to use this every time ...  insted of using this createElement we can directly crearte a heading jsut with the <h1>tag . this is easy and far better
