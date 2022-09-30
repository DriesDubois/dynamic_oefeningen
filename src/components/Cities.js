import * as PropTypes from "prop-types";
import {Section} from "./Section";
import {MyCard} from "./MyCard";


Cities.propTypes = {
    Cities: PropTypes.shape({
        cities: PropTypes.array,
        title: PropTypes.string
    })
}

export function Cities(props) {
    const {cities} = props;
    const {title} = props;

    return (

        <Section title={title}>
            {cities.map((c,index) => <City key={index} city={c}/>)}
        </Section>
    )
}

export function City(props) {
const {city} = props;

    return (

        <MyCard title={city.name}>
            {city.name && <p className="text-center">aantal personen: {city.numberOfPersons} </p>}
        </MyCard>
    )
}