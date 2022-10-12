import {Cars} from "../components/Cars";
import {Section} from "../components/Section";


export function CarsPage(props) {
    const {array} = props;
    return (
        <Section title="alle auto's" defaultState={true}>
            <Cars cars={array} title={"Auto's"}/>
        </Section>
    )
}