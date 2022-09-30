import * as PropTypes from "prop-types";
import {Container, Row} from "react-bootstrap";



Section.propTypes = {
    Section: PropTypes.shape({
        list: PropTypes.array,
        title: PropTypes.string
    })
}

export function Section(props) {
    const {children,title} = props;


    return(
            <div style={{background: "lavender", paddingLeft: "10%", paddingRight: "10%"}} className="mt-3 rounded shadow-sm">
                <h1 style={{textAlign: "center", marginBottom: "25px"}}>{title}</h1>
                <Container>
                    <Row>
                        {children}
                    </Row>
                </Container>
            </div>
    )
}