import * as PropTypes from "prop-types";

export function MenuProduct(props) {
    const {product} = props;
    if (!product?.name) return;
    return (
        <div style={{margin: "2vw", fontSize: "Larger",display:"flex"}}>
            {product.name || "unknown"} <ProductSize product={product}/>  <ProductNote
            product={product} /> <ProductPrice product={product}/>
        </div>
    );
}

export function ProductSize(props) {
    const {product} = props;
    if (!product?.size) return;
    return (
        <p style={{fontSize: "Small", color:"blue"}}>({product.size}cl)</p>
    );
}

function ProductPrice(props) {
    return <p style={{fontSize: "Small", color:"blue",justifyContent:"flex-end"}}>{props.product.price}€</p>;
}

ProductPrice.propTypes = {product: PropTypes.any};

function ProductNote(props) {
    return <p style={{fontSize: "Small", color:"blue"}}>{props.product.note ? props.product.note : ""}</p>;
}

ProductNote.propTypes = {product: PropTypes.any};