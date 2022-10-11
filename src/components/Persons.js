import {Section} from "./Section";
import {MyCard} from "./MyCard";


export function Persons(props) {
    const {persons,defaultState} = props;
    const {title} = props;
    if (!persons) return;
    return (
        <Section title={title} defaultState={defaultState}>
            {persons.map(p => <Person key={p.id} person={p}/>)}
        </Section>
    )
}

export function Person(props) {
    const {person} = props;

    return (
  <MyCard title={person.name}>
      {person.age && <p className="text-center">{person.age} </p>}
      {person.city && <p className="text-center">{person.city} </p>}

  </MyCard>
    )

}
