import {Persons} from "../components/Persons";
import {Numbers} from "../components/Numbers";
import {CITY_TESTDATA} from "../data/data";
import {Cities} from "../components/Cities";


export function PersonsPage(props) {
    const {persons} = props;
    const descendingByAge = [...persons].sort((a, b) => b.age - a.age);
    const allAgesSeparately = [...persons].map(el => el.age);
    const uniqueAgesSorted = [...new Set(persons.map(person => person.age))].sort(((a, b) => b - a));
    const uniqueCityNames = [...new Set(persons.map(person => person.city ))];
    const population = uniqueCityNames
        .map(city => ({
            name: city,
            numberOfPersons: persons.reduce((counter, el) => {
                return el.city === city ? counter + 1 : counter;
            },0)
        }));



    return (
        <>
            <Persons persons={persons} title={"Personen"}/>
            <Persons persons={descendingByAge} title={"Personen gesorteerd op leeftijd"}/>
            <Numbers numbers={allAgesSeparately} title={"alle leeftijden"}/>
            <Numbers numbers={uniqueAgesSorted} title={"unieke leeftijden"}/>
            <Cities title="TEST" cities={CITY_TESTDATA}/>
            <Cities title="population" cities={population}/>
        </>
    )
}