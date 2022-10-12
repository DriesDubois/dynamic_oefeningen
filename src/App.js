import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import "./services/firebase"

import {PERSON_DATA, PRODUCTS_DATA,PICTURES_DATA,NUMBERS_DATA,CAR_DATA} from "./data/data";
import {MenuCardPage} from "./pages/MenuCardPage";
import {PicturesPage} from "./pages/PicturesPage";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {NumbersPage} from "./pages/NumbersPage";
import {CarsPage} from "./pages/CarsPage";
import {PersonsPage} from "./pages/PersonsPage";
import {EventAndStatePage} from "./pages/EventAndStatePage";
import {FavoriteNumberPage} from "./pages/FavoriteNumberPage";
import {InputPage} from "./pages/InputPage";
import {SearchPersonsPage} from "./pages/SearchPersonsPage";
import {PersonsFromDbPage} from "./pages/PersonsFromDbPage";
import {CarsFromDbPage} from "./pages/CarsFromDbPage";
import {MenuFromDbPage} from "./pages/MenuFromDbPage";

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
                    <Tab>Event and state page</Tab>
                    <Tab>Fav Numbers</Tab>
                    <Tab>Input</Tab>
                    <Tab>Search</Tab>
                    <Tab>Persons from DB</Tab>
                    <Tab>Cars from DB</Tab>
                    <Tab>Menu from DB</Tab>
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
                    <PersonsPage persons={PERSON_DATA}/>
                </TabPanel>
                <TabPanel>
                    <EventAndStatePage/>
                </TabPanel>
                <TabPanel>
                    <FavoriteNumberPage numbers={NUMBERS_DATA}/>
                </TabPanel>
                <TabPanel>
                    <InputPage/>
                </TabPanel>
                <TabPanel>
                    <SearchPersonsPage persons={PERSON_DATA}/>
                </TabPanel>
                <TabPanel>
                    <PersonsFromDbPage/>
                </TabPanel>
                <TabPanel>
                    <CarsFromDbPage/>
                </TabPanel>
                <TabPanel>
                    <MenuFromDbPage/>
                </TabPanel>
            </Tabs>
        </>

    );
}

export default App;
