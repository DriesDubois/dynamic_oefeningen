import {useState} from "react";
import {MyButton} from "./MyButton";

export function Counter (props) {
    const {name} = props;

    const [counterValue, setCounterValue] = useState(0);

    return <>
        <h2>{name}</h2>
        <div>de waarde van de counter is {counterValue}</div>
        <div>
            <MyButton onClick={()=> setCounterValue(counterValue+1)}>+1</MyButton>
            <MyButton onClick={()=> setCounterValue(counterValue-1)}>-1</MyButton>
            <MyButton onClick={()=> setCounterValue(0)}>reset to 0</MyButton>

        </div>
        </>
}