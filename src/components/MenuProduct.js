import * as PropTypes from "prop-types";

export function MenuProduct(props) {
    const {product} = props;
    if (!product?.name) return;
    return (

        <div style={{margin: "2vw", fontSize: "Larger",display:"flex",justifyContent:"space-between",maxWidth:"50%"}}>
            <div>
                {product.name || "unknown"} <ProductSize product={product}/>  <ProductNote
                product={product} />
            </div>
            <div>
                <ProductPrice product={product}/>
            </div>

        </div>


    );
}

export function ProductSize(props) {
    const {product} = props;
    if (!product?.size) return;
    return (
        <span style={{fontSize: "Small", color:"blue"}}>({product.size}cl)</span>
    );
}

function ProductPrice(props) {
    return <span style={{justifyContent:"flex-end"}}>{props.product.price}€</span>;
}

ProductPrice.propTypes = {product: PropTypes.any};

function ProductNote(props) {
    return <p style={{fontSize: "Small", color:"blue"}}>{props.product.note ? props.product.note : ""}</p>;
}

ProductNote.propTypes = {product: PropTypes.any};