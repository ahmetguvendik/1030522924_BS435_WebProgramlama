import React from "react";
import ReactDOM, { render } from "react-dom";
import { showanimals } from "./kod";



  

class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            cat : showanimals(0)
        };

    }
  
    render(){
        return(<div>
            {this.state.cat}
        </div>)
    }
}




ReactDOM.render(<App/>,document.getElementById("root"))