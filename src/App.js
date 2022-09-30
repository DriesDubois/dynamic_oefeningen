import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {PERSON_DATA, PRODUCTS_DATA,PICTURES_DATA,NUMBERS_DATA,CAR_DATA} from "./data/data";
import {MenuCardPage} from "./pages/MenuCardPage";
import {PicturesPage} from "./pages/PicturesPage";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {NumbersPage} from "./pages/NumbersPage";
import {CarsPage} from "./pages/CarsPage";
import {PersonsPage} from "./pages/PersonsPage";

function App() {
    return (
        <>
            <Tabs>
                <TabList>
                    <Tab>Menu</Tab>
                    <Tab>Pictures</Tab>
                    <Tab>Numbers</Tab>
                    <Tab>Cars</Tab>
                    <Tab>Persons</Tab>
                </TabList>
                <TabPanel>
                    <MenuCardPage products={PRODUCTS_DATA}/>
                </TabPanel>
                <TabPanel>
                    <PicturesPage pictures={PICTURES_DATA}/>
                </TabPanel>
                <TabPanel>
                    <NumbersPage array={NUMBERS_DATA}/>
                </TabPanel>
                <TabPanel>
                    <CarsPage array={CAR_DATA}/>
                </TabPanel>
                <TabPanel>
                    <PersonsPage array={PERSON_DATA}/>
                </TabPanel>
            </Tabs>
        </>

    );
}

export default App;
