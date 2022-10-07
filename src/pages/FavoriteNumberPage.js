import * as PropTypes from "prop-types";
import {Section} from "../components/Section";
import {Numbers} from "../components/Numbers";
import {useState} from "react";


FavoriteNumberPage.propTypes = {
    FavoriteNumbersPage: PropTypes.shape({
        numbers: PropTypes.array,
    })
}

export function FavoriteNumberPage(props) {
    const {numbers} = props;
    const [favorite, setFavorite] = useState(undefined);

    return (
        <>
            <Section title="alle getallen" defaultState={true}>
                <Numbers onSelectNumber={setFavorite} numbers={numbers} title="alle getallen"/>
                <p>Mijn favoriete getal is {favorite?favorite:"nog niet gekozen"}</p>
            </Section>
        </>

    )
}