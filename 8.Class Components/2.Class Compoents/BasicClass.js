import React from "react";

class BasicClass extends React.Component {

    constructor(props){                             //1.construcer is called 
        super(props);
        
        
        //---------------------------------------------------------State varibles Section ------------------------------------------
        this.state={

            count:0,
            count2:1,   //eeven in functional compoents , mutliple states are also formed as single state object
            userInfo:{
                name:'dummy',
                location:"Dafault",                         
                avatar_url:'default',
            }
        }
        //-------------------------------------------------------END----------------------------------------------------
    
    };







    //-------------------------------------------------------------------------Class Hook methods session--------------------------------------------
    async componentDidMount(){
        const data=await fetch("https://api.github.com/user/Somasekhar9666")
        const json= await data.json()                                                       //3. State is updated 
        this.setState({
            userInfo:json,
        })
    }


    componentDidUpdate(){
        console.log("Component updaed")
    }

    componentWillUnmount(){
        console.log("Component unmounted")

    }
    //-----------------------------------------------------------------------END---------------------------------------------------------------




    
    render() {     
                
        // Unlike functional compoents Class Compoennts uses Render method to retunr JXS    
        const {name,location,avatar_url}=this.userInfo.userInfo                                                             //2. rendred with dummy data  mouting is called --> mounting cycle is finished 
        return (                                                                                                                    // 4. Again this render is  called . 
            <div>
                <h1>{name}</h1>
                <ha>{location}</ha>
                <button onClick={()=>{


                    this.setState({
                        count:this.state.count+1,
                        count2:this.state.count2+1
                    })


                }}>Increase the Count</button>                                                 {/*Never update any state like this--> "this.state.count=this.state.count+1" it will fail */}
                <h1>{this.props.name}</h1>
                <h1>{this.props.location}</h1>
                <h1>{food}</h1>
                <h1>{water}</h1>
            </div>  
        );
    }
}

export default BasicClass;




{/*


    1. Mounting ----> compoent is pasted on view port ----Intial Rendreing ----> ComponetDidMount --- > UseEffect with [] empty dependency

    2. Re-rendering -------> Component is Updated -------->   ComponentDidUpdate------------> UseEffect with any dependency in the Dependency Array 

    3. 3.Removed or replaced with another component  ----->  componentWiilUnMount---------->  returning a Cleanup function inside useEffect


*/}