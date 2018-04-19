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
import BuildItem1 from './assets/images/build1.png';
import BuildItem2 from './assets/images/build2.png';
import BuildItem3 from './assets/images/build3.png';
import sharesBg from './assets/images/sharesBg.png';
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
    pageShares: {
        marginTop:50,
        marginBottom:16,
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
    textHolder: {
        height:105,
        overflow: 'hidden',
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
    shares: {
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
        borderRadius: 3,
        backgroundColor: '#1b2833',
        position:'relative',
        maxHeight: 165,
        '@media (orientation: landscape) and (max-width: 1024px)': {
            maxHeight: 140,
        },
        '& img': {
            maxHeight: 165,
            '@media (orientation: portrait) and (max-width: 768px)': {
                width: '100%',
            },
            '@media (orientation: landscape) and (max-width: 1024px)': {
                maxHeight: 140,
            },
        },
    },
    shareBadge: {
        color: '#ffffff',
        fontSize: 12,
        padding:'6px 12px 6px 16px;',
        boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2)',
        borderRadius: '0 2px 2px 0',
        position:'absolute',
        top:10,
        left:'-5px',
    },
    greenColor: {
      background:'#5fb96e',
    },
    orangeColor: {
        background:'#eb8105',
    },
    redColor: {
        background:'#dd3632',
    },
    shareTitle: {
        fontWeight:100,
        color:'#fff',
        display:'block',
        fontSize:24,
        position:'absolute',
        bottom:15,
        left:10,
    },
    shareDate: {
        position:'absolute',
        bottom:10,
        right:10,
        color: '#b0b5b8',
        fontSize: 12,
    },
    sharesSmall: {
        '& $shareTitle': {
            position:'absolute',
            bottom: 40,
            textAlign: 'center',
            fontSize: 18,
        },
    },
    linkButton: {
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
        borderRadius: 3,
        backgroundImage: 'linear-gradient(45deg, #519be2 0%, #36d1dc 100%)',
        margin:0,
        display:'block',
        color:'#fff',
        textDecoration:'none',
        textAlign:'center',
        padding:'34px 0',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
        transition: 'color 0.4s',
        maxHeight: 165,
        '@media (orientation: landscape) and (max-width: 1024px)': {
            maxHeight: 140,
        },
        '@media (orientation: portrait) and (max-width: 1366px)': {
            maxHeight: 140,
        },
        '@media (orientation: portrait) and (max-width: 768px)': {
            maxHeight: 165,
        },
        '& > p': {
            color:'#fff',
            fontSize:'20px',
            textTransform:'uppercase',
            marginTop:'22px',
        },
        '& > span': {
            fontSize:'20px',
            background: `url(${sharesBg}) no-repeat 0px 0px`,
            fontFamily: `'Exo 2'`,
            display:'inline-block',
            width: 60,
            height: 62,
            paddingTop:20,
        },
        '&:after': {
            content: '""',
            position: 'absolute',
            height: '100%',
            width: '100%',
            bottom: '100%',
            left: 0,
            zIndex: -1,
            transition: 'transform 0.4s',
            transitionTimingFunction: 'cubic-bezier(0.75, 0, 0.125, 1)',
            background: '#5b86e5',
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            height: '100%',
            width: '100%',
            bottom: '100%',
            left: 0,
            zIndex: -1,
            transition: 'transform 0.4s',
            transitionTimingFunction: 'cubic-bezier(0.75, 0, 0.125, 1)',
            background: '#36d1dc',
        },
        '&:hover': {
            '&:before': {
                transform: 'translate3d(0, 100%, 0)',
            },
            '&:after': {
                transform: 'translate3d(0, 100%, 0)',
                transitionDelay: '0.175s',
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
        '& $viewAllMenu': {
            textDecoration:'underline',
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
    callModal: {
        textDecoration:'underline',
        color:'#519be2 !important',
        cursor:'pointer',
    },
    callBack: {
        fontFamily: `'Exo 2'`,
        fontSize: 14,
        color: '#519be2',
        position:'relative',
        paddingLeft: 20,
        display:'inline-block',
        textDecoration:'underline !important',
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
        marginRight:20,
        '&:before': {
            content: `'\\e920'`,
        }
    },
    textAlign: {
        textAlign:'right',
    },
});

function TabContainer(props) {
    return <div>{props.children}</div>;
};

class AboutDeveloper extends Component {
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
        const {classes , fullScreen } = this.props;
        const { value } = this.state;

        return (
            <section className={classes.about}>
                <Grid container className={classes.root} spacing={24} justify={'space-between'}>
                    <Grid item xs={12} sm={12} md={7}>
                        <Typography type="body2" component={"h2"} className={classes.pageTitle}>
                            О компании
                        </Typography>
                        <Typography type="caption" component={"p"} className={classes.pageText}>
                            Компания "А-100 Девелопмент" входит в состав группы компаний "А-100"
                            и является одним из ключевых ее бизнес-направлений.
                            Сферы деятельности компании включают в себя полный спектр
                            работ по созданию и эксплуатации объектов недвижимости — от
                            разработки концепции и строительства до реализации и управления
                            жилой и коммерческой недвижимостью. Растущие объемы строительства,
                            беспрекословное исполнение всех взятых на себя обязательств и высокая
                            социальная ответственность сделали "А-100 Девелопмент"
                            одним из крупнейших и надежнейших девелоперов на белорусском рынке недвижимости.
                        </Typography>
                        <Typography type="body1" component={"h2"} className={classes.pageSubTitle}>
                            Специализация
                        </Typography>
                        <Typography type="caption" component={"p"} className={classes.pageText}>
                            Приоритетным направлением деятельности девелопера является инвестирование денежных
                            средств в загородную недвижимость, строительство самодостаточных жилых и коммерческих
                            объектов, девелопмент земельных участков в Минске и обустройство коттеджных поселков,
                            включая дороги, инфраструктуру, инженерные коммуникации.
                        </Typography>
                        <div>
                        <Typography type="body1" component={"h2"} className={classes.pageSubTitle}>
                            Финансовая стабильность – основа бизнеса
                        </Typography>
                            <div className={classes.textHolder}>
                                <Typography type="caption" component={"p"} className={classes.pageText}>
                                    Благодаря грамотной долгосрочной стратегии и собственным финансовым ресурсам девелопер
                                    загородной недвижимости компания занимается строительством современных и полностью
                                    благоустроенных комплексов, находящихся в экологически чистых районах Минска.
                                    Финансовая стабильность и профессионализм каждого члена команды являются основой
                                    процветающего бизнеса.
                                </Typography>
                            </div>
                            <Link to="/" className={classes.viewAllMenu}>
                                <Typography type="caption" onClick={this.handleOpenStanse.bind(this)}>
                                    Показать все
                                </Typography>
                            </Link>
                        </div>
                        <Typography type="body2" component={"h2"} className={classes.pageShares}>
                            Акции застройщика
                        </Typography>
                        <Grid container className={classes.root} spacing={8} align={"center"}>
                            <Grid item xs={12} sm={8} md={6}>
                                <div className={classNames(classes.shares,classes.sharesSmall)}>
                                    <img src={BuildItem1} alt={'iMetr'}/>
                                    <Typography type="caption" component={"p"} className={classNames(classes.shareBadge,classes.greenColor)}>
                                        Ипотека от 6,45%
                                    </Typography>
                                    <Typography type="body2" component={"p"} className={classes.shareTitle}>
                                        ЖК «Пирс»
                                    </Typography>
                                    <Typography type="caption" component={"p"} className={classes.shareDate}>
                                        до 30 ноября 2017
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={4} md={3}>
                                <div className={classNames(classes.shares,classes.sharesSmall)}>
                                    <img src={BuildItem2} alt={'iMetr'}/>
                                    <Typography type="caption" component={"p"} className={classNames(classes.shareBadge,classes.orangeColor)}>
                                        Старт продаж!
                                    </Typography>
                                    <Typography type="body2" component={"p"} className={classes.shareTitle}>
                                        ЖК «Грушевский  посад»
                                    </Typography>
                                    <Typography type="caption" component={"p"} className={classes.shareDate}>
                                        до 30 ноября 2017
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={4} md={3}>
                                <div className={classNames(classes.shares,classes.sharesSmall)}>
                                    <img src={BuildItem3} alt={'iMetr'}/>
                                    <Typography type="caption" component={"p"} className={classNames(classes.shareBadge,classes.redColor)}>
                                        Скидка 9,9% в ноябре!
                                    </Typography>
                                    <Typography type="body2" component={"p"} className={classes.shareTitle}>
                                        ЖК «Новая  боровая»
                                    </Typography>
                                    <Typography type="caption" component={"p"} className={classes.shareDate}>
                                        до 30 ноября 2017
                                    </Typography>
                                </div>
                            </Grid>
                        {/*</Grid>*/}
                        {/*<Grid container className={classes.root} spacing={8} align={"center"}>*/}
                            <Grid item xs={12} sm={4} md={3}>
                                <div className={classNames(classes.shares,classes.sharesSmall)}>
                                    <img src={BuildItem2} alt={'iMetr'}/>
                                    <Typography type="caption" component={"p"} className={classNames(classes.shareBadge,classes.orangeColor)}>
                                        Старт продаж!
                                    </Typography>
                                    <Typography type="body2" component={"p"} className={classes.shareTitle}>
                                        ЖК «Грушевский  посад»
                                    </Typography>
                                    <Typography type="caption" component={"p"} className={classes.shareDate}>
                                        до 30 ноября 2017
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={4} md={3}>
                                <div className={classNames(classes.shares,classes.sharesSmall)}>
                                    <img src={BuildItem3} alt={'iMetr'}/>
                                    <Typography type="caption" component={"p"} className={classNames(classes.shareBadge,classes.redColor)}>
                                        Скидка 9,9% в ноябре!
                                    </Typography>
                                    <Typography type="body2" component={"p"} className={classes.shareTitle}>
                                        ЖК «Новая  боровая»
                                    </Typography>
                                    <Typography type="caption" component={"p"} className={classes.shareDate}>
                                        до 30 ноября 2017
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={4} md={3}>
                                <div className={classNames(classes.shares,classes.sharesSmall)}>
                                    <img src={BuildItem2} alt={'iMetr'}/>
                                    <Typography type="caption" component={"p"} className={classNames(classes.shareBadge,classes.orangeColor)}>
                                        Старт продаж!
                                    </Typography>
                                    <Typography type="body2" component={"p"} className={classes.shareTitle}>
                                        ЖК «Грушевский  посад»
                                    </Typography>
                                    <Typography type="caption" component={"p"} className={classes.shareDate}>
                                        до 30 ноября 2017
                                    </Typography>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={4} md={3}>
                                <Link to="/" className={classes.linkButton}>
                                    <span>10</span>
                                    <Typography component="p">Все Акции</Typography>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Grid container className={classNames(classes.root,classes.asideContainer)} spacing={24}>
                            <Grid item xs={12} className={classes.textAlign}>
                                <Link to="/" className={classNames(classes.callBack,classes.message)}>
                                    Сообщение
                                </Link>
                                <Link to="/" className={classes.callBack}>
                                    Перезвоните мне
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid container className={classNames(classes.root,classes.asideContainer)} spacing={16}>
                            <Grid item xs={12} sm={12} md={5}><span>Объявлений:</span></Grid>
                            <Grid item xs={12} sm={12} md={7}><Link to="/">2 956 объявления</Link></Grid>
                        </Grid>
                        <Grid container className={classNames(classes.root,classes.asideContainer)} spacing={16}>
                            <Grid item xs={12} sm={12} md={5}><span>Сдано:</span></Grid>
                            <Grid item xs={12} sm={12} md={7}><Link to="/">17 домов в 2 ЖК</Link></Grid>
                        </Grid>
                        <Grid container className={classNames(classes.root,classes.asideContainer)} spacing={16}>
                            <Grid item xs={12} sm={12} md={5}><span>Строится:</span></Grid>
                            <Grid item xs={12} sm={12} md={7}><Link to="/">27 домов в 5 ЖК</Link></Grid>
                        </Grid>
                        <Grid container className={classNames(classes.root,classes.asideContainer)} spacing={16}>
                            <Grid item xs={12} sm={12} md={5}><span>Регион работы:</span></Grid>
                            <Grid item xs={12} sm={12} md={7}><p>Минск и Минская область, <br/>Брест и Брестская область</p></Grid>
                        </Grid>
                        <Grid container className={classNames(classes.root,classes.asideContainer)} spacing={16}>
                            <Grid item xs={12} sm={12} md={5}><span>Отделение:</span></Grid>
                            <Grid item xs={12} sm={12} md={7}><p>«Центральное»</p>
                                <span className={classes.callModal} onClick={this.handleClickOpen}>Все отделения</span>
                                <Dialog
                                    open={this.state.open}
                                    fullScreen={fullScreen}
                                    maxWidth={"md"}
                                >
                                    <Grid container className={classes.root} spacing={0}>
                                        <Grid item xs={12} className={classes.allOfficesTitle}>
                                            <Typography type="body1" component={"h3"} className={classes.pageTitle}>
                                                Отделения агентства недвижимости
                                            </Typography>
                                            <Tabs value={value} onChange={this.handleChange} className={classes.modalTabs}>
                                                <Tab
                                                    label="Списком" classes={{
                                                    labelContainer: classes.labelContainer,
                                                    label: classes.label,
                                                    rootInherit: classes.rootInherit,
                                                    rootInheritSelected: classes.rootInheritSelected,
                                                }} />
                                                <Tab
                                                    label="Наши объекты" classes={{
                                                    labelContainer: classes.labelContainer,
                                                    label: classes.label,
                                                    rootInherit: classes.rootInherit,
                                                    rootInheritSelected: classes.rootInheritSelected,
                                                }} />
                                            </Tabs>
                                            <Button className={classes.closeModal} onClick={this.handleRequestClose}>
                                                <MetrIcon>letter-x</MetrIcon>
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12}>
                                            {value === 0 && <TabContainer>
                                                <Grid container className={classNames(classes.root,classes.tableHead)} spacing={24}>
                                                    <Grid item xs={12} sm={12} md={4}>
                                                        <Typography type="caption" component={"p"}>
                                                            Название
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} md={4}>
                                                        <Typography type="caption" component={"p"}>
                                                            Адрес
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} md={4}>
                                                        <Typography type="caption" component={"p"}>
                                                            Телефон
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid container className={classNames(classes.root,classes.tableBody)} spacing={24}>
                                                    <Grid item xs={12} sm={12} md={4}>
                                                        <Typography type="caption" component={"p"}>
                                                            Отделение «Юго-Запад»
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} md={4}>
                                                        <Typography type="caption" component={"p"}>
                                                            Минск, пр. Независимости, 68
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} md={4}>
                                                        <Typography type="caption" component={"p"}>
                                                            +375 (17) 215-00-44
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid container className={classNames(classes.root,classes.tableBody)} spacing={24}>
                                                    <Grid item xs={12} sm={12} md={4}>
                                                        <Typography type="caption" component={"p"}>
                                                            Отделение «Метро Каменная горка»
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} md={4}>
                                                        <Typography type="caption" component={"p"}>
                                                            Минск, пр. Независимости, 68
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} md={4}>
                                                        <Typography type="caption" component={"p"}>
                                                            +375 (17) 215-00-44
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </TabContainer>}
                                            {value === 1 && <TabContainer>
                                                <div className={classes.modalTab}>
                                                    <SectionMap/>
                                                </div>
                                            </TabContainer>}
                                        </Grid>
                                    </Grid>
                                </Dialog>
                            </Grid>
                        </Grid>
                        <Grid container className={classNames(classes.root,classes.asideContainer)} spacing={16}>
                            <Grid item xs={12} sm={12} md={5}><span>Адрес:</span></Grid>
                            <Grid item xs={12} sm={12} md={7}><p>Минск, пр. Независимости, 68</p></Grid>
                        </Grid>
                        <Grid container className={classNames(classes.root,classes.asideContainer)} spacing={16}>
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
                            <Grid item xs={12} sm={12} md={7}><p>+375 (17) 215-00-77<br/>+375 (17) 215-00-77</p></Grid>
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
                            <Grid item xs={12} sm={12} md={5}><span>Мы в соц. сетях:</span></Grid>
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

export default withStyles(styles)(AboutDeveloper);
