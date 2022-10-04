import * as PropTypes from "prop-types";
import {Button} from "react-bootstrap";

EventDemo.propTypes = {
    EventDemo: PropTypes.shape({
    })
}

export function EventDemo(props) {
    const {text} = props;


    return(
        <div style={{background: "lavender", padding: "0 10% 5% 10%"}} className="mt-3 rounded shadow-sm">
            {/*<div  className="">*/}
            {/*    <button onClick={()=> alert(text)}>click</button>*/}
            {/*</div>*/}
            <div  className="">
                <Button variant="primary" onClick={(e)=> alert(`${text} (${e.clientX}, ${e.clientY}`)}>click</Button>
            </div>
            <div style={{background:"salmon"}} onClick={(e)=> alert('div is clicked')} >
                <a href={"www.google.com"} onClick={(e)=> {e.preventDefault(); e.stopPropagation(); alert('link is clicked')}}>
                    dit is een link met een href
                </a>
                <span> - en - </span>
                <Button variant="primary" onClick={(e)=>{e.stopPropagation(); alert('button is clicked')}}>dit is een button</Button>
            </div>
        </div>
    )
}