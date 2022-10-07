import * as PropTypes from "prop-types";
import {MyCard} from "./MyCard";


Numbers.propTypes = {
    Numbers: PropTypes.shape({
        array: PropTypes.array,
        title: PropTypes.string
    })
}

function Number(props) {
    const {number,onSelect} = props;
    return (
        <MyCard onSelect={onSelect} title={number}/>
    )
}



export function Numbers(props) {
    const {numbers,onSelectNumber} = props;
    return(
        <div className="d-flex flex-row flex-wrap">
            {numbers.map((n,index) => <Number onSelect={onSelectNumber} key={index} number={n}/>)}
        </div>

    )
}






