//global modules
import React, { useState } from 'react';
import { Tab, Tabs } from '@material-ui/core';

//react components
import List from "../list/List";

//style ,store and other utility components
import Classes from './SideBar.module.scss';
import { TABS } from '../../utility/constants/constants';

const data1 = ['rohit', 'jonty', 'rajat', 'pk', 'paras', 'nitish', 'jija', 'cet'];
const data2 = ['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg', 'hh', 'ii', 'jj', 'kk', 'll', 'mm'];
const SideBar = (props) => {

    const [selectedTab, setSelectedTab] = useState(TABS[0]);

    const handleChange = (evt, new_value) => {
        setSelectedTab(new_value);
    }

    const renderListAcctoTab = () => {
        return (selectedTab === TABS[0]) ?
            <List data={[...data1, ...data1]} /> :
            <List data={[...data2, ...data2]} />
    }

    return (
        <div className={Classes.SideBar}>
            <Tabs
                value={selectedTab}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
                variant='fullWidth'
            >
                <Tab label={TABS[0]} value={TABS[0]} />
                <Tab label={TABS[1]} value={TABS[1]} />
            </Tabs>

            <div className={Classes.tabPanel}>
                {renderListAcctoTab()}
            </div>

        </div>
    );
}

export default SideBar;