import * as PropTypes from "prop-types";
import {Section} from "../components/Section";
import {Numbers} from "../components/Numbers";


FavoriteNumberPage.propTypes = {
    FavoriteNumbersPage: PropTypes.shape({
        numbers: PropTypes.array,
    })
}

export function FavoriteNumberPage(props) {
    const {numbers} = props;
    return (
        <>
            <Section title="alle getallen" defaultState={true}>
                <Numbers numbers={numbers} title="alle getallen"/>
                <p>Mijn favoriete getal is: </p>
            </Section>
        </>

    )
}