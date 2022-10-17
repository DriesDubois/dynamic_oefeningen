import {Section} from "./Section";
import {MyCard} from "./MyCard";
import {MyButton} from "./MyButton";


export function Persons(props) {
    const {persons,defaultState,editable,selectedPerson} = props;
    const {title} = props;
    if (!persons) return;
    return (
        <Section title={title} defaultState={defaultState}>
            {persons.map(p => <Person selectedPerson={selectedPerson} key={p.id} person={p} editable={true}/>)}
        </Section>
    )
}

export function Person(props) {
    let {person,editable,selectedPerson} = props;

    return (
  <MyCard
      onClick={()=> selectedPerson(selectedPerson=person)}
      title={person.name}>
      {person.age && <p className="text-center">{person.age} </p>}
      {person.city && <p className="text-center">{person.city} </p>}
      {editable && <MyButton>delete</MyButton>}
  </MyCard>
    )

}
