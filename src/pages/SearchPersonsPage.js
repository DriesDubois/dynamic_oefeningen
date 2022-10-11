import {useState} from "react";
import {Persons} from "../components/Persons";

export function SearchPersonsPage(props) {
    const [searchInput, setSearchInput] = useState("");
    const {persons} = props

    return (
        <>
            <div className="m-3">
                <label htmlFor="search">search input: </label>
                <input id="search" value={searchInput} onChange={e => setSearchInput(e.target.value)}/>
            </div>
            <Persons persons={filterPersons(persons,searchInput)} title="search"/>
        </>
    )

}

function filterPersons(persons,searchInput){
    if(searchInput === "") return persons
    return persons.filter(p=>p.name.toLowerCase().includes(searchInput.toLowerCase()) || p.city.toLowerCase().includes(searchInput.toLowerCase()) )
}