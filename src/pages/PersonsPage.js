import {Persons} from "../components/Persons";
import {Numbers} from "../components/Numbers";
import {CITY_TESTDATA} from "../data/data";
import {Cities} from "../components/Cities";


export function PersonsPage(props) {
    const {persons} = props;
    const descendingByAge = [...persons].sort((a, b) => b.age - a.age);
    const allAgesSeparately = [...persons].map(el => el.age);
    const uniqueAgesSorted = [...new Set(persons.map(person => person.age))].sort(((a, b) => b - a));
    const population = [...new Set(persons.map(person => person.city ))];
    console.log(population)
    const finalpopulation = population
        .map(city => ({
            name: city,
            numberOfPersons: persons.reduce((counter, el) => {
                if (el.city === city) {
                    return counter + 1;
                }
                return counter;
            },0)
        }));
    console.log(finalpopulation)

    void function PopulationCounter(){


    }



    return (
        <>
            <Persons persons={persons} title={"Personen"}/>
            <Persons persons={descendingByAge} title={"Personen gesorteerd op leeftijd"}/>
            <Numbers numbers={allAgesSeparately} title={"alle leeftijden"}/>
            <Numbers numbers={uniqueAgesSorted} title={"unieke leeftijden"}/>
            <Cities title="TEST" cities={CITY_TESTDATA}/>
            <Cities title="population" cities={finalpopulation}/>
        </>
    )
}