import * as PropTypes from "prop-types";
import {Container, Row} from "react-bootstrap";



MyCard.propTypes = {
    Section: PropTypes.shape({
        element: PropTypes.object,
    })
}

export function MyCard(props) {
    const {children,title} = props;
    return (
    <div style={{background: "white", paddingLeft: "10%", paddingRight: "10%"}} className="mt-3 rounded shadow-sm">
        <h1 style={{textAlign: "center", marginBottom: "25px"}}>{title}</h1>
        <Container>
            <Row>
                {children}
            </Row>
        </Container>
    </div>
    )
}