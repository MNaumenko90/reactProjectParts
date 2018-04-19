import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import {Link} from 'react-router-dom';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

//components
import SectionWikiNavigation from './SectionWikiNavigation';
//Images
import WikiBg from './assets/images/wikiBg.png';
import CrumbBg from './assets/images/crumbArrow.png';
const styles = theme => ({
    root: theme.root,
    crumbsBg: {
        background: `url(${WikiBg}) no-repeat`,
        backgroundSize:'cover',
        padding: '27px 0',
    },
    subHead: {
        color:'#fff',
        marginTop:76,
        fontSize:36,
        fontWeight: 100,
        [theme.breakpoints.down('xs')]: {
            marginTop: 0,
            fontSize: 32,
        },
    },
    crumbs: {
        margin:0,
        padding:0,
        listStyle: 'none',
        '& li': {
            display:'inline-block',
            color:'#9299a2',
            position:'relative',
            paddingRight:20,
            marginRight:10,
            '&:after': {
                position:'absolute',
                content:'""',
                background: `url(${CrumbBg}) no-repeat`,
                zIndex:2,
                top:6,
                right:0,
                color:'#fff',
                width:8,
                height:8,
                display:'block',
            },
            '&:last-child': {
                paddingRight:0,
                marginRight:0,
                '&:after': {
                    display:'none',
                },
            },
            '& a': {
                color:'#fff',
            },
        },
    },
});

const Wiki = ({classes, getWebWikiCount, getWebWikiList, setActiveWikiPage, path, activePage, wikiList, count}) => (
    <main>
        <section className={classes.crumbsBg}>
            <Grid container spacing={24} className={classes.root}>
                <Grid item xs={12}>
                    <Typography type="headline" className={classes.subHead}>
                        Термины и понятия
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <ul className={classes.crumbs}>
                        <li>
                            <Link to="/">
                                <Typography type="caption">
                                    Недвижимость минска
                                </Typography>
                            </Link>
                        </li>
                        <li>
                            <Typography type="caption">
                                Термины и понятия
                            </Typography>
                        </li>
                    </ul>
                </Grid>
            </Grid>
        </section>
        <SectionWikiNavigation getWebWikiCount={getWebWikiCount} getWebWikiList={getWebWikiList}
                               setActiveWikiPage={setActiveWikiPage} path={path} activePage={activePage}
                               wikiList={wikiList} count={count} />
    </main>
);

export default withStyles(styles)(Wiki);