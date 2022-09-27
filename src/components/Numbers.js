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
        <div style={{background: "lightBlue", paddingLeft: "10%", paddingRight: "10%"}}>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            <div className="d-flex align-content-start flex-wrap space-between mb-5 justify-content-between">
                {array.map(n => <div style={{padding: "50px" , margin: "25px", background: "white", minWidth: "120px"}}>{n}</div>)}
            </div>
        </div>

    </>
    )
}






