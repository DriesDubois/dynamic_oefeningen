import * as PropTypes from "prop-types";
import {MyCard} from "./MyCard";


Numbers.propTypes = {
    Numbers: PropTypes.shape({
        array: PropTypes.array,
        title: PropTypes.string
    })
}

function Number(props) {
    const {number} = props;
    return (
        <MyCard title={number}/>
    )
}



export function Numbers(props) {
    const {numbers} = props;
    return(
        <div className="d-flex flex-row flex-wrap">
            {numbers.map((n,index) => <Number key={index} number={n}/>)}
        </div>

    )
}






