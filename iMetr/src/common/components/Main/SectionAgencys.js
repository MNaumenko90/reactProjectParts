import React, {Component} from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import logoAg from './assets/images/logoAg.png';
import fotoAg from './assets/images/fotoAgent.png';
import Typography from 'material-ui/Typography';
import classNames from 'classnames';
import Button from 'material-ui/Button';
import MetrIcon from '../Icon';
import Input from 'material-ui/Input';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router-dom';



const styles = theme => ({
    greyBg: theme.greyBg,
    root: {
        margin: '0 auto',
        maxWidth: '1200px',
        width: '100%',
        '& > div': {
            '@media (max-width: 768px)': {
            margin: '0 auto',
            },
        },
    },
    inputWrap: {
        position:'relative',
    },
    inputSingleline: {
        padding: '10px 50px',
    },
    input: {
        position:'relative',
        marginTop:'22px',
        marginBottom:'30px',
        width: '100%',
        backgroundColor:'#fff',
        border:'1px solid #e1e1e1',
        borderRadius: 3,
        '&:before': {
            content:`'\\e936'`,
            fontFamily: 'imetr',
            position:'absolute',
            display:'block',
            height:0,
            top: '15px',
            left: '22px',
        }
    },
    inputButton: {
        verticalAlign:'middle',
        position:'absolute',
        top:'23px',
        right:0,
    },

    inputIcon: {
        color:'#5b86e5',
        fontSize:25,
    },
    agencyBox: {
        display:'flex',
        marginBottom:'30px',
        justifyContent:'flex-start',
        minHeight:'120px',
        '&:hover':{
            cursor: 'pointer',
        },
        '& p': {
            fontSize: 16,
            fontWeight: 700,
        },
    },
    descrTitle: {
        fontWeight: '300 !important',
        color: '#9299a2',
        fontSize: '14px !important',
    },
    mediaBoxCol: {
        backgroundRepeat:'no-repeat',
        flex:'0 0 auto',
        width:'27%',
        [theme.breakpoints.down('md')]: {
            width:'24%',
        }
    },
    mediaBox: {
        backgroundImage: `url(${logoAg})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'37px 50px',
        flex:'0 0 50%',
    },
    mediaBox2: {
        backgroundPosition:'37px -68px',
    },
    mediaBox3: {
        backgroundPosition:'37px -179px',
    },
    mediaBox7: {
        backgroundImage: `url(${fotoAg})`,
        backgroundPosition:'20px 23px',
    },
    descrBox: {
        padding:'20px 0',
        flex:'0 0 50%',
        '@media (orientation: landscape) and (max-width: 1024px)': {
            padding:'10px 0',
        },
        '@media (orientation: portrait) and (max-width: 1366px)': {
            padding:'10px 0',
        },
        '@media (orientation: portrait) and (max-width: 768px)': {
            padding: '20px 0 0 10px',
        },
        [theme.breakpoints.down('xs')]: {
            marginLeft: '13px',
        },
        '& small': {
            fontSize: '12px',
            fontWeight: '300',
            color: '#9299a2',
            marginBottom: 13,
        },
    },
    rate: {
        marginTop:'12px',
        '& a.is-active': {
            color:'#ffe26f',
        },
        '& a': {
            fontSize: 23,
        },
        '& > span': {
            color:'#9299a2',
            display:'inline-block',
            marginLeft: '10px',
        },
    },
    rateRight: {
        textAlign:'right',
        paddingRight:'10px',
        '& a': {
            fontSize: 16,
        },
        '@media (orientation: portrait) and (max-width: 768px)': {
            padding: '10px',
        },
    },
    quidel: {
        background: 'none',
        border: '1px solid #b0b5b8',
        overflow: 'hidden',
        transition: 'color 0.3s',
        position: 'relative',
        zIndex: 1,
        boxShadow:'none',
        textTransform: 'none',
        borderRadius: 3,
        transitionTimingFunction: 'cubic-bezier(0.75, 0, 0.125, 1)',
        display: 'block',
        margin: '0 auto',
        padding: '0px !important',
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
        '& a': {
            textDecoration:'none',
            color:'#1b2833',
            display: 'block',
            height: 38,
            padding: '8px 16px 0 16px',
        },
    },
    colTitle: {
        fontWeight: 100,
        marginBottom:18,
    },
});

class SectionAgencysComp extends Component {

    render() {
        const {classes} = this.props;
        return (
                <section className={classNames(classes.greyBg)}>
                    <Typography type="display1" align={'center'} component={"h2"}>
                        Агентства и застройщики
                    </Typography>
                    <Grid container spacing={0} className={classes.root} justify={'center'}>
                        <Grid item xs={12} sm={8}>
                            <div className={classes.inputWrap}>
                                <Input
                                    placeholder="Введите название агентства или застройщика"
                                    className={classes.input}
                                    inputProps={{
                                        'aria-label': 'Description',
                                    }}
                                    classes={{
                                        inputSingleline: classes.inputSingleline,
                                    }}
                                />
                                <Button dense className={classNames(classes.button,classes.inputButton)}>
                                    <MetrIcon className={classes.inputIcon}>next</MetrIcon>
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={24} className={classes.root} style={{}}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Typography type="body2" align={'center'} component="p" className={classes.colTitle}>
                                Агентства недвижимости
                            </Typography>
                            <Paper className={classes.agencyBox} onClick={this.props.goAgency}>
                                <div className={classes.mediaBox}>
                                </div>
                                <div className={classes.descrBox}>
                                    <Typography type="caption" component="p">
                                        Твоя столица
                                    </Typography>
                                    <Typography type="caption" component="p" className={classes.descrTitle}>
                                        137 предложений
                                    </Typography>
                                    <div className={classes.rate}>
                                        <Rater
                                            total={5}
                                            rating={4}
                                            interactive={false}
                                        />
                                        <Typography type="caption" component="span">4 из 5</Typography>
                                    </div>
                                </div>
                            </Paper>
                            <Paper className={classes.agencyBox} onClick={this.props.goAgency}>
                                <div className={classNames(classes.mediaBox,classes.mediaBox2)}>
                                </div>
                                <div className={classes.descrBox}>
                                    <Typography type="caption" component="p">
                                        Твоя столица
                                    </Typography>
                                    <Typography type="caption" component="p" className={classes.descrTitle}>
                                        137 предложений
                                    </Typography>
                                    <div className={classes.rate}>
                                        <Rater
                                            total={5}
                                            rating={4}
                                            interactive={false}
                                        />
                                        <Typography type="caption" component="span">4 из 5</Typography>
                                    </div>
                                </div>
                            </Paper>
                            <Paper className={classes.agencyBox} onClick={this.props.goAgency}>
                                <div className={classNames(classes.mediaBox,classes.mediaBox3)}>
                                </div>
                                <div className={classes.descrBox}>
                                    <Typography type="caption" component="p">
                                        Твоя столица
                                    </Typography>
                                    <Typography type="caption" component="p" className={classes.descrTitle}>
                                        137 предложений
                                    </Typography>
                                    <div className={classes.rate}>
                                        <Rater
                                            total={5}
                                            rating={4}
                                            interactive={false}
                                        />
                                        <Typography type="caption" component="span">4 из 5</Typography>
                                    </div>
                                </div>
                            </Paper>
                            <Button raised className={classNames(classes.button,classes.quidel)}>
                                <Link to="/ListingAgency">
                                    Все агентства
                                </Link>
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Typography type="body2" align={'center'} component="p" className={classes.colTitle}>
                                Застройщики
                            </Typography>
                            <Paper className={classes.agencyBox} onClick={this.props.goDeveloper}>
                                <div className={classes.mediaBox}>
                                </div>
                                <div className={classes.descrBox}>
                                    <Typography type="caption" component="p">
                                        Твоя столица
                                    </Typography>
                                    <Typography type="caption" component="p" className={classes.descrTitle}>
                                        137 предложений
                                    </Typography>
                                    <div className={classes.rate}>
                                        <Rater
                                            total={5}
                                            rating={4}
                                            interactive={false}
                                        />
                                        <Typography type="caption" component="span">4 из 5</Typography>
                                    </div>
                                </div>
                            </Paper>
                            <Paper className={classes.agencyBox} onClick={this.props.goDeveloper}>
                                <div className={classNames(classes.mediaBox,classes.mediaBox2)}>
                                </div>
                                <div className={classes.descrBox}>
                                    <Typography type="caption" component="p">
                                        Твоя столица
                                    </Typography>
                                    <Typography type="caption" component="p" className={classes.descrTitle}>
                                        137 предложений
                                    </Typography>
                                    <div className={classes.rate}>
                                        <Rater
                                            total={5}
                                            rating={4}
                                            interactive={false}
                                        />
                                        <Typography type="caption" component="span">4 из 5</Typography>
                                    </div>
                                </div>
                            </Paper>
                            <Paper className={classes.agencyBox} onClick={this.props.goDeveloper}>
                                <div className={classNames(classes.mediaBox,classes.mediaBox3)}>
                                </div>
                                <div className={classes.descrBox}>
                                    <Typography type="caption" component="p">
                                        Твоя столица
                                    </Typography>
                                    <Typography type="caption" component="p" className={classes.descrTitle}>
                                        137 предложений
                                    </Typography>
                                    <div className={classes.rate}>
                                        <Rater
                                            total={5}
                                            rating={4}
                                            interactive={false}
                                        />
                                        <Typography type="caption" component="span">4 из 5</Typography>
                                    </div>
                                </div>
                            </Paper>
                            <Button raised className={classNames(classes.button,classes.quidel)}>
                                <Link to="/Developers">
                                    Все застройщики
                                </Link>
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Typography type="body2" align={'center'} component="p" className={classes.colTitle}>
                                Риэлтеры и агенты
                            </Typography>
                            <Paper className={classes.agencyBox} onClick={this.props.goRieltor}>
                                <div className={classNames(classes.mediaBoxCol, classes.mediaBox7)}>
                                </div>
                                <div className={classes.descrBox}>
                                    <Typography type="caption" component="p">
                                        Евгений Мальгин
                                    </Typography>
                                    <Typography component="small">
                                        АН “Твоя столица”
                                    </Typography>
                                    <Typography type="caption" component="p" className={classes.descrTitle}>
                                        137 квартир в 1 ЖК
                                    </Typography>
                                </div>
                                <div className={classNames(classes.rate, classes.rateRight)}>
                                    <Rater
                                        total={5}
                                        rating={4}
                                        interactive={false}
                                    />
                                    <Typography type="caption" component="span">4 из 5</Typography>
                                </div>
                            </Paper>
                            <Paper className={classes.agencyBox} onClick={this.props.goRieltor}>
                                <div className={classNames(classes.mediaBoxCol,classes.mediaBox7)}>
                                </div>
                                <div className={classes.descrBox}>
                                    <Typography type="caption" component="p">
                                        Евгений Мальгин
                                    </Typography>
                                    <Typography component="small">
                                        АН “Твоя столица”
                                    </Typography>
                                    <Typography type="caption" component="p" className={classes.descrTitle}>
                                        137 квартир в 1 ЖК
                                    </Typography>
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
                            <Paper className={classes.agencyBox} onClick={this.props.goRieltor}>
                                <div className={classNames(classes.mediaBoxCol,classes.mediaBox7)}>
                                </div>
                                <div className={classes.descrBox}>
                                    <Typography type="caption" component="p">
                                        Евгений Мальгин
                                    </Typography>
                                    <Typography component="small">
                                        АН “Твоя столица”
                                    </Typography>
                                    <Typography type="caption" component="p" className={classes.descrTitle}>
                                        137 квартир в 1 ЖК
                                    </Typography>
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
                            <Button raised className={classNames(classes.button,classes.quidel)}>
                                <Link to="/Rieltors">
                                    Риэлтеры и агенты
                                </Link>
                            </Button>
                        </Grid>
                    </Grid>
                </section>
        );
    };
};

export default withStyles(styles)(SectionAgencysComp);


