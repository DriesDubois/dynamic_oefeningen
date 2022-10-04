import {EventDemo} from "../components/EventDemo";


export function EventAndStatePage(props) {
    return (
        <div style={{flexDirection: "column", display:"flex"}}>
            <EventDemo text={"poof"}/>
        </div>
    );
}