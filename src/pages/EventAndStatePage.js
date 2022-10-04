import {EventDemo} from "../components/EventDemo";
import {StateDemo} from "../components/StateDemo";

export function EventAndStatePage(props) {
    return (
        <div style={{flexDirection: "column", display:"flex"}}>
            <EventDemo text={"poof"}/>
            <StateDemo/>
        </div>
    );
}