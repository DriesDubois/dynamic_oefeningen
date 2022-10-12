export function filterPersons(persons,searchInput){
    if(searchInput === "") return persons
    return persons.filter(p=>p.name.toLowerCase().includes(searchInput.toLowerCase()) || p.city.toLowerCase().includes(searchInput.toLowerCase()) )
}