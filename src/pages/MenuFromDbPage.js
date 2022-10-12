import {collection,query,where,orderBy,addDoc} from "firebase/firestore";
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {MenuCardPage} from "./MenuCardPage";
import {MyButton} from "../components/MyButton";
import {Person} from "../components/Persons";


const menuConverter = {
    toFirestore: undefined,
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        console.log(data)
        return {...data, id: snapshot.id}
    }
}
const collectionRef = collection(firestoreDB, 'Menu').withConverter(menuConverter);

export function MenuFromDbPage() {

    const queryRef = query(collectionRef,orderBy("sequence"));
    const [values, loading, error] = useCollectionData(queryRef);
    console.log(error);
    console.log({values, loading, error});
    return<>

        <MenuCardPage products={values}/>
    </>
}

