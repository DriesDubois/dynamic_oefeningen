import './App.css';
import {MenuCard} from "./components/MenuCard";
import {PRODUCTS_DATA} from "./data/data";


function App() {
    return (
            <MenuCard products={PRODUCTS_DATA}/>
    );
}

export default App;
