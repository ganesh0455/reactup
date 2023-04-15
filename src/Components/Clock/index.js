import { Component} from "react";
import Clock from "./Clock";
import "./index.css";
class FinalClock extends Component{
    state={showClock:false}

    onToggleClock=()=>{
        this.setState((prevState)=>{
            const {showClock}=prevState;
            return{
                showClock:!showClock
            }
        })
    }
    render(){
        const {showClock}=this.state;
        return(
            <div className="app-container">
                <button type="button" className="toggle-button" onClick={this.onToggleClock}>
                    {showClock ? 'Hide Clock' : 'Show Clock'}
                </button>
                {showClock && <Clock />}
            </div>
        )
    }
}

export default FinalClock;