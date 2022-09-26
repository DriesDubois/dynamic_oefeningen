import {Numbers} from "../components/Numbers";

export function NumbersPage(props) {
    const {numbers} = props;
    if (!numbers) return;
    return (
        <>
            <h1>Alle getallen</h1>
            <div style={{flexDirection: "column", display:"flex"}}>
                {numbers.map(n => <Numbers Key={n.index} Numbers={n}/>)}
            </div>
        </>

    );
}