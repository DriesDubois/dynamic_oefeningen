import {Persons} from "../components/Persons";
import {Numbers} from "../components/Numbers";


export function PersonsPage(props) {
    const {array} = props;
    const descendingByAge = [...array].sort((a, b) => b.age - a.age);
    const allAgesSeperately = [...array].map(el => el.age);
    const uniqueAgesSorted = [...new Set(array.map(person => person.age))].sort(((a, b) => b - a));
    return (
        <>
            <Persons persons={array} title={"Personen"}/>
            <Persons persons={descendingByAge} title={"Personen gesorteerd op leeftijd"}/>
            <Numbers numbers={allAgesSeperately} title={"alle leeftijden"}/>
            <Numbers numbers={uniqueAgesSorted} title={"unieke leeftijden"}/>
        </>
    )
}