import * as PropTypes from "prop-types";


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


    return (
        <div className="d-flex flex-column space-between mb-5" style={{background:"white"}}>
        <h2 className="text-center mb-1">{car.name}</h2>
            <p className="text-center">{car.brand &&<span>merk: {car.brand}</span> }</p>
            <p className="text-center">{car.type &&<span>type: {car.type}</span> }</p>
            <p className="text-center">{car.color &&<span>kleur: {car.color}</span> }</p>
        </div>
    )

}
