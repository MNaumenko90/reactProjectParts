import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import Button from 'material-ui/Button';
import classNames from 'classnames';

//components
import MetrIcon from '../../../common/components/Icon';

//images
import DevLogo from './assets/images/devLogo.png';
import BuildItem1 from './assets/images/build1.png';
import BuildItem2 from './assets/images/build2.png';

const styles = theme => ({
    root: theme.root,

    paper: {
        marginBottom:20,
        cursor:'pointer',
        transition: 'all .5s ease',
        '&:hover': {
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
            transition: 'all .5s ease',
        },
    },
    agencyLogo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',
        borderRight:'1px #e1e1e1 solid',
        padding:20,
    },
    itemSlDesc: {
        textTransform:'none',
        fontWeight: 400,
        fontSize:18,
        display:'inline-block',
        '& span': {
            color:'#61a914',
            marginLeft:6,
        },
    },
    rate: {
        display:'inline-block',
        marginLeft:29,
        [theme.breakpoints.down('md')]: {
            marginTop:'10px',
        },
        '& a.is-active': {
            color:'#ffe26f',
        },
        '& > span': {
            color:'#9299a2',
            display:'inline-block',
            marginLeft: '10px',
        },
    },
    callBack: {
        fontFamily: `'Exo 2'`,
        fontSize: 14,
        color: '#519be2',
        position:'relative',
        paddingLeft: 20,
        display:'inline-block',
        '&:before': {
            content:`'\\e905'`,
            fontFamily: 'imetr',
            position:'absolute',
            display:'block',
            zIndex:5,
            top:0,
            left:0,
        },
        [theme.breakpoints.down('sm')]: {
            margin:'10px',
        },
    },
    message: {
        marginRight:9,
        '&:before': {
            content: `'\\e920'`,
        }
    },
    agencyObjects: {
        fontFamily: `'Exo 2'`,
        fontSize: 14,
        marginBottom:20,
        display:'inline-block',
        '& a': {
            textDecoration:'none',
            color: '#9299a2',
            paddingRight:10,
            position:'relative',
            display:'block',
            marginBottom:7,
            '&:hover': {
                color: '#519be2',
            },
        },
    },
    itemlDesc: {
        color: '#9299a2',
        display:'block',
        margin: '7px 0 15px 0',
    },
    descr: {
        fontWeight:300,
        marginBottom:20,
        width:'90%',
        [theme.breakpoints.down('md')]: {
            width:'100%',
        },
    },
    itemLink: {
        background:'#5fb96e',
        padding:'12px !important',
        color:'#fff',
        transition: 'all .5s ease',
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
        },
        '&:hover': {
            background:'#4c9c59',
            transition: 'all .5s ease',
            '& > a': {
                opacity: 1,
                transition: 'all .5s ease',
            },
        },
        '& > span': {
            fontSize: 16,
            [theme.breakpoints.down('sm')]: {
                marginBottom: 5,
            },
        },
        '& > a': {
            fontFamily: `'Exo 2'`,
            fontSize: 14,
            color:'#fff',
            opacity: 0.5,
            textDecoration:'none',
            transition: 'all .5s ease',
            paddingRight:10,
            position:'relative',
            '&:after': {
                position:'absolute',
                content:'"⌄"',
                display:'block',
                top:'-3px',
                right:0,
                zIndex:10,
                color: '#fff',
                transform: 'rotate(270deg)',
                fontSize: 21,
                [theme.breakpoints.down('sm')]: {
                    right: '75%',
                },
            },
        },
    },
    chip: {
        borderRadius: 3,
        backgroundColor: '#ebebeb',
        padding:'5px 8px',
        color:'#9299a2 !important',
        textTransform:'uppercase',
        fontWeight:'bold',
        fontFamily: `'Exo 2'`,
        fontSize: 12,
    },
    buildPrevBlock:{
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
           flexDirection: 'column',
        },
    },
    buildPrev: {
        height: 175,
        background:'rgba(0,0,0,.8);',
        display: 'inline-block',
        borderRadius:3,
        maxWidth:175,
        position:'relative',
        marginRight:15,
        [theme.breakpoints.down('sm')]: {
            marginRight: 0,
            marginBottom:17,
        },
        '& > img': {
            height:'100%',
            width:'100%',
        },
    },
    imgDescr: {
        color:'#fff',
        position:'absolute',
        height:'100%',
        width:'100%',
        left:0,
        top:0,
        textAlign:'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        '& p': {
            color:'#fff',
            lineHeight:'27px',
            marginTop:38,
        },
        '& span': {
            color:'#fff',
            opacity: 0.5,
            fontSize:12,
            marginBottom:14,
        },
    },
    button: {
        textTransform: 'none',
        display: 'inline-block',
        border: '1px solid #b0b5b8',
        background: 'none',
        position: 'relative',
        zIndex: 1,
        boxShadow:'none',
        borderRadius: 3,
        minWidth: '62px',
        minHeight: '179px',
        padding: '11px 23px',
        [theme.breakpoints.down('sm')]: {
            minWidth: 175,
            minHeight: 85,
        },
        '& .icon': {
            display: 'block',
            fontSize:30,
            marginBottom:10,
        },
    },
    quidel: {
        background: '#b0b5b8',
        overflow: 'hidden',
        transition: 'color 0.3s',
        transitionTimingFunction: 'cubic-bezier(0.75, 0, 0.125, 1)',
        '&:after': {
            content: '""',
            position: 'absolute',
            zIndex: -1,
            top: '1px',
            left: '1px',
            right: '1px',
            bottom: '1px',
            background: '#fff',
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            zIndex: -1,
            background: '#1b2833',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            transform: 'translate3d(0, 100%, 0)',
            transition: 'transform 0.3s',
            transitionTimingFunction: 'cubic-bezier(0.75, 0, 0.125, 1)',
        },
        '&:hover': {
            '&:before': {
                transform: 'translate3d(0, 0, 0)',
            },
        },
    },
});

