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
    )
}


export function Car(props) {
    const {car} = props;

    return (
        <MyCard title={car.name}>
            {car.brand && <p className="text-center">merk: {car.brand} </p>}
            {car.type && <p className="text-center">type: {car.type} </p>}
            {car.note && <p className="text-center">note: {car.note} </p>}
            <p style={car?.color && {background: getBackground(COLOR_TRANSLATION, car.color), marginInline: "50px",color: getTextColor(getBackground(COLOR_TRANSLATION,car.color))  }}
               className="text-center">{car.color && <span>kleur: {car.color}</span>}</p>
        </MyCard>
    )
}

function getBackground(array, color) {
    return (array.find(el => el.dutch === color).english)
}

function getTextColor(color) {
    return color === "black" ? "white" : "black"
}



