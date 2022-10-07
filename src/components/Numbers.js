import * as PropTypes from "prop-types";
import {MyCard} from "./MyCard";


Numbers.propTypes = {
    Numbers: PropTypes.shape({
        array: PropTypes.array,
        title: PropTypes.string
    })
}

function Number(props) {
    const {number,onSelect, isMarked} = props;
    return (
        <MyCard isMarked={isMarked} onSelect={onSelect} title={number}/>
    )
}



export function Numbers(props) {
    const {numbers,onSelectNumber,markedNumber} = props;
    return(
        <div className="d-flex flex-row flex-wrap">
            {numbers.map((n,index) => <Number isMarked={markedNumber} onSelect={onSelectNumber} key={index} number={n}/>)}
        </div>

    )
}






