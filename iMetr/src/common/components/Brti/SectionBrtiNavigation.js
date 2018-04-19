import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import classNames from 'classnames';
import Button from 'material-ui/Button';
import MetrIcon from '../Icon';
import Input from 'material-ui/Input';
import 'react-select/dist/react-select.css';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import downArrow from './assets/images/down.png';
import topArrow from './assets/images/top.png';
//components
import Pagination from '../../../objects/components/Pagination';

import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';



const styles = theme => ({
    root: theme.root,
    navigation: {
        '& > a': {
            padding:'15px 3px',
            marginRight:15,
            color:'#519be2',
            fontSize:16,
            textTransform: 'uppercase',
            textDecoration:'none',
            fontFamily: `'Exo 2'`,
            display:'inline-block',
            position:'relative',
            '&:last-child': {
                marginRight:0,
            },
        },
        '& .active': {
            color: '#1b2833',
            '&:after': {
                position:'absolute',
                content:'""',
                display:'block',
                width:'100%',
                height:3,
                background:'#5b86e5',
                left:0,
                bottom:0,
            },
        },
    },
    contentAbout: {
        backgroundColor: '#f3f5f6',
        padding:'30px 0 50px 0',
        borderTop:'1px solid #cfd4d7',
    },
    pageTitle: {
        fontSize: 26,
        marginBottom:20,
        color: '#1b2833',
        lineHeight:'normal',
    },
    subTitle: {
        marginBottom: 15,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#9299a2',
        fontFamily: `'Exo 2'`,
        [theme.breakpoints.down('xs')]: {
            flexDirection:'column',
            height: 'auto',
        },
    },
    titleOfBlock:{
        alignItems: 'flex-start',
        '& p':{
            marginTop:0
        },
            [theme.breakpoints.down('sm')]: {
            flexDirection:'column',
                '& p':{
                    marginTop:-15
                },
        },
    },
    subTitleofBlock: {
        justifyContent: 'flex-start',
        '& span':{
            color: '#9299a2',
            fontSize: 12,
        },
    },
    partTitleOfBlock:{
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    pageText: {
        lineHeight: '20px',
        letterSpacing: 'normal',
        fontSize:16,
        fontWeight:300,
        marginBottom:17,
    },
    inputWrap: {
        position:'relative',
    },
    inputSingleline: {
        padding: '10px 50px',
        fontSize:16,
    },
    input: {
        position:'relative',
        marginTop:0,
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
            top: '14px',
            left: '22px',
        }
    },
    inputButton: {
        verticalAlign:'middle',
        position:'absolute',
        top:'2px',
        right:0,
    },
    inputIcon: {
        color:'#5b86e5',
        fontSize:25,
    },
    terminBlock: {
        padding:20,
        marginBottom:20,
        '& a': {
            color: '#519be2',
            fontFamily: '"Exo 2"',
            fontSize: 18,
            textDecoration:'none',
            display:'inline-block',
            '&:hover': {
                color: '#5b86e5',
            },
        },
        '& p': {
            fontFamily: '"Exo 2"',
            fontSize: 14,
            [theme.breakpoints.down('sm')]: {
                marginTop: 0
            },
        },
        '& div': {
            display:'flex',
            color: '#9299a2',
            alignItems:'start',
            fontWeight:300,
                [theme.breakpoints.down('sm')]: {
                alignItems:'start',
            },
        },

    },
    brtiContent:{
      fontFamily: '"Exo 2"',
      marginBottom: 15,
      color: '#1b2833',
      fontSize: '14px'
    },
    brtiContact:{
        fontFamily: '"Exo 2"',
        '& span':{
            fontSize:'14px',
            marginTop:'3px',
        }

    },
    brtiContactPart:{
        display:'flex',
        alignItems: 'flex-start',
        marginRight: 20,

    },
    brtiContactList:{
        margin:'0px',
        padding:0,
        '& li': {
            display: 'flex',
            listStyle: 'none',
            position: 'relative',
            paddingLeft: 5,
            lineHeight: '20px',
            marginBottom: '3px',
            fontSize: '14px',
            color: '#1b2833',
            flexDirection:'row'
        },
    },
    badgeTermin: {
        fontSize: 12,
        borderRadius: '12px 13px 13px 12px',
        border: '1px solid #b0b5b8',
        textTransform:'uppercase',
        width: 128,
        height: 25,
        textAlign: 'center',
        paddingTop: 4,
        transition: 'all .5s ease',
        '&:hover': {
            color:'#fff',
            background:'#5b86e5',
            border: '1px solid #5b86e5',
            transition: 'all .5s ease',
        },
    },
    paginationBlock: {
        display:'flex',
        justifyContent:'center',
    },
    asideBlock: {
        cursor:'pointer',
        '& div': {
            width: '100%',
        },
    },
    asideBlockList:{
        paddingTop:16,
        paddingLeft:0,
        paddingRight:0,
        '& div':{
            color: "#000",
            fontSize: 20,
            fontWeight: 100,
            lineHeight:'25px',
            display:'flex',
            flexDirection:'column',
        },
        '& li':{
            color: "#000",
            fontSize: 18,
            fontWeight: 300,
            lineHeight:'25px',
            paddingTop: 12,
            display: 'flex',
            justifyContent: 'space-between'
        },
        '& a':{
            color:"#519be2",
            fontSize:"14px",
            fontWeight: "300",
            marginLeft: "35px"
        }


    },
    asideSubHeader:{
        marginBottom:16
    },
    collapse:{
        marginBottom:8,
        marginTop: -6
    },
    multiTabs: {
        display:'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]: {
            flexDirection:'column-reverse'
        },
    },
    active: {
        background:'#5b86e5',
        color:'#fff',
        '&:hover': {
            background:'#5b86e5',
        },
    },
    brtiContactWrap:{
        flexDirection:'column',
        '& span':{
            paddingLeft:'4px'
        }
    },
    fax:{
        color:'#9299a2'
    }
});

class SectionBrtiNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:0,
            activePage: 1,
            open: true
        };
    };

    handleClick = () => {
        this.setState({ open: !this.state.open });
    };

    handleChangeSelect = (name, value) => {
        if (value !== null) {
            this.setState({ [name]: value.value});
        } else {
            this.setState({[name]: 0});
        }
    };
    render() {
        const {classes} = this.props;
        return (
            <section>
                <Grid container spacing={24} className={classes.root} align={'center'}>
                    <Grid item xs={12}>
                        <div className={classes.multiTabs}>
                        <nav className={classes.navigation}>
                            <NavLink activeClassName="active" to='/Notariat'>Нотариат</NavLink>
                            <NavLink exact activeClassName="active" to='/Brti'>Агенства по регистрации</NavLink>
                            <NavLink exact activeClassName="active" to='/Zhes'>ЖЭСы и РСЦ</NavLink>
                        </nav>
                        </div>
                    </Grid>
                </Grid>
                <div className={classes.contentAbout}>
                    <Grid container spacing={24} className={classes.root} justify={"space-between"}>
                        <Grid item xs={12} sm={12} md={8}>
                            <div className={classes.inputWrap}>
                                <Input
                                    placeholder="Введите название Агентства по регистрации или его адрес"
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
                            <Typography type="caption" className={classes.subTitle}>
                                Найдено 125 агентств по регистрации
                            </Typography>
                            <Paper className={classes.terminBlock}>
                                <div className={classNames(classes.subTitle, classes.titleOfBlock)}>
                                    <div className={classes.partTitleOfBlock}>
                                        <Link to="/BrtiPage">Отдел по государственной регистрации и земельному кадастру №1</Link>
                                        <Typography type="caption" className={classes.subTitleofBlock}>
                                            <MetrIcon className={classes.inputIcon}>location</MetrIcon>г. Минск, ул. Максима Богдановича, 153
                                        </Typography>
                                    </div>
                                </div>
                                <Typography className={classes.brtiContent}>Действия в отношении имущества юридических лиц и индивидуальных предпринимателей, нежилых объектов физических лиц, кроме гаражей и машиномес</Typography>
                                <Grid container spacing={24} className={classes.brtiContact}>
                                    <Grid item className={classes.brtiContactPart}>
                                        <MetrIcon>phone</MetrIcon>
                                        <div className={classes.brtiContactWrap}>
                                            <ul className={classes.brtiContactList}>
                                                <li>8(017) 284-92-37</li>
                                            </ul>
                                        </div>
                                    </Grid>
                                    <Grid item className={classes.brtiContactPart}>
                                        <MetrIcon>print</MetrIcon>
                                        <div className={classes.brtiContactWrap}>
                                            <ul className={classes.brtiContactList}>
                                                <li><Typography type="body1" className={classes.fax}>факс: </Typography>8(017) 284-92-37</li>
                                            </ul>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Paper>
                            <Paper className={classes.terminBlock}>
                                <div className={classNames(classes.subTitle, classes.titleOfBlock)}>
                                    <div className={classes.partTitleOfBlock}>
                                        <Link to="/BrtiPage">Отдел по государственной регистрации и земельному кадастру №1</Link>
                                        <Typography type="caption" className={classes.subTitleofBlock}>
                                            <MetrIcon className={classes.inputIcon}>location</MetrIcon>220029, г. Минск, ул. Красная, д. 5
                                        </Typography>
                                    </div>
                                </div>
                                <Typography className={classes.brtiContent}>Действия в отношении квартир в многоквартирных жилых домах, машино-мест в гаражах таких домов, гаражей, жилых домов индивидуального жилищного фонда, квартир в таких домах, земельных участков</Typography>
                                <Grid container spacing={24} className={classes.brtiContact}>
                                    <Grid item className={classes.brtiContactPart}>
                                        <MetrIcon>phone</MetrIcon>
                                        <div className={classes.brtiContactWrap}>
                                            <ul className={classes.brtiContactList}>
                                                <li>8(017) 284-92-37</li>
                                            </ul>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Paper>
                            <Paper className={classes.terminBlock}>
                                <div className={classNames(classes.subTitle, classes.titleOfBlock)}>
                                    <div className={classes.partTitleOfBlock}>
                                        <Link to="/BrtiPage">Отдел по государственной регистрации и земельному кадастру №1</Link>
                                        <Typography type="caption" className={classes.subTitleofBlock}>
                                            <MetrIcon className={classes.inputIcon}>location</MetrIcon>220029, г. Минск, ул. Красная, д. 5
                                        </Typography>
                                    </div>
                                </div>
                                <Typography className={classes.brtiContent}>Действия в отношении квартир в многоквартирных жилых домах, машино-мест в гаражах таких домов, гаражей, жилых домов индивидуального жилищного фонда, квартир в таких домах, земельных участков</Typography>
                                <Grid container spacing={24} className={classes.brtiContact}>
                                    <Grid item className={classes.brtiContactPart}>
                                        <MetrIcon>phone</MetrIcon>
                                        <div className={classes.brtiContactWrap}>
                                            <ul className={classes.brtiContactList}>
                                                <li>8(017) 284-92-37</li>
                                            </ul>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Paper>
                            <div className={classes.paginationBlock}>
                                <Pagination currentPage={this.state.activePage}
                                            total={600}
                                            perPage={15}
                                />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Typography type="body2">
                                <Paper className={classes.asideBlock}>
                                    <List
                                        className={classes.asideBlockList}
                                        subheader={<ListSubheader className={classes.asideSubHeader}>Агентства по регистрации в других городах</ListSubheader>}
                                    >
                                        <Divider/>
                                        <ListItem>
                                            Брестская область<img src={downArrow}/>
                                        </ListItem>
                                        <Divider/>
                                        <ListItem>
                                            Витебская область<img src={downArrow}/>
                                        </ListItem>
                                        <Divider/>
                                        <ListItem>
                                            Гомельская область<img src={downArrow}/>
                                        </ListItem>
                                        <Divider/>
                                        <ListItem onClick={this.handleClick}>
                                            Гродненская область
                                            {this.state.open ? <img src={topArrow}/> : <img src={downArrow}/>}
                                        </ListItem>
                                        <Collapse in={this.state.open} timeout={2} unmountOnExit className={classes.collapse}>
                                                    <a>Агентства по регистрации в г. Лида</a>
                                                    <a>Агентства по регистрации в г. Ивье</a>
                                                    <a>Агентства по регистрации в г. Новогрудок</a>
                                        </Collapse>
                                        <Divider/>
                                        <ListItem>
                                            Ленинский район<img src={downArrow}/>
                                        </ListItem>


                                    </List>
                                </Paper>
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </section>
        );
    };
};


export default withStyles(styles)(SectionBrtiNavigation);