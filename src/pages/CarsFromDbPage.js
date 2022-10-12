import {collection} from 'firebase/firestore'
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {useState} from "react";
import {Cars} from "../components/Cars";
const personConverter = {
     toFirestore:undefined,
     fromFirestore: function (snapshot,options){
          const data = snapshot.data(options);
          return {...data,id: snapshot.id}
     }
};


export function CarsFromDbPage() {
     const [searchInput, setSearchInput] = useState("");
     const query = collection(firestoreDB, 'Cars');
     const [values, loading, error] = useCollectionData(query);
     console.log({values, loading, error});
     console.log(query)
     return (

         <div className="m-3">
              <label htmlFor="search">search input: </label>
              <input id="search" value={searchInput} onChange={e => setSearchInput(e.target.value)}/>
              <Cars title="personen uit de database" cars={values}/>
         </div>


     )

}