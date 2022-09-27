import * as PropTypes from "prop-types";



Section.propTypes = {
    Section: PropTypes.shape({
        list: PropTypes.array,
        title: PropTypes.string
    })
}

export function Section(props) {
    const {content,title} = props;


    return(
        <>
            <div style={{background: "lightBlue", paddingLeft: "10%", paddingRight: "10%"}}>
                <h1 style={{textAlign: "center", marginBottom: "25px"}}>{title}</h1>
                <div className="d-flex flex-column space-between mb-5">
                    {content}
                </div>
            </div>

        </>
    )
}