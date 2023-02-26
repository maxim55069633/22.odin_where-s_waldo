import { useState } from "react";

const Timer = () =>{
    let time_1 = undefined;
    let time_2 = undefined;

    const [time_diff, setTime_diff] = useState(0);

    const Timer_Start = ()=>{
        time_1 = new Date().getTime();
    }

    const Timer_Stop = ()=>{
        time_2 = new Date().getTime();
        setTime_diff( 
            (
                (time_2 - time_1 ) / 1000 )
            .toFixed(2)
        );
    }

    return (<div className="Timer">
        <button onClick={Timer_Start}>Start</button>
        <button onClick={Timer_Stop}>End</button>
        <span> {time_diff} seconds have elapsed</span>
    </div>)
}

export default Timer;