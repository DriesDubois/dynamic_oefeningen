import * as PropTypes from "prop-types";
import {Button} from "react-bootstrap";

MyButton.propTypes = {
    MyButton: PropTypes.shape({
        text: PropTypes.string

    })
}

export function MyButton(props) {
    const {text, children} = props;

    return <Button variant="primary" size="sm" classname="ms-2 mt-1"
                   onClick={children}>
        {text}</Button>
}