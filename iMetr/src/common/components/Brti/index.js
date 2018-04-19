import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import {Link} from 'react-router-dom';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

//components
import SectionBrtiNavigation from './SectionBrtiNavigation';
import BrtiList from './BrtiList';
//Images
import BrtiBg from './assets/images/BrtiBg.png';
import CrumbBg from './assets/images/crumbArrow.png';
const styles = theme => ({
    root: theme.root,
    crumbsBg: {
        background: ` #1b2833 url(${BrtiBg}) no-repeat center center`,
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

class Brti extends Component {

    render() {
        const {classes} = this.props;
        return (
            <main>
                <section className={classes.crumbsBg}>
                    <Grid container spacing={24} className={classes.root}>
                        <Grid item xs={12}>
                            <Typography type="subheading" component={"h1"} className={classes.subHead}>
                                Агентства по регистрации Минск
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
                                        Агентства по регистрации Минск
                                    </Typography>
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                </section>
                <SectionBrtiNavigation/>
                <BrtiList/>
            </main>
        );
    };
};

export default withStyles(styles)(Brti);