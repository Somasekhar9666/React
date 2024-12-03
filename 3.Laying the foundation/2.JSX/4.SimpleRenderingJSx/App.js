import React from "react";
import ReactDOM from "react-dom";

/*Simple JXS example*/
const heading = (
  <h1 className="h1" tabIndex="5">
    this heading is made of simple JSX
  </h1>
);

const paragraph = (
  <p id="p1" className="Hello">
    this is a simple para with simple JSX
  </p>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Render heading and paragraph
root.render(heading);
root.render(paragraph);

/*  Q.What is wrong with this code? Why is the paragraph not rendering in the UI?   *******************************************
                        
                        
                                const heading = (
                                <h1 className="h1" tabIndex="5">
                                    this heading is made of simple JSX
                                </h1>
                                );

                                const paragraph = (
                                <p id="p1" className="Hello">
                                    this is a simple para with simple JSX
                                </p>
                                );

                                const root = ReactDOM.createRoot(document.getElementById("root"));

                                // Render heading and paragraph
                                root.render(heading);
                                root.render(paragraph);
                    

                    Ans.*The issue with the code is that you're rendering two separate elements (heading and paragraph) sequentially using root.render(). In React, when you call render() multiple times, the previous render will be replaced by the new one.
                    So, in your case:
                            The first root.render(heading) renders the <h1> element.
                            The second root.render(paragraph) replaces the <h1> element with the <p> element.
                    
                    ***To render both the heading and the paragraph, you should wrap them in a single parent element (like a div, React.Fragment, or the shorthand <>).
                            
                            const root = ReactDOM.createRoot(document.getElementById("root"));
                            // Wrap both heading and paragraph inside a parent element
                            root.render(
                            <div>
                                {heading}
                                {paragraph}
                            </div>
                            );

                    Key Points:
                            *You can only render one root element per render call in React, so wrap multiple elements in a parent container.
                            Alternatively, you can use a fragment if you don't want to add an extra div:
                           
                                            root.render(
                                            <>
                                                {heading}
                                                {paragraph}
                                            </>
                                            );
                            The fragment (<>...</>) is a lightweight wrapper that doesn’t add extra nodes to the DOM.



 */
