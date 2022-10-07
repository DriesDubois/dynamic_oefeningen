import * as PropTypes from "prop-types";
import {Container, Row} from "react-bootstrap";
import {COLOR_TRANSLATION} from "../data/data";



MyCard.propTypes = {
    Section: PropTypes.shape({
        element: PropTypes.object,
    })
}

export function MyCard(props) {
   let {children,title,onSelect,isMarked} = props;

    // {car?.color && {background: getBackground(COLOR_TRANSLATION, car.color)

    return (
    <div  style={{background: isMarked===title?"orange":"white", paddingLeft: "3%", paddingRight: "3%",minWidth:"300px",maxWidth:"500px"}}
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