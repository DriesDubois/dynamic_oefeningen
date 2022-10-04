import {useState} from "react";
import {MyButton} from "./MyButton";

export function OnOffDemo() {
    const [isOn, setIsOn] = useState(false);

    return <div>
        <div>de waarde van isOn is {isOn?"ON":"OFF"}</div>
        <div>
            <MyButton onClick={() => setIsOn(true)}>SET TRUE</MyButton>
            <MyButton onClick={() => setIsOn(false)}>SET FALSE</MyButton>
            <MyButton onClick={() => setIsOn(!isOn)}>TOGGLE</MyButton>
        </div>
    </div>

}