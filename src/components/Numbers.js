import * as PropTypes from "prop-types";
import {Section} from "./Section";
import {MyCard} from "./MyCard";


Numbers.propTypes = {
    Numbers: PropTypes.shape({
        array: PropTypes.array,
        title: PropTypes.string
    })
}

function Number(props) {
    const {number} = props;
    return (
        <MyCard title={number}></MyCard>
    )
}



export function Numbers(props) {
    const {numbers} = props;
    const {title} = props;

    return(

        <Section title={title}>
            {numbers.map(n => <Number key={n.index} number={n}/>)}
        </Section>

        //Oude manier
    // <>
    //     <div style={{background: "lightBlue", paddingLeft: "10%", paddingRight: "10%"}}>
    //         <h1 style={{textAlign: "center"}}>{title}</h1>
    //         <div className="d-flex align-content-start flex-wrap space-between mb-5 justify-content-between">
    //             {numbers.map(n => <Number key={n.index} n={n}/>)}
    //         </div>
    //     </div>
    //
    // </>
    )
}






