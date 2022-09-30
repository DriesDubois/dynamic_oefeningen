import {Cars} from "../components/Cars";


export function CarsPage(props) {
    const {array} = props;
    return (
        <>
            <Cars cars={array} title={"Auto's"}/>
        </>
    )
}