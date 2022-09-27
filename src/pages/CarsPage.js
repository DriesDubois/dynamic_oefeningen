import {Cars} from "../components/Cars";


export function CarsPage(props) {
    const {array} = props;
    return (
        <>
            <Cars array={array} title={"Auto's"}/>
        </>
    )
        ;
}