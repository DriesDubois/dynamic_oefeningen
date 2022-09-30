import {Persons} from "../components/Persons";


export function PersonsPage(props) {
    const {array} = props;
    return (
        <>
            <Persons persons={array} title={"Personen"}/>
        </>
    )
}