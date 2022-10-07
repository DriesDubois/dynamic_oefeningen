import {Numbers} from "../components/Numbers";
import {Section} from "../components/Section";


export function NumbersPage(props) {
    const {array} = props;
    return (
        <>
            <Section title="Alle getallen">
                <Numbers numbers={array} title={"Alle getallen"}/>
            </Section>
            <Section title="Alle getallen groter dan 6">
                <Numbers numbers={array.filter(n => n > 6)}/>
            </Section>
            <Section title="Alle getallen *2">
                <Numbers numbers={array.map(n => n * 2)}/>
            </Section>

        </>
    )
        ;
}