import {Section} from "../components/Section";
import {Cars} from "../components/Cars";
import {collection} from "firebase/firestore";
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";


const carConverter = {
    toFirestore: undefined,
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        console.log(data)
        return {...data, id: snapshot.id}
    }
}

export function CarsFromDbPage() {
    const query = collection(firestoreDB, 'Cars').withConverter(carConverter);
    const [values, loading, error] = useCollectionData(query);
    console.log({values, loading, error});
    return<Section title="alle Auto's" defaultState={true}>
            <Cars cars={values}/>
    </Section>
}