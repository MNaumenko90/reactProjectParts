import React from 'react';
import { withStyles } from 'material-ui/styles';

//components
import BreadCrumbs from './BreadCrumbs';
import SectionBottomLinksComp from '../Main/SectionBottomLinks';
import SectionNotariatPage from './SectionNotariatPage';
import NotariatItem from './NotariatItem';
import Map from './Map.js';
import NotariatList from '../Notariat/NotariatList'
const styles = theme => ({
    root: theme.root,
});

const NotariatPage = ({classes})  =>  {
        return (
            <main>
                <BreadCrumbs/>
                <NotariatItem/>
                <SectionNotariatPage/>
                <Map/>
                <NotariatList/>
                <SectionBottomLinksComp/>
            </main>
        );
};

export default withStyles(styles)(NotariatPage);