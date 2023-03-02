import { useEffect, useState } from "react";

const DisplayTime = ({start_time})=>{

    const [used_time, setUsed_time]= useState(undefined);
    const display_time=()=>{

        const new_time = new Date().getTime();
        setUsed_time(
          ((new_time - start_time ) / 1000 ) 
            .toFixed(2)
            );
            
    }

    const change_time = setInterval(display_time, 100);

    return (
        <div className="display-time-view">
            <p className="used-time-area">{used_time}</p>
            <p>seconds have passed.</p>
        </div>
    );
}

export default DisplayTime;