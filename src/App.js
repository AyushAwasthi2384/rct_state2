import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            value:0
        }
    }
    render() { 
        return (
            <div>
                <button onClick={()=>this.setState({value : this.state.value +1})}>Click me</button>
                <br/>
                <label>{this.state.value}</label>
            </div>
        );
    }
}

const root = document.querySelector("#root");
ReactDOM.render(<App/>, root)

export default App