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
        <div className="mx-3">
            <Numbers numbers={[...new Set(numbers)]} title="alle getallen"
                     isInitiallyOpen={true}
                     markedNumber={favorite}
                     onSelectNumber={n => setFavorite(n)}/>
            <div>Mijn favoriete getal is {favorite ?? "(nog niet gekozen)"}</div>
        </div>

    )
}