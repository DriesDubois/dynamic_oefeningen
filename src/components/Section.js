import * as PropTypes from "prop-types";



Section.propTypes = {
    Section: PropTypes.shape({
        list: PropTypes.array,
        title: PropTypes.string
    })
}

export function Section(props) {
    const {children,title} = props;


    return(
            <div style={{background: "lavender", padding: "0 10% 5% 10%"}} className="mt-3 rounded shadow-sm">
                <h1 style={{textAlign: "center", marginBottom: "25px"}}>{title}</h1>

                    <div  className="d-flex flex-row gap-5 flex-wrap mb-5">
                        {children}
                    </div>


            </div>
    // <div style={{background: "lavender", padding: "0 10% 5% 10%"}} className="mt-3 rounded shadow-sm">
    //     <h2 className="text-center">{title}</h2>
    //     <container>
    //
    //     </container>
    //
    // </div>

    )
}