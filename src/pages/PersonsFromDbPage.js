import {collection,query,orderBy} from 'firebase/firestore'
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Persons} from "../components/Persons";
import {useState} from "react";
import {filterPersons} from "../Utilities/Filters";
const personConverter = {
    toFirestore:undefined,
    fromFirestore: function (snapshot,options){
        const data = snapshot.data(options);
        return {...data,id: snapshot.id}
    }
};


export function PersonsFromDbPage() {
    const [searchInput, setSearchInput] = useState("");
    const collectionRef = collection(firestoreDB, 'Persons').withConverter(personConverter);
    const queryRef = query(collectionRef, orderBy("name"));
    const [values, loading, error] = useCollectionData(queryRef);

    return (

        <div className="m-3">
            <label htmlFor="search">search input: </label>
            <input id="search" value={searchInput} onChange={e => setSearchInput(e.target.value)}/>
            <Persons title="personen uit de database" persons={filterPersons(values,searchInput)} defaultState={true}/>
        </div>


    )

}