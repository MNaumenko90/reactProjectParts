import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import {Link} from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import 'react-select/dist/react-select.css';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import moment from 'moment';
//components
import Share from './Share';

//images
import pageImage from './assets/images/pageImg.png';

const styles = theme => ({
    root: theme.root,
    contentAbout: {
        padding:'30px 0 50px 0',
    },
    pageTitle: {
        fontSize: 26,
        color: '#1b2833',
        lineHeight:'normal',
    },
    pageSubTitle: {
        marginBottom: 40,
        marginTop:20,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#9299a2',
        [theme.breakpoints.down('md')]: {
            flexDirection:'column',
        },
        '& > div': {
            display:'flex',
            alignItems:'center',
            [theme.breakpoints.down('md')]: {
                marginTop:10,
            },
            '& span': {
                marginRight:5,
            },
            '& > div': {
                marginLeft:10,
            },
        },
    },
    subTitle: {
        fontWeight:100,
        marginBottom: 14,
    },
    pageSmallHeading: {
        margin:'30px 0px 24px 0px',
        fontWeight:100,
        letterSpacing:'-0.1px',
    },
    pageText: {
        '& p' :{
            lineHeight: '24px',
            letterSpacing: 'normal',
            fontSize:16,
            fontWeight:300,
            marginBottom:26,
            fontFamily: `'Exo 2'`,
            '& a': {
                color:'#519be2',
                textDecoration:'none',
            },
        },
    },
    badgeTermin: {
        fontSize: 12,
        borderRadius: '12px 13px 13px 12px',
        border: '1px solid #b0b5b8',
        textTransform:'uppercase',
        width: 128,
        height: 25,
        textAlign: 'center',
        paddingTop: 4,
        transition: 'all .5s ease',
        marginBottom: 10,
        '&:hover': {
            color:'#fff',
            background:'#5b86e5',
            border: '1px solid #5b86e5',
            transition: 'all .5s ease',
        },
    },
    pageParts: {
        margin:'0px 0px 32px 0px',
        padding:0,
       '& li': {
           listStyle:'none',
           position:'relative',
           paddingLeft:40,
           lineHeight:'28px',
           '&:before': {
               content:`'\\e927'`,
               fontFamily: 'imetr',
               position:'absolute',
               display:'block',
               height:0,
               top: 2,
               left: 14,
               color:'#519be2',
               fontSize:14,
           },
           '& a': {
               color:'#519be2',
               fontFamily: `'Exo 2'`,
               fontSize:16,
               fontWeight:300,
           },
       },
    },
    pageAutor: {
        marginBottom:17,
        fontWeight:300,
        '& span': {
            color: '#9299a2',
        },
    },
    asideBlock: {
        padding:20,
        [theme.breakpoints.down('md')]: {
            marginTop:20,
        },
        '& div': {
            width: '100%',
            height: 500,
            backgroundColor: '#5b86e5',
            color:'#fff',
            textAlign: 'center',
            paddingTop: '240px',
        },
    },
    specialization: {
        display:'flex',
        marginTop:18,
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]: {
            flexDirection:'column',
        },
        '& ul': {
            margin:0,
            padding:0,
            '& li': {
                color: '#1b2833',
                fontFamily: `'Exo 2'`,
                listStyle:'none',
                position:'relative',
                paddingLeft:15,
                lineHeight:'22px',
                '&:before': {
                    position:'absolute',
                    content:'""',
                    background:'#5b86e5',
                    width:5,
                    height:5,
                    borderRadius:10,
                    top:9,
                    left:0,
                },
                '& a': {
                    fontSize: 16,
                    color: '#519be2',
                    textDecoration:'none',
                    fontWeight:300,
                },
            },
        },
    },
});

class SectionWikiPage extends Component {

    render() {
        const {classes, oneTermin} = this.props;
        return (
            <section>
                {oneTermin ?
                <div className={classes.contentAbout}>
                    <Grid container spacing={24} className={classes.root} justify={"space-between"}>
                        <Grid item xs={12} sm={12} md={7}>
                            <Typography type="display2" component={"h1"} className={classes.pageTitle}>
                                {oneTermin ? oneTermin.title : ''}
                            </Typography>

                            <div className={classes.pageText} dangerouslySetInnerHTML={oneTermin && {__html: oneTermin.contentHTML}}/>

                            <Divider light />
                            <div className={classes.pageSubTitle}>
                                <div>
                                    <Typography type="caption" component={"span"} className={classes.badgeTermin}>
                                        недвижимость
                                    </Typography>
                                    <Typography type="caption" component={"span"} className={classes.badgeTermin}>
                                        Аналитика
                                    </Typography>
                                </div>
                                <div>
                                    <Typography type="caption" component={"span"}>
                                        Поделиться:
                                    </Typography>
                                    <Share/>
                                </div>
                            </div>
                            <Typography type="body2" component={"h2"} className={classes.pageSmallHeading}>
                                Похожие термины
                            </Typography>
                            <div className={classes.specialization}>
                                <ul>
                                    <li>
                                        <Link to="/">Спектр основных требований к складским помещениям</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Договор аренды нежилого помещения </Link>
                                    </li>
                                    <li>
                                        <Link to="/">Экспликация помещений</Link>
                                    </li>
                                    <li>
                                        <Link to="/"> Как приватизировать земельный участок</Link>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <Link to="/">Спектр основных требований к складским помещениям</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Договор аренды нежилого помещения </Link>
                                    </li>
                                    <li>
                                        <Link to="/">Экспликация помещений</Link>
                                    </li>
                                    <li>
                                        <Link to="/"> Как приватизировать земельный участок</Link>
                                    </li>
                                </ul>
                            </div>

                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Typography type="body2">
                                <Paper className={classes.asideBlock}>
                                    <div>350х500</div>
                                </Paper>
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
                : null}
            </section>
        );
    };
};

export default withStyles(styles)(SectionWikiPage);