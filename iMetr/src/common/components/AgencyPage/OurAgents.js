import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import classNames from 'classnames';
//components
import RieltorFoto from '../Rieltors/assets/images/RieltorFoto.png';
import MetrIcon from '../../../common/components/Icon';


const styles = theme => ({
    root: theme.root,
    pageTitle: {
        fontSize: 18,
    },
    pageLink: {
        color: '#519be2',
        textDecoration:'none',
        fontFamily: `'Exo 2'`,
    },
    agencyBox: {
        display:'flex',
        marginBottom:'30px',
        justifyContent:'flex-start',
        minHeight:'114px',
        [theme.breakpoints.down('md')]: {
            marginBottom: 0,
        },
        [theme.breakpoints.down('xs')]: {
           flexDirection: 'column',
            alignItems: 'center',
            padding: [10,0],
        },
    },
    mediaBoxCol: {
        backgroundRepeat:'no-repeat',
        flex:'0 0 auto',
        width:'27%',
        [theme.breakpoints.down('md')]: {
            width:'24%',
        }
    },
    mediaBox7: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 !important',
        '& div': {
            width:70,
            height:70,
            borderRadius:100,
        },
    },
    descrBox: {
        padding:'15px 0',
        flex:'0 0 50%',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '13px',
            flex:'1 0 50%',
        },
    },
    rate: {
        marginTop:'12px',
        '& a.is-active': {
            color:'#ffe26f',
        },
        '& > span': {
            color:'#9299a2',
            display:'inline-block',
            marginLeft: '10px',
        },
    },
    rateRight: {
        textAlign:'right',
        paddingRight:'14px',
    },
    itemlDesc: {
        color: '#9299a2',
        display:'block',
        margin: '7px 0 10px 0',
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
});

class OurAgents extends Component {

    render() {

        const {classes} = this.props;

        return (
            <div>
            <Grid container spacing={24} className={classes.root}>
                <Grid item xs={12} sm={12} md={2}>
                    <Typography type="body1" component={"h3"} className={classes.pageTitle}>
                        Наши специалисты
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={10}>
                    <Link to="/" className={classes.pageLink}>Смотреть всех 25 специалистов</Link>
                </Grid>
            </Grid>
            <Grid container spacing={24} className={classes.root}>
                <Grid item xs={12} sm={12} md={4}>
                    <Paper className={classes.agencyBox}>
                        <div className={classNames(classes.mediaBoxCol,classes.mediaBox7)}>
                            <div>
                                <img src={RieltorFoto} alt={'iMetr'}/>
                            </div>
                        </div>
                        <div className={classes.descrBox}>
                            <Typography component={"span"} className={classes.itemSlDesc}>
                                Роман Мамлин
                                <MetrIcon>medal2</MetrIcon>
                            </Typography>
                            <Typography type="caption" component="p" className={classes.itemlDesc}>
                                6 лет и 5 мес. на iMetr
                            </Typography>
                            <Link to="/" className={classes.pageLink}>150 объектов</Link>
                        </div>
                        <div className={classNames(classes.rate,classes.rateRight)}>
                            <Rater
                                total={5}
                                rating={4}
                                interactive={false}
                            />
                            <Typography type="caption" component="span">4 из 5</Typography>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Paper className={classes.agencyBox}>
                        <div className={classNames(classes.mediaBoxCol,classes.mediaBox7)}>
                            <div>
                                <img src={RieltorFoto} alt={'iMetr'}/>
                            </div>
                        </div>
                        <div className={classes.descrBox}>
                            <Typography component={"span"} className={classes.itemSlDesc}>
                                Роман Мамлин
                                <MetrIcon>medal2</MetrIcon>
                            </Typography>
                            <Typography type="caption" component="p" className={classes.itemlDesc}>
                                6 лет и 5 мес. на iMetr
                            </Typography>
                            <Link to="/" className={classes.pageLink}>150 объектов</Link>
                        </div>
                        <div className={classNames(classes.rate,classes.rateRight)}>
                            <Rater
                                total={5}
                                rating={4}
                                interactive={false}
                            />
                            <Typography type="caption" component="span">4 из 5</Typography>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Paper className={classes.agencyBox}>
                        <div className={classNames(classes.mediaBoxCol,classes.mediaBox7)}>
                            <div>
                                <img src={RieltorFoto} alt={'iMetr'}/>
                            </div>
                        </div>
                        <div className={classes.descrBox}>
                            <Typography component={"span"} className={classes.itemSlDesc}>
                                Роман Мамлин
                                <MetrIcon>medal2</MetrIcon>
                            </Typography>
                            <Typography type="caption" component="p" className={classes.itemlDesc}>
                                6 лет и 5 мес. на iMetr
                            </Typography>
                            <Link to="/" className={classes.pageLink}>150 объектов</Link>
                        </div>
                        <div className={classNames(classes.rate,classes.rateRight)}>
                            <Rater
                                total={5}
                                rating={4}
                                interactive={false}
                            />
                            <Typography type="caption" component="span">4 из 5</Typography>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
            </div>
        );
    };
}

export default withStyles(styles)(OurAgents);
