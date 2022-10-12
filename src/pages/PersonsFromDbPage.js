import {collection, query, orderBy, addDoc} from 'firebase/firestore'
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Persons} from "../components/Persons";
import {useState} from "react";
import {filterPersons} from "../Utilities/Filters";
import {MyButton} from "../components/MyButton";

const personConverter = {
    toFirestore: function (dataInApp) {
        return {
            name: dataInApp.name,
            age: Number(dataInApp.age),
            city: dataInApp.city,
        }
    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id}
    }
};


export function PersonsFromDbPage() {
    const collectionRef = collection(firestoreDB, 'Persons').withConverter(personConverter);
    const [searchInput, setSearchInput] = useState("");
    const queryRef = query(collectionRef, orderBy("name"));
    const [values, loading, error] = useCollectionData(queryRef);

    function addDummyPerson() {
        const person = {name: "Dummy", age: 1, city: "DumVille"};
        addDoc(collectionRef, person);
    }

    return (
        <div className="m-3">
            <MyButton onClick={() => addDummyPerson()}>add Dummy</MyButton>
            <label htmlFor="search">search input: </label>
            <input id="search" value={searchInput} onChange={e => setSearchInput(e.target.value)}/>
            <Persons title="personen uit de database" persons={filterPersons(values, searchInput)} defaultState={true}/>
        </div>
    )
}

