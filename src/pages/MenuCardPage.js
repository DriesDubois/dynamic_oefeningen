import {MenuProduct} from "../components/MenuProduct";


export function MenuCardPage(props) {
    const {products} = props;
    if (!products) return;
    return (
        <div style={{flexDirection: "column", display:"flex"}}>
            {products.map(p => <MenuProduct key={p.name} product={p}/>)}
        </div>
    );
}