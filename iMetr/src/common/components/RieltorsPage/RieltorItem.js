import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import classNames from 'classnames';
import Divider from 'material-ui/Divider';

//components
import MetrIcon from '../../../common/components/Icon';

//images
import rieltorFoto from './assets/images/RieltorFoto.png';
import agency from './assets/images/agLogo.png';

const styles = theme => ({
    root: theme.root,
    agencyLogo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 !important',
        '& div': {
            width:100,
            height:100,
            borderRadius:100,
        },
    },
    itemSlDesc: {
        textTransform:'none',
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
    },
    message: {
        marginRight:20,
        '&:before': {
            content: `'\\e920'`,
        }
    },
    agencyObjects: {
        fontFamily: `'Exo 2'`,
        fontSize: 14,
        '& a': {
            textDecoration:'none',
            color: '#519be2',
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
        },
    },
    itemlDesc: {
        color: '#9299a2',
        display: 'flex',
        margin: '7px 0 0px 0',
        fontSize: 12,
        '& span': {
            marginLeft:15,
            '&:first-child':{
                marginLeft: 0,
            },
        },
    },
    descr: {
        marginBottom:20,
        width:'90%',
        [theme.breakpoints.down('md')]: {
            width:'100%',
        },
    },
    textAlign: {
        textAlign:'right',
        [theme.breakpoints.down('md')]: {
            margin:[10,0],
            textAlign:'left',
        },
        '& > div': {
            marginTop:15,
        },
    },
});

class RieltorItem extends Component {

    render() {
        const {classes} = this.props;

        return (
            <Grid container spacing={0} className={classes.root}>
                <Grid item xs={12}>
                        <Grid container spacing={24} className={classes.root}>
                            <Grid item xs={12} sm={12} md={1} className={classes.agencyLogo}>
                                <div>
                                    <img src={rieltorFoto} alt={'iMetr'}/>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={11}>
                                <Grid container spacing={0} className={classes.root} align={'flex-start'}>
                                    <Grid item xs={12} sm={12} md={8}>
                                        <Typography component={"h1"} className={classes.itemSlDesc}>
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
                                            <span>6 лет и 5 мес. на iMetr copy </span>
                                            <span>АН: «Динас недвижимость»</span>
                                        </Typography>
                                        <Typography type="caption" component="p" className={classes.itemlDesc}>
                                                <span>Свидетельство об аттестации №: 1297</span>
                                                <span>Идентификационная карточка №: АВ0012496</span>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4} className={classes.textAlign}>
                                        <Link to="/" className={classNames(classes.callBack,classes.message)}>
                                            Сообщение
                                        </Link>
                                        <Link to="/" className={classes.callBack}>
                                            Перезвоните мне
                                        </Link>
                                        <div>
                                            <img src={agency} alt={'iMetr'}/>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12} className={classes.agencyObjects}>
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
                    <Divider light />
                </Grid>
            </Grid>

        )
    }
}
export default withStyles(styles)(RieltorItem);