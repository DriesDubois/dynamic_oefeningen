import * as PropTypes from "prop-types";
import {Container, Row} from "react-bootstrap";



MyCard.propTypes = {
    Section: PropTypes.shape({
        element: PropTypes.object,
    })
}

export function MyCard(props) {
   let {children,title,onSelect} = props;

    return (
    <div style={{background: "white", paddingLeft: "3%", paddingRight: "3%",minWidth:"300px",maxWidth:"500px"}}
         className="mt-3 rounded shadow-sm"
         onClick={()=> onSelect(onSelect=title)}
    >
        <h1 style={{textAlign: "center", marginBottom: "25px"}}>{title}</h1>
        <Container>
            <Row>
                {children}
            </Row>
        </Container>
    </div>
    )
}