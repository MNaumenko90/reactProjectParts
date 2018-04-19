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
        marginTop: -12,
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
    content: {
        fontFamily: `'Exo 2'`,
        fontSize:16,
        '& ol': {
            paddingLeft: 17
        },
        '& ul': {
            listStylePosition: 'inside',
            paddingLeft: 17,

            '& li': {
                paddingLeft: 0,
                lineHeight: '15px',
                color: '#5b86e5',
                '& span': {
                    color: '#1b2833'
                }
            },
            [theme.breakpoints.up('sm')]:{
                columnCount: 2
            }
        },
        '& li': {
            paddingLeft: 20,
            marginBottom:15,
            lineHeight: '23px'
        },
        '& a': {
            color: '#519be2',
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
    },
    description:{
        padding:'0px !important',
        color: '#1b2833'

    },
    descriptionOpen:{
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
});

class SectionBrtiPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            showMoreDescription: false
        };
    }
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

    handleOpenDescription(event) {
        event.preventDefault();
        let linkShow = event.target;
        if (linkShow.textContent === 'Свернуть') {
            linkShow.textContent = 'Показать все';
        } else {
            linkShow.textContent = 'Свернуть';
        }
        linkShow.parentNode.parentNode.parentNode.classList.toggle(this.props.classes.descriptionOpen)
        this.setState({showMoreDescription: !this.state.showMoreDescription});
    };


    render() {
        const {classes} = this.props;
        return (
            <section>
                <div className={classes.contentAbout}>
                    <Grid container spacing={24} className={classes.root} justify={"space-between"}>
                        <Grid item xs={12} sm={12} md={8}>
                            <Typography type="body2" component={"h2"}  className={classes.pageTitle}>
                                Описание
                            </Typography>
                            <Grid container className={classNames(classes.root,classes.content)} spacing={16}>
                                <Grid item xs={12} className={classes.description}>
                                    <p>Регистраторами отдела №1 регистра принимаются заявления и выполняются следующие виды работ:</p>
                                    <ol>
                                        <li>Государственная регистрация земельных участков, прав на них и сделок с ними по заявлениям физических и юридических лиц, индивидуальных предпринимателей;</li>
                                        <li>Государственная регистрация капитальных строений, изолированных помещений нежилого назначения по заявлениям индивидуальных предпринимателей,  юридических лиц и физических лиц (кроме гаражей и машиномест, расположенных под многоквартирными жилыми домами), прав на них и сделок с ними;</li>
                                        {this.state.showMoreDescription?
                                            <div>
                                        <li>Государственная регистрация создания многоквартирных жилых домов, квартир в таких домах, прав на них и сделок с ними по заявлениям юридических лиц, индивидуальных предпринимателей;</li>
                                        <li>Выдача информации из единого государственного регистра недвижимого имущества, прав на него и сделок с ним в отношении объектов недвижимости, регистрационные действия с которыми осуществляются отделом;</li>
                                            </div>
                                            : null}
                                    </ol>
                                </Grid>
                                <Link to="/" className={classes.viewAllMenu} onClick={this.handleOpenDescription.bind(this)}>
                                    Показать все
                                </Link>
                                <Grid item xs={12} >
                                <Typography type="body1" component={"h2"}  className={classes.pageTitle}>
                                    Услуги
                                </Typography>
                                    <ul>
                                        <li><span>Аренда загородной недвижимости</span></li>
                                        <li><span>Аренда квартир и комнат</span></li>
                                        <li><span>Аренда коммерческой недвижимости</span></li>
                                        <li><span>Купля-продажа загородной недвижимости</span></li>
                                        <li><span>Купля-продажа квартир и комнат</span></li>
                                        <li><span>Купля-продажа коммерческой</span></li>
                                        <li><span>недвижимости</span></li>
                                        <li><span>Подбор ипотеки</span></li>
                                    </ul>
                                </Grid>
                            </Grid>

                            <div className={classNames(classes.reception, classes.root)}>
                                <Typography type="body2" component={"h2"}  className={classes.receptionTitle}>
                                    Время приема по личным вопросам начальником РСЦ:
                                </Typography>
                                <Typography type="body2" component={"h2"}  className={classes.receptionContent}>
                                    среда с 15:00 до 20:00, 1-я суббота месяца с 09:00 до 12:00
                                </Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                                <Paper className={classes.contentBlock}>
                                    <Grid container className={classNames(classes.root,classes.contentPart)} spacing={16}>
                                        <Grid item xs={12} sm={12} md={5}><span>Адрес:</span></Grid>
                                        <Grid item xs={12} sm={12} md={7}><p>220029, г. Минск, ул. Красная,
                                            д. 5</p></Grid>
                                    </Grid>
                                    <Grid container className={classNames(classes.root, classes.contentPart)}
                                          spacing={16}>
                                        <Grid item xs={12} sm={12} md={5}><span>Руководитель:</span></Grid>
                                        <Grid item xs={12} sm={12} md={7}><p>Вашкевич Ольга Гренальдовна</p></Grid>
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
                                            <Link to="/" className={classes.viewAllMenu} onClick={this.handleOpenWorkTime.bind(this)}>
                                                Показать все
                                            </Link>
                                        </Grid>
                                    </Grid>
                                    <Grid container className={classNames(classes.root,classes.contentPart)} spacing={16}>
                                        <Grid item xs={12} sm={12} md={5}><span>Время приема:</span></Grid>
                                        <Grid item xs={12} sm={12} md={7}>
                                            <div className={classes.receptionTime}>
                                                <p>с 9:00 до 20:00,
                                                    <span>окрыто сегодня</span>
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
                                    <Grid container className={classNames(classes.root,classes.contentPart)} spacing={16}>
                                        <Grid item xs={12} sm={12} md={5}><span>Телефоны:</span></Grid>
                                        <Grid item xs={12} sm={12} md={7}><p>+375 (17) 215-00-77</p><p>+375 (17) 215-00-77</p></Grid>
                                    </Grid>
                                    <Grid container className={classNames(classes.root, classes.contentPart)}
                                          spacing={16}>
                                        <Grid item xs={12} sm={12} md={5}><span>Поделиться:</span></Grid>
                                        <Grid item xs={12} sm={12} md={7}>
                                            <div className={classes.social}>
                                                <a href="#" className={classNames(classes.socItem,classes.socTw)}/>
                                                <a href="#" className={classNames(classes.socItem,classes.socVk)}/>
                                                <a href="#" className={classNames(classes.socItem,classes.socFb)}/>
                                                <a href="#" className={classNames(classes.socItem,classes.socGl)}/>
                                                <a href="#" className={classNames(classes.socItem,classes.socOk)}/>
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


export default withStyles(styles)(SectionBrtiPage);