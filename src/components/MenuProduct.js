import * as PropTypes from "prop-types";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

MenuProduct.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string,
        size: PropTypes.number,
        price: PropTypes.number,
        note: PropTypes.string
    })

}

export function MenuProduct(props) {
    const {product} = props;
    if (!product?.name) return;
    return (

        <Container>
            <Row>
                <Col>
                    {product.name || "unknown"} <ProductSize product={product}/> <ProductNote product={product}/>
                </Col>
                <Col>
                    <ProductPrice product={product}/>
                </Col>
            </Row>
        </Container>

        // <div style={{margin: "2vw", fontSize: "Larger",display:"flex",justifyContent:"space-between",maxWidth:"50%"}}>
        //
        //     <div>
        //
        //     </div>
        //
        // </div>


    );
}

export function ProductSize(props) {
    const {product} = props;
    if (!product?.size) return;
    return (
        <span style={{fontSize: "Small", color: "blue"}}>({product.size}cl)</span>
    );
}


function ProductPrice(props) {
    return <span style={{justifyContent: "flex-end"}}>{props.product.price}€</span>;
}


function ProductNote(props) {
    return <p style={{fontSize: "Small", color: "blue"}}>{props.product.note ? props.product.note : ""}</p>;
}

