import React from 'react';
import { withStyles } from 'material-ui/styles';

//components
import BreadCrumbs from './BreadCrumbs';
import SectionBottomLinksComp from '../Main/SectionBottomLinks';
import SectionNotariusPage from './SectionNotariusPage';

const styles = theme => ({
    root: theme.root,
});

const NotariusPage = ({classes})  =>  {
        return (
            <main>
                <BreadCrumbs/>
                <SectionNotariusPage/>
                <SectionBottomLinksComp/>
            </main>
        );
};

export default withStyles(styles)(NotariusPage);