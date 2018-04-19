import React from 'react';
import { withStyles } from 'material-ui/styles';

//components
import BreadCrumbs from './BreadCrumbs';
import SectionBottomLinksComp from '../Main/SectionBottomLinks';
import SectionZhesPage from './SectionZhesPage';
import ZhesItem from './ZhesItem';
import Map from './Map.js';
import ZhesList from '../Zhes/ZhesList';
import HouseList from './HouseList';
const styles = theme => ({
    root: theme.root,
});

const ZhesPage = ({classes})  =>  {
        return (
            <main>
                <BreadCrumbs/>
                <ZhesItem/>
                <SectionZhesPage/>
                <Map/>
                <HouseList/>
                <ZhesList/>
                <SectionBottomLinksComp/>
            </main>
        );
};

export default withStyles(styles)(ZhesPage);