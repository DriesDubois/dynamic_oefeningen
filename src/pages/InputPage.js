import {useState} from "react";
import {Form} from "react-bootstrap";

export function InputPage() {
    const [testInput, setTestInput] = useState();

    return (
        <div className="mx-3">
            <div className="m-3">
                <label htmlFor="search">test input: </label>
                <input id="search" value={testInput} onChange={e => setTestInput(e.target.value)}/>
            </div>
            <div className="m-3">
                <Form>
                    <Form.Label>form test input: </Form.Label>
                    <Form.Control value={testInput} onChange={e => setTestInput(e.target.value)}/>
                </Form>
            </div>
            <div className="m-3">
                <p>de waarde is: {testInput}</p>
            </div>
        </div>
    )
}