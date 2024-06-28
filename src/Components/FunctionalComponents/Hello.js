import { Component } from "react";

// class HelloName extends Component {

//     state={
//         count:0
//     }

//     onInc=()=>{
//         this.setState(prevValue=>{
//             return {
//                 count:prevValue.count+1
//             }
//         })
//     }

//     render(){
//         const {count} = this.state;
//         return (
//            <div>
//                 <h1>{count}</h1>
//                 <button onClick={this.onInc}>Inc</button>
//            </div>
//         )
//     }
// }

// export default HelloName



import { useState } from "react";

const HelloName=()=>{
    const [countValue,setCountValue]=useState(0);

    const onIncrement=()=>{
        setCountValue(prevValue=>prevValue+1);
    }

    const onReset=()=>{
        setCountValue(0);
    }

    const onDecrement=()=>{
        setCountValue(prevValue=>prevValue-1);
    }
    
    return(
        <div>
            <h1>{countValue}</h1>
            <button onClick={onDecrement}>Decrease</button>
            <button onClick={onReset}>Reset</button>
            <button onClick={onIncrement}>Increase</button>
        </div>
    )
}

export default HelloName;