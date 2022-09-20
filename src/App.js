import './App.css';
import {MenuProduct} from "./components/MenuProduct";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Menu</h1>
                <MenuProduct productName={"cola"} price={15}/>
                <MenuProduct productName={"water"} price={15}/>
                <MenuProduct productName={"bier"}/>
                <MenuProduct productName={"wijn"}/>
            </header>
        </div>
    );
}

export default App;
