import {Numbers} from "../components/Numbers";
import {Number} from "../components/Numbers";
import {MenuProduct} from "../components/MenuProduct";

export function NumbersPage(props) {
    const {array}=props;
    const {title} = props;
    return (
        <>
        <Numbers array={array} title={title}/>
        </>
    )
        ;
}