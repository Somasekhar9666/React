import React from "react";

class BasicClass extends React.Component {

    constructor(props){
        super(props);
    }

    render() {                                                                                      // Unlike functional compoents Class Compoennts uses Render method to retunr JXS           
        return (
            <div>
                <h1>{this}</h1>
                <h1>Tokyo</h1>
                <h1>None</h1>
            </div>  
        );
    }
}

export default BasicClass;
