import {useState} from "react";
import {Section} from "./Section";
import {MyButton} from "./MyButton";
import {Counter} from "./Counter";
import {OnOffDemo} from "./OnOffDemo";

export function StateDemo() {
    return <Section title="state">
        <DemoValue/>
        <div>
            <Counter name="Teller 1"/>
            <Counter name="Teller 2"/>
        </div>
        <div>
            <OnOffDemo/>
        </div>
    </Section>
}

function DemoValue() {
    const [demoValue, setDemoValue] = useState(0);
    return <>
        <div>de waarde van demoValue is {demoValue}</div>
        <div>de waarde van demoValue is {demoValue}</div>
        <div>
            <MyButton onClick={() => setDemoValue(0)}>SET 0</MyButton>
            <MyButton onClick={() => setDemoValue(77)}>SET 77</MyButton>
            <MyButton onClick={() => setDemoValue(255)}>SET 255</MyButton>
        </div>
    </>
}