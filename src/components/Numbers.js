import * as PropTypes from "prop-types";
import {MyCard} from "./MyCard";
import {Section} from "./Section";


Numbers.propTypes = {
    Numbers: PropTypes.shape({
        array: PropTypes.array,
        title: PropTypes.string
    })
}

function Number(props) {
    const {number,onSelect, isMarked} = props;
    return (
        <MyCard isMarked={isMarked} onSelectNumber={onSelect} title={number}/>
    )
}



export function Numbers(props) {
    const {numbers, title, isInitiallyOpen, onSelectNumber, markedNumber} = props
    return (
        <Section title={title} isInitiallyOpen={isInitiallyOpen}>
            {numbers.map((n, i) =>
                <Number key={i}
                        number={n}
                        isMarked={markedNumber===n}
                        onSelect={onSelectNumber}/>)}
        </Section>
    );
}

Numbers.propTypes = {
    numbers: PropTypes.array,
    title: PropTypes.string,
    isInitiallyOpen: PropTypes.bool,
    markedNumber: PropTypes.number,
    onSelectNumber: PropTypes.func
};




