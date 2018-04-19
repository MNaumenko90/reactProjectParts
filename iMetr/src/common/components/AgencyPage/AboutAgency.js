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
        margin: [30, 0],
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
                top:3,
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
        height:320,
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

class AboutAgency extends Component {
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
                        <div>
                        <div className={classes.textHolder}>
                        <Typography type="body2" component={"h2"} className={classes.pageTitle}>
                            О компании
                        </Typography>
                        <Typography type="caption" component={"p"} className={classes.pageText}>
                            «ТВОЯ СТОЛИЦА.АГЕНТСТВО НЕДВИЖИМОСТИ» на рынке риэлтерских услуг с 1996 года.
                            Основные принципы работы – ответственность, честность и юридическая безупречность.
                            Этому способствуют постоянное развитие технологий и новых сервисов, контроль качества
                            услуг и высокий профессионализм сотрудников. За годы работы компания заработала
                            репутацию профессиональной, надежной и честной.  Многократно становилась
                            победителем государственных и негосударственных конкурсов, таких как «Лучшая риэлтерская организация»
                            Министерства юстиции РБ, «Выбор года», «Realt Golden Key» «Бренд года» и др.
                        </Typography>
                        <Typography type="caption" component={"p"} className={classes.pageText}>
                            «ТВОЯ СТОЛИЦА.АГЕНТСТВО НЕДВИЖИМОСТИ» оказывает риэлтерские услуги по купле- продаже,
                            аренде недвижимости как на первичном, так и на вторичном рынке жилья. Надежно.
                            Ни одной сделки, признанной недействительной со дня основания компании. Законность
                            сделки обеспечивает команда профессиональных юристов.  Удобно. Сеть офисов.
                            Отделения расположены в разных микрорайонах г. Минска рядом со станциями метро.  
                            <br/>Быстро. Ежедневно более 250 обращений потенциальных покупателей и продавцов.
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
                        <Grid container className={classNames(classes.root,classes.asideContainer)} spacing={24}>
                            <Grid item xs={12} sm={12} md={5}><span>Адрес:</span></Grid>
                            <Grid item xs={12} sm={12} md={7}><p>Минск, пр. Независимости, 68</p></Grid>
                        </Grid>
                        <Grid container className={classNames(classes.root,classes.asideContainer)} spacing={24}>
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
                        <Grid container className={classNames(classes.root,classes.asideContainer)} spacing={24}>
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

export default withStyles(styles)(AboutAgency);