class AllDevelopersComp extends Component {
    handleRedirect = () => (event) => {
        if (event.target.nodeName !== 'BUTTON' && event.target.nodeName !== 'A') {
            window.location.replace('/Developers/DeveloperPage');
        }
    };

    render() {
        const {classes} = this.props;

        return (
            <Grid container spacing={24} className={classes.root}>
                <Grid item xs={12}>
                    <Paper elevation={4} className={classes.paper} onClick={this.handleRedirect()}>
                        <Grid container spacing={0} className={classes.root}>
                            <Grid item xs={12} sm={12} md={3} className={classes.agencyLogo}>
                                    <img src={DevLogo} alt={'iMetr'}/>
                                    <div className={classes.rate}>
                                        <Rater
                                            total={5}
                                            rating={4}
                                            interactive={false}
                                        />
                                        <Typography type="caption" component="span">4.2</Typography>
                                    </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={9}>
                                <Grid container spacing={40} className={classes.root} align={'flex-start'}>
                                    <Grid item xs={12} sm={5} md={5}>
                                        <Typography component={"span"} className={classes.itemSlDesc}>
                                            А-100 девелопмен
                                            <MetrIcon>medal2</MetrIcon>
                                            <span className={classes.chip}>pro</span>
                                            <span className={classes.chip}>стб</span>
                                        </Typography>
                                        <Typography type="caption" component="p" className={classes.itemlDesc}>
                                            Дата основания: 2011 г.
                                        </Typography>
                                        <div className={classes.agencyObjects}>
                                            <Link to="/">Все объявления: 1306</Link>
                                            <Link to="/">Сдано: 992 домов 3 ЖК </Link>
                                            <Link to="/">Строится: 3 дома 1 ЖК</Link>
                                        </div>
                                        <div>
                                            <Link to="/" className={classNames(classes.callBack,classes.message)}>
                                                Сообщение
                                            </Link>
                                            <Link to="/" className={classes.callBack}>
                                                Перезвоните мне
                                            </Link>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} sm={7} md={7} className={classes.buildPrevBlock}>
                                        <div className={classes.buildPrev}>
                                            <img src={BuildItem1} alt={'iMetr'}/>
                                            <div className={classes.imgDescr}>
                                                <Typography component="p">ЖК<br/>  «Грушевский <br/> посад»</Typography>
                                                <Typography component="span">50 квартир</Typography>
                                            </div>
                                        </div>
                                        <div className={classes.buildPrev}>
                                            <img src={BuildItem2} alt={'iMetr'}/>
                                            <div className={classes.imgDescr}>
                                                <Typography component="p">ЖК «Пирс»</Typography>
                                                <Typography component="span">153 квартиры</Typography>
                                            </div>
                                        </div>
                                        <Button raised className={classNames(classes.button,classes.quidel)}>
                                            <MetrIcon>buildings</MetrIcon>+21
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} className={classes.itemLink}>
                                        <Typography type="caption" component="span">Действующие акции: 3 шт.</Typography>
                                        <Link to="/">Подробнее</Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>

        )
    }
}
export default withStyles(styles)(AllDevelopersComp);