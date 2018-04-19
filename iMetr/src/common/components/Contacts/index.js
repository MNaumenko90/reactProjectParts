import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import {Link} from 'react-router-dom';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Helmet from 'react-helmet';

// Components
import SectionBottomLinksComp from '../Main/SectionBottomLinks';
import SectionContactsNavigationComp from './SectionContactsNavigation';
//Images
import AboutBg from '../About/assets/images/about_Bg.png';
import CrumbBg from '../About/assets/images/crumbArrow.png';

const styles = theme => ({
    root: theme.root,
    crumbsBg: {
        background: `url(${AboutBg}) no-repeat`,
        backgroundSize:'cover',
        padding: '27px 0',
    },
    subHead: {
        color:'#fff',
        marginTop:76,
        fontSize:36,
        fontWeight: 300,
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

class Contacts extends Component {


    render() {
        const {classes} = this.props;
        return (
                <div>
                    <Helmet>
                        <title>Контакты iMetr.by</title>
                        <meta name='description' content="По вопросам рекламы и сотрудничества пишите на наш E-mail - info@imetr.by" />
                    </Helmet>
                    <main>
                        <section className={classes.crumbsBg}>
                            <Grid container spacing={24} className={classes.root}>
                                <Grid item xs={12}>
                                    <Typography type="subheading" component={"h1"} className={classes.subHead}>
                                        О проекте iMetr.by
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
                                                Контакты
                                            </Typography>
                                        </li>
                                    </ul>
                                </Grid>
                            </Grid>
                        </section>
                        <SectionContactsNavigationComp/>
                        <SectionBottomLinksComp/>
                    </main>
                </div>
        );
    };
};

export default withStyles(styles)(Contacts);