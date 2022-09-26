import * as PropTypes from "prop-types";


Numbers.propTypes = {
    Numbers: PropTypes.shape({
        array: PropTypes.array,
        title: PropTypes.string
    })
}

export function Numbers(props) {
    const {number} = props;
    return <p>{number}</p>
}

export function Number(props) {
    const {number} = props;
    return <p>{number}</p>
}

