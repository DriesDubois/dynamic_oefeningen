import * as PropTypes from "prop-types";
import {Button} from "react-bootstrap";
import {useState} from "react";


Section.propTypes = {
    Section: PropTypes.shape({
        list: PropTypes.array,
        title: PropTypes.string,
        defaultState:PropTypes.bool
    })
}

export function Section(props) {
    const {children, title,defaultState} = props;
    const [isOpen, setIsOpen] = useState(defaultState?defaultState:false);


    return (


        <div style={{background: "lavender", padding: "0 10% 5% 10%"}} className="mt-3 rounded shadow-sm">
            <div className="d-flex flex-row justify-content-center gap-5">
                <h1 style={{textAlign: "center", marginBottom: "25px"}}>{title}</h1>
                <Button variant="outline-info" size="sm"
                        classname="ms-2 mt-1"
                        onClick={() => setIsOpen(!isOpen)}>{isOpen?"-":"+"}</Button>
            </div>
            {isOpen && <div className="d-flex flex-row gap-5 flex-wrap mb-5">
                {children}
            </div>}
        </div>
    )
}