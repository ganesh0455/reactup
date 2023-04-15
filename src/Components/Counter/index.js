import {Component} from 'react';
import "./index.css"

class Counter extends Component {

    state={
        count:0
    }
    
    onIncrement=()=>{
        this.setState((prevValue)=>{
            return ({count:prevValue.count+1})
        })
    }

    onReset=()=>{
       this.setState({
        count:0
       })
    }

    onDecrement=()=>{
        this.setState((prevValue)=>({count:prevValue.count-1}))
    }

    render(){
        console.log("state=",this.state);
        console.log("render");
        console.log(this.props);
        const {count}=this.state;
        console.log(count);
        const color=count<0?"red":count===0?"black":"green";
        return(
            <div className="container">
                <h1 className="heading1">Counter</h1>
                <p className="count" style={{color:color}} id="Dec">{count}</p>
                <div className="button-container">
                    <button className="button" onClick={this.onDecrement}>Decrease</button>
                    <button className="button" onClick={this.onReset}>Reset</button>
                    <button className="button" onClick={this.onIncrement}>Increase</button>
                </div>
            </div>
        )
    }
}

export default Counter;