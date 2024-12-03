import React from "react";
import ReactDOM from "react-dom";

const spanEle = <span> I am Span Element</span>;

// ***A React Element rendering a react elment *****
const elemntHeading = (
  <h1 className="h1" tabIndex="5">
    {spanEle}
    this heading is made of simple JSX
  </h1>
);

// A React Heading
const Heading = () => (
  <h1 className="h1" tabIndex="5">
    this heading is made of simple JSX
  </h1>
);

//this is a react component
const fun = () => (
  <h1 className="h1" tabIndex="5">
    this heading is made of simple JSX
  </h1>
);

//A React Component
const Paragraph = () => (
  <div>
    {/************this is called Component Composition, rendering one component on another ***************/}
    <Heading />

    {/************elemntHeading are treated as expressions because they are instances of React elements, which are just JavaScript objects ***************/}
    {elemntHeading}

    {/*This is anoter way of rendering(calling) Funtional compoennet, because it is also a JSX EXPRESSION*/}
    {fun()}

    <p id="p1" className="Hello">
      this is a simple para with simple JSX
    </p>
  </div>
);

// Render  paragraph(a unifiefd React Component)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Paragraph />);

{
  /**************************************************************IIIIIIIIIIIIMMMMMMMMMMMMMMMMPPPPPPPPPPPPPPPPPPPPPP************************************************

React components also produce JSX, which React converts into JavaScript objects (React elements). However, components generate these objects indirectly. The objects they produce are dynamic because the component's logic (such as conditions, state, or props) determines their structure and content. After performing any required computations or logical evaluations, the component finally returns a React element, which is rendered later based on the defined logic.

In contrast, React elements (defined directly as JSX) are static. They are immediately converted into JavaScript objects during compilation and do not involve additional logic or dynamic evaluations. These static elements are ready to be rendered on the screen right after they are created."

    1.React Components:

            They produce JSX, which React ultimately converts into JavaScript objects (React elements).
            
            *The objects they produce are dynamic because the component can execute logic (e.g., conditionals, state, or props) before delivering the final React element.
            
            These objects are delivered at runtime when the component is invoked.
    
    
    2.React Elements:

        They are directly defined JSX expressions.
        
        *They are converted immediately into JavaScript objects (React elements) by React during compilation.
        
        They are static because they do not involve any additional logic or dynamic evaluations; React uses them as-is.

*/
}
