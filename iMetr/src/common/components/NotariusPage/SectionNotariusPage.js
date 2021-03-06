import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import {Link} from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import 'react-select/dist/react-select.css';
import Paper from 'material-ui/Paper';
import classNames from 'classnames';
import Divider from 'material-ui/Divider';
//components
import Map from './Map';
//images
import social from './assets/images/social.png';
const styles = theme => ({
    root: theme.root,
    notariusItem:{
        padding:12
    },
    notariusItemTitle: {
        color: "#000",
        fontSize: 26,
        lineHeight:'35px',
        fontWeight: 300,
        paddingTop: 12,
    },
    subTitleofNotariusItem: {
        justifyContent: 'flex-start',
        marginBottom: '15px',
        color: '#9299a2',
        '& span':{
            color: '#9299a2',
            fontSize: 12,
        },
    },
    contentAbout: {
        padding:'0 0 50px 0',
        '& p':{
            fontWeight:300
        },
    },
    pageTitle: {
        color: '#1b2833',
        lineHeight:'normal',
        fontWeight:'100',
        fontSize: '24px'
    },
    contentBlock: {
        cursor:'pointer',
        '& div': {
            width: '100%',
        },
        boxShadow: 'none'
    },
    contentPart: {

        borderBottom:'1px solid #ebebeb',
        '&:last-child':{
            borderBottom:'none',
        },
        fontFamily: `'Exo 2'`,
        fontSize:16,
        lineHeight:'33px',
        '& span': {
            color: '#9299a2',
        },
        '& a': {
            color: '#519be2',
            textDecoration:'none',
        },
        '& p': {
            margin:0,
            '& span': {
                color: '#9299a2',
            },
        },
        '& $viewAllMenu': {
            textDecoration:'underline',
        },
    },
    workTime: {
        height:18,
        overflow: 'hidden',
        lineHeight:'22px',
        marginBottom:10,
    },
    viewAllMenu: {
        display:'inline-block',
        position:'relative',
        paddingRight:20,
        '&:after': {
            position:'absolute',
            content:'"⌄"',
            display:'block',
            top:0,
            right:0,
            zIndex:10,
            color: '#519be2',
        },
        '& span': {
            textDecoration: 'underline',
            color: '#519be2',
        },
    },
    mystyle: {
        '& $textHolder': {
            height: 'auto',
        },
        '& $workTime': {
            height: 'auto',
        },
        '& $viewAllMenu': {
            '&:after': {
                position:'absolute',
                content:'"⌄"',
                display:'block',
                transform: 'rotate(180deg)',
                top:4,
            },
        },
    },
    social: {
        float:'right',
        [theme.breakpoints.down('md')]: {
            float:'none',
            textAlign: 'center',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: 10,
        },
    },
    socItem: {
        display:'inline-block',
        width:'32px',
        height:'32px',
        marginRight:'3px',
        '&:last-child': {
            marginRight:'0px',
        },

    },
    socTw: {
        background: `url(${social}) no-repeat 0 0`,
    },
    socVk: {
        background: `url(${social}) no-repeat -35px 0`,
    },
    socFb: {
        background: `url(${social}) no-repeat -70px 0`,
    },
    socGl: {
        background: `url(${social}) no-repeat -106px 0`,
    },
    socOk: {
        background: `url(${social}) no-repeat -141px 0`,
    },
});

class SectionNotariatPage extends Component {

    handleOpenStanse(event) {
        event.preventDefault();
        let linkShow = event.target;
        if (linkShow.textContent === 'Свернуть') {
            linkShow.textContent = 'Показать все';
        } else {
            linkShow.textContent = 'Свернуть';
        }
        linkShow.parentNode.parentNode.parentNode.classList.toggle(this.props.classes.mystyle)
    };

