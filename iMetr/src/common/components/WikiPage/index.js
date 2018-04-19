import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import Helmet from 'react-helmet';

//components
import BreadCrumbs from './BreadCrumbs';
import SectionBottomLinksComp from '../Main/SectionBottomLinks';
import SectionWikiPage from './SectionWikiPage';

const styles = theme => ({
    root: theme.root,

});

const WikiPage = ({getOneWiki, oneTermin}) => (
    <div>
        <Helmet>
            <title>{oneTermin && oneTermin.title}</title>
            <meta name="description" content={oneTermin && oneTermin.content.blocks[0].text} />
        </Helmet>
        <main>
            <BreadCrumbs/>
            <SectionWikiPage getOneWiki={getOneWiki} oneTermin={oneTermin} />
            <SectionBottomLinksComp/>
        </main>
    </div>
);

export default withStyles(styles)(WikiPage);