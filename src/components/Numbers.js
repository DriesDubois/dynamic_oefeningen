import * as PropTypes from "prop-types";


Numbers.propTypes = {
    Numbers: PropTypes.shape({
        array: PropTypes.array,
        title: PropTypes.string
    })
}

export function Numbers(props) {
    const {array} = props;
    const {title} = props;

    return(
    <>
        <div style={{background: "lightBlue"}}>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            <div className="d-flex align-content-start flex-wrap space-between">
                {array.map(n => <Number Key={n.index} number={n}/>)}
            </div>
        </div>

    </>
    )
}

export function Number(props){
    const{number} = props;
    return(
        <>
        <div style={{padding: "50px" , margin: "25px", background: "white", minWidth: "120px"}}>{number}</div>
        </>
    )
}



