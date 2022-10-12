import {collection} from "firebase/firestore";
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {MenuCardPage} from "./MenuCardPage";


const menuConverter = {
    toFirestore: undefined,
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        console.log(data)
        return {...data, id: snapshot.id}
    }
}

export function MenuFromDbPage() {
    const query = collection(firestoreDB, 'Menu').withConverter(menuConverter);
    const [values, loading, error] = useCollectionData(query);
    console.log({values, loading, error});
    return<>
        <MenuCardPage products={values}/>
    </>
}