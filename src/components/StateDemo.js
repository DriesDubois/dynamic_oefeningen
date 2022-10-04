import {useState} from "react";
import {Section} from "./Section";
import {MyButton} from "./MyButton";
import {Counter} from "./Counter";

export function StateDemo(){
    const [demoValue, setDemoValue] = useState(0);

    return <Section title="state">
        <div>de waardse van demoValue is {demoValue}</div>
        <div>de 2e waarde van demoValue is {demoValue}</div>
        <div>
            <MyButton onClick={()=> setDemoValue(0)}>SET 0</MyButton>
            <MyButton text="SET 77" children={()=> setDemoValue(77)}>SET 77</MyButton>
            <MyButton text="SET 255" children={()=> setDemoValue(255)}>SET 255</MyButton>
        </div>
        <div>
            <Counter name="Teller 1"/>
            <Counter name="Teller 2"/>
        </div>
    </Section>
}