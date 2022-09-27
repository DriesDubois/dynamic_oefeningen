import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {PRODUCTS_DATA} from "./data/data";
import {PICTURES_DATA} from "./data/data";
import {NUMBERS_DATA} from "./data/data";
import {MenuCardPage} from "./pages/MenuCardPage";
import {PicturesPage} from "./pages/PicturesPage";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {NumbersPage} from "./pages/NumbersPage";

function App() {
    return (
        <>
            <Tabs>
                <TabList>
                    <Tab>Menu</Tab>
                    <Tab>Pictures</Tab>
                    <Tab>Numbers</Tab>
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
            </Tabs>
        </>

    );
}

export default App;
