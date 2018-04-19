import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import classNames from 'classnames';

//components
import MetrIcon from '../../../common/components/Icon';

//images
import RieltorFoto from './assets/images/RieltorFoto.png';
import AgencyLogo from './assets/images/agencyLogo.png';

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
        justifyContent: 'center',
        padding: '0 !important',
        [theme.breakpoints.down('md')]: {
            marginTop: 10,
            '@media (orientation: portrait) and (max-width: 768px)': {
                marginTop: 0,
            },
        },
        '& div': {
            width:100,
            height:100,
            borderRadius:100,
        },
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
        marginRight:8,
        '&:before': {
            content: `'\\e920'`,
        }
    },
    agencyObjects: {
        fontFamily: `'Exo 2'`,
        fontSize: 14,
        lineHeight: 1.5,
        '& a': {
            textDecoration:'none',
            color: '#9299a2',
            paddingRight:10,
            position:'relative',
            display:'inline-block',
            marginRight:5,
            '&:after': {
                content:'""',
                position:'absolute',
                display:'block',
                zIndex:1,
                top:7,
                right:0,
                width: 5,
                height: 5,
                background:'#d7d7d7',
                borderRadius:10,
            },
            '&:last-child': {
                paddingRight:0,
                '&:after': {
                    display:'none',
                },
            },
            '&:hover': {
                color: '#519be2',
            },
        },
    },
    itemlDesc: {
        color: '#9299a2',
        display:'block',
        margin: '7px 0 20px 0',
    },
    descr: {
        fontWeight:300,
        marginBottom:20,
        width:'90%',
        lineHeight: 1.5,
        [theme.breakpoints.down('md')]: {
            width:'100%',
        },
        '@media (orientation: portrait) and (max-width: 768px)': {
            margin:'10px auto',
        },
    },
});

class AllRieltorsComp extends Component {
    handleRedirect = () => (event) => {
        if (event.target.nodeName !== 'BUTTON' && event.target.nodeName !== 'A') {
            window.location.replace('/Rieltors/RieltorsPage');
        }
    };

    render() {
        const {classes} = this.props;

        return (
            <Grid container spacing={24} className={classes.root}>
                <Grid item xs={12}>
                    <Paper elevation={4} className={classes.paper} onClick={this.handleRedirect()}>
                        <Grid container spacing={40} className={classes.root}>
                            <Grid item xs={12} sm={2} md={2} className={classes.agencyLogo}>
                                <div>
                                    <img src={RieltorFoto} alt={'iMetr'}/>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={10} md={10}>
                                <Grid container spacing={0} className={classes.root} align={'flex-start'}>
                                    <Grid item xs={12} sm={12} md={9}>
                                        <Typography component={"span"} className={classes.itemSlDesc}>
                                            Роман Мамлин
                                            <MetrIcon>medal2</MetrIcon>
                                        </Typography>
                                        <div className={classes.rate}>
                                            <Rater
                                                total={5}
                                                rating={4}
                                                interactive={false}
                                            />
                                            <Typography type="caption" component="span">4.2</Typography>
                                        </div>
                                        <Typography type="caption" component="p" className={classes.itemlDesc}>
                                            6 лет и 5 мес. на iMetr АН «Твоя столица»
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3}>
                                        <Link to="/" className={classNames(classes.callBack,classes.message)}>
                                            Сообщение
                                        </Link>
                                        <Link to="/" className={classes.callBack}>
                                            Перезвоните мне
                                        </Link>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={10}>
                                        <Typography type="caption" component={"p"} className={classes.descr}>
                                            Аренда недвижимости: коммерческая, загородная.
                                            Продажа недвижимости: коммерческая, жилая, загородная. 
                                            Другие услуги: консультации, управление объектами.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={2}>
                                        <img src={AgencyLogo} alt={'iMetr'}/>
                                    </Grid>
                                    <Grid item xs={12} className={classes.agencyObjects}>
                                        <Link to="/">Все объявления: 1306</Link>
                                        <Link to="/">Жилая: 992</Link>
                                        <Link to="/">Аренда: 3</Link>
                                        <Link to="/">Коммерческая: 133</Link>
                                        <Link to="/">Земля: 110</Link>
                                        <Link to="/">Дачи: 58</Link>
                                        <Link to="/">Гаражи: 9</Link>
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
export default withStyles(styles)(AllRieltorsComp);