    render() {
        const {classes} = this.props;
        return (
            <section>
                <div className={classes.contentAbout}>
                    <Grid container spacing={24} className={classes.root} justify={"space-between"}>
                        <Grid item xs={12} md={5} className={classes.notariusItem}>
                            <Typography className={classes.notariusItemTitle}>Вихор Зоя Викторовна</Typography>
                            <Typography type="caption" className={classes.subTitleofNotariusItem}>
                                Минский городской нотариальный округ
                            </Typography>
                            <Divider />
                            <Paper className={classes.contentBlock}>
                                <Grid container className={classNames(classes.root,classes.contentPart)} spacing={16}>
                                    <Grid item xs={12} sm={12} md={5}><span>Нотариат</span></Grid>
                                    <Grid item xs={12} sm={12} md={7}><Link to="/">Первая минская нотариальная контора</Link></Grid>
                                </Grid>
                                <Grid container className={classNames(classes.root,classes.contentPart)} spacing={16}>
                                    <Grid item xs={12} sm={12} md={5}><span>Адрес:</span></Grid>
                                    <Grid item xs={12} sm={12} md={7}><p>220029, г. Минск, ул. Красная,
                                        д. 5</p></Grid>
                                </Grid>
                                <Grid container className={classNames(classes.root,classes.contentPart)} spacing={16}>
                                    <Grid item xs={12} sm={12} md={5}><span>Время работы:</span></Grid>
                                    <Grid item xs={12} sm={12} md={7}>
                                        <div className={classes.workTime}>
                                            <p>с 9:00 до 20:00,
                                                <span> окрыто сегодня</span>
                                            </p>
                                            <p>
                                                <span>понедельник: </span>
                                                с 9:00 до 20:00
                                            </p>
                                            <p>
                                                <span>вторник: </span>
                                                с 9:00 до 20:00
                                            </p>
                                            <p>
                                                <span>среда: </span>
                                                с 9:00 до 20:00
                                            </p>
                                            <p>
                                                <span>четверг: </span>
                                                с 9:00 до 20:00
                                            </p>
                                            <p>
                                                <span>пятница: </span>
                                                с 9:00 до 20:00
                                            </p>
                                            <p>
                                                <span>суббота: </span>
                                                с 10:00 до 15:00
                                            </p>
                                            <p>
                                                <span>воскресенье: </span>
                                                выходной
                                            </p>
                                        </div>
                                        <Link to="/" className={classes.viewAllMenu} onClick={this.handleOpenStanse.bind(this)}>
                                            Показать все
                                        </Link>
                                    </Grid>
                                </Grid>
                                <Grid container className={classNames(classes.root,classes.contentPart)} spacing={16}>
                                    <Grid item xs={12} sm={12} md={5}><span>Телефоны:</span></Grid>
                                    <Grid item xs={12} sm={12} md={7}><p>+375 (17) 215-00-77</p><p>+375 (17) 215-00-77</p></Grid>
                                </Grid>
                                <Grid container className={classNames(classes.root, classes.contentPart)}
                                      spacing={16}>
                                    <Grid item xs={12} sm={12} md={5}><span>Для предварит. записи:</span></Grid>
                                    <Grid item xs={12} sm={12} md={7}><p>+375 (17) 215-00-77
                                    </p><p>+375 (17) 215-00-77
                                    </p></Grid>
                                </Grid>
                                <Grid container className={classNames(classes.root,classes.contentPart)} spacing={16}>
                                    <Grid item xs={12} sm={12} md={5}><span>Email:</span></Grid>
                                    <Grid item xs={12} sm={12} md={7}><Link to="/">minsk@t-s.by</Link></Grid>
                                </Grid>
                                <Grid container className={classNames(classes.root, classes.contentPart)}
                                      spacing={16}>
                                    <Grid item xs={12} sm={12} md={5}><span>Поделиться:</span></Grid>
                                    <Grid item xs={12} sm={12} md={7}>
                                        <div className={classes.social}>
                                            <a href="#" className={classNames(classes.socItem,classes.socTw)}></a>
                                            <a href="#" className={classNames(classes.socItem,classes.socVk)}></a>
                                            <a href="#" className={classNames(classes.socItem,classes.socFb)}></a>
                                            <a href="#" className={classNames(classes.socItem,classes.socGl)}></a>
                                            <a href="#" className={classNames(classes.socItem,classes.socOk)}></a>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Map/>
                    </Grid>
                </div>
            </section>
        );
    };
};


export default withStyles(styles)(SectionNotariatPage);