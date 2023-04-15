import {Component} from "react";
class Clock extends Component {
    constructor(props){
        super(props)
        this.state={date:new Date()}
        console.log("Constructor called");
    }

    tick=()=>{
        this.setState({date:new Date()})
    }

    componentDidMount(){
        console.log("Component didMount is called");
        this.timerID=setInterval(this.tick,1000)
    }

    componentWillUnmount(){
        console.log("ComponentWillUnmount is called");
        clearInterval(this.timerID)
    }



    render(){
        const {date}=this.state;
        console.log("render called",date);
        return(
            <div className="clock-container">
                <p className="heading">Clock</p>
                <p className="time">{date.toLocaleTimeString()}</p>
            </div>
        )
   }
}

export default Clock;