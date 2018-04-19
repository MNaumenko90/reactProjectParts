import React from 'react';
import { withStyles } from 'material-ui/styles';

//components
import BreadCrumbs from './BreadCrumbs';
import SectionBottomLinksComp from '../Main/SectionBottomLinks';
import SectionBrtiPage from './SectionBrtiPage';
import BrtiItem from './BrtiItem';
import Map from './Map.js';
import BrtiList from './BrtiList';
const styles = theme => ({
    root: theme.root,
});

const BrtiPage = ({classes})  =>  {
        return (
            <main>
                <BreadCrumbs/>
                <BrtiItem/>
                <SectionBrtiPage/>
                <Map/>
                <BrtiList/>
                <SectionBottomLinksComp/>
            </main>
        );
};

export default withStyles(styles)(BrtiPage);