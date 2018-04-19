import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import {Link} from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import 'react-select/dist/react-select.css';
import Paper from 'material-ui/Paper';
import classNames from 'classnames';
//components

//images
import social from './assets/images/social.png';

const styles = theme => ({
    root: theme.root,
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
    asideBlock: {
        marginTop: -12,
        cursor:'pointer',
        '& div': {
            width: '100%',
        },
        boxShadow: 'none'
    },
    asidePart: {
        borderBottom:'1px solid #ebebeb',
        '&:last-child':{
            borderBottom:'none',
        },
        fontFamily: `'Exo 2'`,
        fontSize:16,
        '& span': {
            color: '#9299a2',
            fontWeight: 100,
            fontSize:14
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
    receptionTime: {
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
    workTimeOpen: {
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
    receptionTimeOpen: {
        '& $textHolder': {
            height: 'auto',
        },
        '& $receptionTime': {
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
    reception:{
        backgroundColor: '#f3f5f6',
        minHeight:80,
        padding: '15px 0 4px 17px',
        marginBottom: '20px'
    },
    receptionTitle:{
        fontSize:18,
        fontWeight: 700,
        lineHeight:'26px'
    },
    receptionContent:{
        fontSize: 16,
        fontWeight: 300,
    }
});

class SectionZhesPage extends Component {

    handleOpenWorkTime(event) {
        event.preventDefault();
        let linkShow = event.target;
        if (linkShow.textContent === 'Свернуть') {
            linkShow.textContent = 'Показать все';
        } else {
            linkShow.textContent = 'Свернуть';
        }
        linkShow.parentNode.parentNode.parentNode.classList.toggle(this.props.classes.workTimeOpen)
    };

    handleOpenReceptionTime(event) {
        event.preventDefault();
        let linkShow = event.target;
        if (linkShow.textContent === 'Свернуть') {
            linkShow.textContent = 'Показать все';
        } else {
            linkShow.textContent = 'Свернуть';
        }
        linkShow.parentNode.parentNode.parentNode.classList.toggle(this.props.classes.receptionTimeOpen)
    };

    render() {
        const {classes} = this.props;
        return (
            <section>
                <div className={classes.contentAbout}>
                    <Grid container spacing={24} className={classes.root} justify={"space-between"}>
                        <Grid item xs={12} sm={12} md={7}>
                            <div className={classNames(classes.reception, classes.root)}>
                            <Typography type="body2" component={"h2"}  className={classes.receptionTitle}>
                                Время приема по личным вопросам начальником РСЦ:
                            </Typography>
                            <Typography type="body2" component={"h2"}  className={classes.receptionContent}>
                                среда с 15:00 до 20:00, 1-я суббота месяца с 09:00 до 12:00
                            </Typography>
                            </div>
                            <Typography type="body2" component={"h2"}  className={classes.pageTitle}>
                                Список нотариусов
                            </Typography>
                            <Grid container className={classNames(classes.root,classes.asidePart)} spacing={16}>
                                <Grid item xs={12} sm={12} md={5}><span>ДОЛЖНОСТЬ</span></Grid>
                                <Grid item xs={12} sm={12} md={5}><span>ФИО</span></Grid>
                                <Grid item xs={12} sm={12} md={2}><span>ТЕЛЕФОН</span></Grid>
                            </Grid>
                            <Grid container className={classNames(classes.root,classes.asidePart)} spacing={16}>
                                <Grid item xs={12} sm={12} md={5}><b>Начальник</b></Grid>
                                <Grid item xs={12} sm={12} md={5}><p>Ермолаев Леонид Владимирович</p></Grid>
                                <Grid item xs={12} sm={12} md={2}><p>274-57-04</p></Grid>
                            </Grid>
                            <Grid container className={classNames(classes.root,classes.asidePart)} spacing={16}>
                                <Grid item xs={12} sm={12} md={5}><b>Зам.начальника</b></Grid>
                                <Grid item xs={12} sm={12} md={5}><p>Крелевец Ирина Анатольевна</p></Grid>
                                <Grid item xs={12} sm={12} md={2}><p>274-76-98</p></Grid>
                            </Grid>
                            <Grid container className={classNames(classes.root,classes.asidePart)} spacing={16}>
                                <Grid item xs={12} sm={12} md={5}><b>Юрисконсульт</b></Grid>
                                <Grid item xs={12} sm={12} md={5}><p>Ермолаев Леонид Владимирович</p></Grid>
                                <Grid item xs={12} sm={12} md={2}><p>274-23-78</p></Grid>
                            </Grid>
                            <Grid container className={classNames(classes.root,classes.asidePart)} spacing={16}>
                                <Grid item xs={12} sm={12} md={5}><b>Специалисты по коммунальным расчетам</b></Grid>
                                <Grid item xs={12} sm={12} md={5}><p>Крелевец Ирина Анатольевна</p></Grid>
                                <Grid item xs={12} sm={12} md={2}><p>206-20-52, 274-76-98, 274-23-78</p></Grid>
                            </Grid>
                            <Grid container className={classNames(classes.root,classes.asidePart)} spacing={16}>
                                <Grid item xs={12} sm={12} md={5}><b>Паспортисты</b></Grid>
                                <Grid item xs={12} sm={12} md={5}><p>Ермолаев Леонид Владимирович</p></Grid>
                                <Grid item xs={12} sm={12} md={2}><p>206-20-52</p></Grid>
                            </Grid>
                            <Grid container className={classNames(classes.root,classes.asidePart)} spacing={16}>
                                <Grid item xs={12} sm={12} md={5}><b>Ст. паспортист</b></Grid>
                                <Grid item xs={12} sm={12} md={5}><p>Крелевец Ирина Анатольевна</p></Grid>
                                <Grid item xs={12} sm={12} md={2}><p>274-57-04</p></Grid>
                            </Grid>
                            <Grid container className={classNames(classes.root,classes.asidePart)} spacing={16}>
                                <Grid item xs={12} sm={12} md={5}><b>Операторы</b></Grid>
                                <Grid item xs={12} sm={12} md={5}><p>Ермолаев Леонид Владимирович</p></Grid>
                                <Grid item xs={12} sm={12} md={2}><p>274-76-98</p></Grid>
                            </Grid>
                            <Grid container className={classNames(classes.root,classes.asidePart)} spacing={16}>
                                <Grid item xs={12} sm={12} md={5}><b>Автоответчики ИПУ</b></Grid>
                                <Grid item xs={12} sm={12} md={5}><p>Крелевец Ирина Анатольевна</p></Grid>
                                <Grid item xs={12} sm={12} md={2}><p>274-23-78</p></Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                                <Paper className={classes.asideBlock}>
                                    <Grid container className={classNames(classes.root,classes.asidePart)} spacing={16}>
                                        <Grid item xs={12} sm={12} md={5}><span>Адрес:</span></Grid>
                                        <Grid item xs={12} sm={12} md={7}><p>220029, г. Минск, ул. Красная,
                                            д. 5</p></Grid>
                                    </Grid>
                                    <Grid container className={classNames(classes.root, classes.asidePart)}
                                          spacing={16}>
                                        <Grid item xs={12} sm={12} md={5}><span>Руководитель:</span></Grid>
                                        <Grid item xs={12} sm={12} md={7}><p>Вашкевич Ольга Гренальдовна</p></Grid>
                                    </Grid>
                                    <Grid container className={classNames(classes.root,classes.asidePart)} spacing={16}>
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
                                            <Link to="/" className={classes.viewAllMenu} onClick={this.handleOpenWorkTime.bind(this)}>
                                                Показать все
                                            </Link>
                                        </Grid>
                                    </Grid>
                                    <Grid container className={classNames(classes.root,classes.asidePart)} spacing={16}>
                                        <Grid item xs={12} sm={12} md={5}><span>Время приема:</span></Grid>
                                        <Grid item xs={12} sm={12} md={7}>
                                            <div className={classes.receptionTime}>
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
                                            <Link to="/" className={classes.viewAllMenu} onClick={this.handleOpenReceptionTime.bind(this)}>
                                                Показать все
                                            </Link>
                                        </Grid>
                                    </Grid>
                                    <Grid container className={classNames(classes.root,classes.asidePart)} spacing={16}>
                                        <Grid item xs={12} sm={12} md={5}><span>Телефоны:</span></Grid>
                                        <Grid item xs={12} sm={12} md={7}><p>+375 (17) 215-00-77</p><p>+375 (17) 215-00-77</p></Grid>
                                    </Grid>
                                    <Grid container className={classNames(classes.root, classes.asidePart)}
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
                    </Grid>
                </div>
            </section>
        );
    };
};


export default withStyles(styles)(SectionZhesPage);