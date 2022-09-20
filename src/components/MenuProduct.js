export function MenuProduct(props) {
    const {productName,price} = props;
    return <div>{productName} {price} €</div>
}