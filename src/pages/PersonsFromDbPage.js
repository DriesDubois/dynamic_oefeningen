import {collection} from 'firebase/firestore'
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Persons} from "../components/Persons";

export function PersonsFromDbPage() {
    const query = collection(firestoreDB, 'Persons');
    const [values, loading, error] = useCollectionData(query);
    console.log({values, loading, error});
    console.log(query)
    return (
        <Persons title="personen uit de database" persons={values} defaultState={true}>

        </Persons>
    )

}