import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Button from 'material-ui/Button';
import MetrIcon from '../Icon';
import Dialog, {
    withMobileDialog,
} from 'material-ui/Dialog';
import Tabs, { Tab } from 'material-ui/Tabs';

//components
import Share from './Share';
import SectionMap from './SectionMap';
//images
import Social from './assets/images/social.png';

const styles = theme => ({
    root: theme.root,
    about: {
        margin:'30px 0 60px 0',
    },
    pageTitle: {
        fontSize:24,
    },
    pageSubTitle: {
        fontSize:20,
        marginTop:39,
    },
    pageText: {
        lineHeight:'21px',
        marginTop:20,
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
    callModal: {
        textDecoration:'underline',
        color:'#519be2 !important',
        cursor:'pointer',
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
    textHolder: {
        height:212,
        overflow: 'hidden',
    },
    workTime: {
        height:18,
        overflow: 'hidden',
        lineHeight:'22px',
        marginBottom:10,
    },
    specialization: {
        display:'flex',
        marginTop:18,
        justifyContent: 'space-between',
        '& ul': {
            margin:0,
            padding:0,
            '& li': {
                color: '#1b2833',
                fontFamily: `'Exo 2'`,
                fontSize:14,
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
            },
        },
    },
    asideContainer: {
        borderBottom:'1px solid #ebebeb',
        fontFamily: `'Exo 2'`,
        fontSize:14,
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
    },
    contactButton: {
        padding: '15px 8px',
        width:'100%',
        '& span': {
            color:'#fff',
            '& .icon': {
                marginRight:6,
            },
        },
    },
    socialAgency: {
        '& a': {
            width: 30,
            height: 30,
            display:'inline-block',
            verticalAlign:'top',
            borderRadius:50,
            marginRight:5,
        },
    },
    socialFb: {
        background: `url(${Social}) #519be2 no-repeat 10px 5px`,
    },
    socialVk: {
        background: `url(${Social}) #519be2 no-repeat -24px 6px`,
    },
    socialOk: {
        background: `url(${Social}) #519be2 no-repeat -59px 5px`,
    },
    socialIn: {
        background: `url(${Social}) #519be2 no-repeat -92px 5px`,
    },
    contacts: {
        textAlign:'center',
        padding:'10px 0',
    },
    allOfficesTitle: {
        display:'flex',
        fontSize:18,
        padding:'30px 60px 17px 30px',
        alignItems:'center',
        justifyContent:'space-between',
        position:'relative',
    },
    closeModal: {
        cursor:'pointer',
        minWidth:50,
        position:'absolute',
        top:0,
        right:0,
    },
    label: {
        color: 'inherit',
        textTransform:'none',
    },
    rootInheritSelected: {
        color: '#fff !important',
        background:'#5b86e5 !important',
    },
    rootInherit: {
        color: '#1b2833',
        background:'#fff',
        height: 33,
        border: '1px solid #b0b5b8',
        borderRadius:'3px 0 0 3px',
        '&:last-child': {
            borderLeft:'none',
            borderRadius:'0 3px 3px 0',
        },
        '&:after': {
            display:'none',
        },
        [theme.breakpoints.up('md')]: {
            minWidth: '97px',
        },
    },
    tableHead: {
        background:'#f3f5f6',
        borderBottom:'1px solid #d7d7d7',
        '& p': {
            color:'#9299a2',
            textTransform:'uppercase',
        },
    },
    tableBody: {
        borderBottom:'1px solid #d7d7d7',
    },
    modalTab: {
        width:960,
        height:129,
    },
});

function TabContainer(props) {
    return <div>{props.children}</div>;
};

class AboutRieltor extends Component {
    state={
        showContact: false,
        open: false,
        value: 0,
    };
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
    handleShowContact = () =>{
        this.setState({showContact: true});
    };
    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleRequestClose = () => {
        this.setState({ open: false });
    };
    handleChange = (event, value) => {
        this.setState({ value });
    };
    render() {
        const {classes} = this.props;

        return (
            <section className={classes.about}>
                <Grid container className={classes.root} spacing={24} justify={'space-between'}>
                    <Grid item xs={12} sm={12} md={7}>
                        <div>
                        <div className={classes.textHolder}>
                        <Typography type="body2" component={"h2"} className={classes.pageTitle}>
                            О риэлторе
                        </Typography>
                        <Typography type="caption" component={"p"} className={classes.pageText}>
                            Осуществляю все операции с недвижимостью : консультации ,
                            оформление документов любой сложности , юридические услуги,
                            приватизация, ипотека, дарение, материнский капитал, жилищный сертификат.
                        </Typography>
                        <Typography type="caption" component={"p"} className={classes.pageText}>
                            Опытный индивидуальный специалист всегда нахожусь в курсе последних событий в
                            мире недвижимости, опыт с 2007 года, специализируюсь в покупка/продажа
                            земельных участков, коттеджи, дачи, оказываю услуги по сбору любой документации
                            связанной с рынком недвижимости. Работа с вами является моей гордостью,
                            поскольку лучшая реклама - это, безусловно.
                        </Typography>
                        </div>
                        <Link to="/" className={classes.viewAllMenu}>
                            <Typography type="caption" onClick={this.handleOpenStanse.bind(this)}>
                                Показать все
                            </Typography>
                        </Link>
                        </div>
                            <Typography type="body1" component={"h2"} className={classes.pageSubTitle}>
                                Специализация
                            </Typography>
                        <div className={classes.specialization}>
                            <ul>
                                <li>Аренда загородной недвижимости </li>
                                <li>Аренда квартир и комнат</li>
                                <li>Аренда коммерческой недвижимости  </li>
                                <li>Купля-продажа загородной недвижимости </li>
                            </ul>
                            <ul>
                                <li>Купля-продажа квартир и комнат </li>
                                <li>Купля-продажа коммерческой</li>
                                <li>недвижимости</li>
                                <li>Сопровождение сделок </li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Grid container className={classNames(classes.root,classes.asideContainer)} spacing={16}>
                            <Grid item xs={12} sm={12} md={5}><span>Объявлений:</span></Grid>
                            <Grid item xs={12} sm={12} md={7}><Link to="/">2 956 объявления</Link></Grid>
                        </Grid>
                        <Grid container className={classNames(classes.root,classes.asideContainer)} spacing={16}>
                            <Grid item xs={12} sm={12} md={5}><span>Регион работы:</span></Grid>
                            <Grid item xs={12} sm={12} md={7}><p>Минск и Минская область, <br/>Брест и Брестская область</p></Grid>
                        </Grid>
                        <Grid container className={classNames(classes.root,classes.asideContainer)} spacing={16}>
                            <Grid item xs={12}>
                                {this.state.showContact ?
                                    <div className={classes.contacts}><Typography type="caption">+375 (17) 215-00-77</Typography></div> :
                                    <Button raised color="primary" className={classes.contactButton} onClick={this.handleShowContact}>
                                        <MetrIcon>eye</MetrIcon>Показать контакты
                                    </Button>
                                }
                            </Grid>
                        </Grid>
                        <Grid container className={classNames(classes.root,classes.asideContainer)} spacing={16}>
                            <Grid item xs={12} sm={12} md={5}><span>Поделиться:</span></Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <Share/>
                            </Grid>
                            <Grid item xs={12} sm={12} md={5}><span>Сайт:</span></Grid>
                            <Grid item xs={12} sm={12} md={7}><Link to="/">t-s.by</Link></Grid>
                        </Grid>
                        <Grid container className={classNames(classes.root,classes.asideContainer)} spacing={16}>
                            <Grid item xs={12} sm={12} md={5}><span>Телефоны:</span></Grid>
                            <Grid item xs={12} sm={12} md={7}><p>+375 (17) 215-00-77<span> (Viber)</span><br/>+375 (17) 215-00-77</p></Grid>
                        </Grid>
                        <Grid container className={classNames(classes.root,classes.asideContainer)} spacing={16}>
                            <Grid item xs={12} sm={12} md={5}><span>Email:</span></Grid>
                            <Grid item xs={12} sm={12} md={7}><Link to="/">minsk@t-s.by</Link></Grid>
                        </Grid>
                        <Grid container className={classNames(classes.root,classes.asideContainer)} spacing={16}>
                            <Grid item xs={12} sm={12} md={5}><span>Skype:</span></Grid>
                            <Grid item xs={12} sm={12} md={7}><Link to="/">tv.stolica</Link></Grid>
                        </Grid>
                        <Grid container className={classNames(classes.root,classes.asideContainer)} spacing={16}>
                            <Grid item xs={12} sm={12} md={5}><span>Я в соц. сетях:</span></Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <div className={classes.socialAgency}>
                                    <Link className={classes.socialFb} to="/"/>
                                    <Link className={classes.socialVk} to="/"/>
                                    <Link className={classes.socialOk} to="/"/>
                                    <Link className={classes.socialIn} to="/"/>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container className={classNames(classes.root,classes.asideContainer)} spacing={16}>
                            <Grid item xs={12} sm={12} md={5}><span>Поделиться:</span></Grid>
                            <Grid item xs={12} sm={12} md={7}>
                                <Share/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </section>
        );
    };
}

export default withStyles(styles)(AboutRieltor);
