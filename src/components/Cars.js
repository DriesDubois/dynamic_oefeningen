import * as PropTypes from "prop-types";
import {COLOR_TRANSLATION} from "../data/data";


Cars.propTypes = {
    Cars: PropTypes.shape({
        cars: PropTypes.array,
        title: PropTypes.string
    })
}

export function Cars(props) {
    const {array} = props;
    const {title} = props;

    return(
        <>
            <div style={{background: "lightBlue", paddingLeft: "10%", paddingRight: "10%"}}>
                <h1 style={{textAlign: "center", marginBottom: "25px"}}>{title}</h1>
                <div className="d-flex flex-column space-between mb-5">
                    {array.map(c => <Car key={c.id} car={c}/> )}
                </div>
            </div>

        </>
    )
}



export function Car(props){
    const {car} = props;
    // const {carColor} = (COLOR_TRANSLATION.filter(translation => translation.dutch === car.color).map(translated => translated.english));
    // const {carColor} = translateColorToDutch(COLOR_TRANSLATION, car.color);
    COLOR_TRANSLATION.find(el => el.dutch === "blauw")
    console.log(COLOR_TRANSLATION.find(el => el.dutch === "blauw").english)

    return (
        <div className="d-flex flex-column space-between mb-5" style={{background:"white"}}>
        <h2 className="text-center mb-1">{car.name}</h2>
            <p className="text-center">{car.brand &&<span>merk: {car.brand}</span> }</p>
            <p className="text-center">{car.type &&<span>type: {car.type}</span> }</p>
            <p style={{background: getBackground(COLOR_TRANSLATION,car.color)}} className="text-center">{car.color &&<span>kleur: {car.color}</span> }</p>
            <p></p>

        </div>
    )

}

function getBackground(array , color) {
    console.log(array.find(el => el.dutch === color).english)
    return array.find(el => el.dutch === color).english;
}

function translateColorToDutch(translationTable,color){

    return translationTable.find(el => el.dutch === color).english

}
