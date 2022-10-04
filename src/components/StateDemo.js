import {useState} from "react";
import {Section} from "./Section";
import {MyButton} from "./MyButton";
import {Counter} from "./Counter";
import {OnOffDemo} from "./OnOffDemo";

export function StateDemo() {
    const [demoValue, setDemoValue] = useState(0);

    return <Section title="state">
        <DemoValue demoValue={demoValue} onDemoValueChange={setDemoValue}/>
        <div>
            <Counter name="Teller 1"/>
            <Counter name="Teller 2"/>
        </div>
        <OnOffDemo/>
        <DemoValueReadonly demoValue={demoValue}/>
        <DemoValueIncrement demoValue={demoValue} onDemoValueChange={setDemoValue}/>
    </Section>
}

function DemoValue(props) {
    const {demoValue,onDemoValueChange} = props;

    return <>
        <div>de waarde van demoValue is {demoValue}</div>
        <div>de waarde van demoValue is {demoValue}</div>
        <div>
            <MyButton onClick={() => onDemoValueChange(0)}>SET 0</MyButton>
            <MyButton onClick={() => onDemoValueChange(77)}>SET 77</MyButton>
            <MyButton onClick={() => onDemoValueChange(255)}>SET 255</MyButton>
        </div>
    </>
}

function DemoValueReadonly (props){
    const {demoValue} = props;
    return <div>
        <h3>{demoValue}</h3>
    </div>
}

function DemoValueIncrement(props){
    const {demoValue,onDemoValueChange} = props;

    return <MyButton onClick={() => onDemoValueChange(demoValue+1)}>
        demoValue increment
    </MyButton>


}