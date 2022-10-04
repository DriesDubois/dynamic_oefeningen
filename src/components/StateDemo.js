import {useState} from "react";
import {Section} from "./Section";
import {MyButton} from "./MyButton";

export function StateDemo(){
    const [demoValue, setDemoValue] = useState(0);

    return <Section title="state">
        <div>de waarde van demoValue is {demoValue}</div>
        <div>de 2e waarde van demoValue is {demoValue}</div>
        <div>
            <MyButton text="SET 0" children={()=> setDemoValue(0)}/>
            <MyButton text="SET 77" children={()=> setDemoValue(77)}/>
            <MyButton text="SET 255" children={()=> setDemoValue(255)}/>

        </div>
    </Section>
}