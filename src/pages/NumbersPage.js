import {Numbers} from "../components/Numbers";


export function NumbersPage(props) {
    const {array} = props;
    return (
        <>
            <Numbers array={array} title={"Alle getallen"}/>
            <Numbers array={array.filter(n => n>6)} title={"Alle getallen groter dan 6"}/>
            <Numbers array={array.map(n => n*2)} title={"Alle getallen *2"}/>

        </>
    )
        ;
}