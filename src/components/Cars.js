import * as PropTypes from "prop-types";
import {COLOR_TRANSLATION} from "../data/data";
import {Section} from "./Section";
import {MyCard} from "./MyCard";


Cars.propTypes = {
    Cars: PropTypes.shape({
        cars: PropTypes.array,
        title: PropTypes.string
    })
}

export function Cars(props) {
    const {cars} = props;
    const {title} = props;

    return (

        <Section title={title}>
            {cars.map(c => <Car key={c.id} car={c}/>)}
        </Section>

        // Oude manier zonder gebruik van child en section functie
        // <>
        //     <div style={{background: "lightBlue", paddingLeft: "10%", paddingRight: "10%"}}>
        //         <h1 style={{textAlign: "center", marginBottom: "25px"}}>{title}</h1>
        //         <div className="d-flex space-between mb-5 flex-wrap justify-content-between" style={{gap:"50px"}}>
        //             {array.map(c => <Car key={c.id} car={c}/> )}
        //         </div>
        //     </div>
        //
        // </>
    )
}


export function Car(props) {
    const {car} = props;

    return (

        <MyCard title={car.name}>
            {car.brand && <p className="text-center">merk: {car.brand} </p>}
            {car.type && <p className="text-center">type: {car.type} </p>}
            {car.note && <p className="text-center">note: {car.note} </p>}
            <p style={car?.color && {background: getBackground(COLOR_TRANSLATION, car.color), marginInline: "50px"}}
               className="text-center">{car.color && <span>kleur: {car.color}</span>}</p>

        </MyCard>

        // <div className="d-flex flex-column space-between mb-5 justify-content-center" style={{background:"white",minWidth: "300px"}}>
        // <h2 className="text-center mb-1">{car.name}</h2>
        //     {car.brand && <p className="text-center">merk: {car.brand} </p>}
        //     {car.type && <p className="text-center">type: {car.type} </p>}
        //     {car.note && <p className="text-center">note: {car.note} </p>}
        //     <p style={car?.color && {background: getBackground(COLOR_TRANSLATION,car.color),marginInline:"50px"}} className="text-center">{car.color &&<span>kleur: {car.color}</span> }</p>
        // </div>
    )

}

function getBackground(array, color) {
    return (array.find(el => el.dutch === color).english)
}


