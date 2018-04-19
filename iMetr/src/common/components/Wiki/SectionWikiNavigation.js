import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import moment from 'moment';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import classNames from 'classnames';
import Button from 'material-ui/Button';
import MetrIcon from '../Icon';
import Input from 'material-ui/Input';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

import {PAGE_LIMIT} from '../../constants';

//components
import Pagination from '../../../objects/components/Pagination';

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
        backgroundImage: 'linear-gradient(to top, #ffffff 0%, #e9eeee 100%)',
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
        [theme.breakpoints.down('md')]: {
            flexDirection:'column',
            alignItems:'start',
            '& > div':{
                marginTop: 10,
            },
        },
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
    selectFilter: {
        fontFamily: `'Exo 2'`,
        zIndex:99,
        display: 'inline-block',
        verticalAlign: 'middle',
        width:183,
        marginLeft:10,
        '& .Select-control': {
            borderRadius:3,
            outline:0,
            border: '1px solid #e1e1e1',
            boxShadow:'none',
            '& .Select-value-icon': {
                fontFamily:'Arial',
            },
            '& .Select-clear': {
                fontFamily:'Arial',
            },
        },
        '& .Select-menu-outer': {
            top:'calc(100% + 5px)',
            zIndex:50,
            borderRadius:4,
            '&:before':{
                content: '""',
                display: 'block',
                position: 'absolute',
                width: 15,
                height: 15,
                background: '#fff',
                borderTop: '1px solid #e1e1e1',
                borderLeft: '1px solid #e1e1e1',
                transform:'rotate(45deg)',
                top: '-8px',
                left: '50px',
                zIndex: '-5',
            },
            '& .Select-option': {
                zIndex: 5,
            },
            '& .Select-option.is-selected': {
            },
        },
        '&.is-focused': {
            '& .Select-control': {
                borderColor: 'transparent',
                boxShadow: 'none',
            },
        },
    },
    terminBlock: {
        padding:20,
        marginBottom:20,
        '& a': {
            color: '#519be2',
            fontFamily: '"Exo 2"',
            fontSize: 19,
            textDecoration:'none',
            display:'inline-block',
            marginBottom:20,
            '&:hover': {
                color: '#5b86e5',
            },
        },
        '& div': {
            paddingTop:10,
            display:'flex',
            color: '#9299a2',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontWeight:300,
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
        padding:20,
        '& div': {
            width: '100%',
            height: 250,
            backgroundColor: '#5b86e5',
            color:'#fff',
            textAlign: 'center',
            paddingTop: '110px',
        },
    },
});
let options = [
    { value: '1', label: 'по алфавиту' },
];

class SectionWikiNavigationComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            activePage: 1,
        };
    };

    getFetchParams = (params) => {
        let limit, skip;
        limit = PAGE_LIMIT;
        skip =(params && params.activePage) ? (params.activePage-1)*PAGE_LIMIT : (this.props.activePage-1)*PAGE_LIMIT;
        return Object.assign({},{limit, skip}, params);
    };

    fetchData = (params) => {
        this.props.getWebWikiList(this.getFetchParams(params));
        this.props.getWebWikiCount();
    };

    changePagination = (page) => {
        this.props.setActiveWikiPage(page);
        this.fetchData({activePage: page});
    };

    handleChangeSelect = (name, value) => {
        if (value !== null) {
            this.setState({ [name]: value.value});
        } else {
            this.setState({[name]: 0});
        }
    };


    render() {
        const {classes, wikiList, count, activePage, path} = this.props;
        return (
            <section>
                <Grid container spacing={24} className={classes.root} align={'center'}>
                    <Grid item xs={12}>
                        <nav className={classes.navigation}>
                            <NavLink exact activeClassName="active" to='/'>Все</NavLink>
                            <NavLink activeClassName="active" to='/'>Недвижимость</NavLink>
                            <NavLink exact activeClassName="active" to='/'>Нотариус</NavLink>
                            <NavLink exact activeClassName="active" to='/'>оформление</NavLink>
                        </nav>
                    </Grid>
                </Grid>
                    <div className={classes.contentAbout}>
                        <Grid container spacing={24} className={classes.root} justify={"space-between"}>
                            <Grid item xs={12}>
                                <div className={classes.inputWrap}>
                                    <Input
                                        placeholder="Что вы ищете?"
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
                            <Grid item xs={12} sm={12} md={7}>
                                <Typography type="display2" component={"h2"} className={classes.pageTitle}>
                                    Термины и понятия в категории Недвижимость
                                </Typography>
                                <Typography type="caption" component={"div"} className={classes.subTitle}>
                                    Найдено терминов: {count ? count : 0}
                                    <div>
                                        Сортировать:
                                        <Select
                                            name="form-field-name"
                                            value={this.state.value1}
                                            options={options}
                                            onChange={val => this.handleChangeSelect('value1', val)}
                                            optionClassName="dropSelect"
                                            clearable={false}
                                            className={classes.selectFilter}
                                            placeholder="по алфавиту"
                                        />
                                    </div>
                                </Typography>

                                {(wikiList) ? wikiList.map(item =>
                                    <Paper className={classes.terminBlock} key={item.objectId}>
                                        <Typography type="body1" component={"h3"}>
                                            <Link to={"/wiki/"+ item.objectId}>
                                                {item.title}
                                            </Link>
                                        </Typography>
                                        <Typography type="caption" component={"p"} className={classes.pageText}>
                                            {item.content.blocks[0].text}
                                        </Typography>
                                        <Divider light />
                                        <div>
                                            <Typography type="caption" component={"span"} className={classes.badgeTermin}>
                                                недвижимость
                                            </Typography>
                                            <Typography type="caption" component={"p"}>
                                                {item && item.createdAt && moment(item.createdAt).format('YYYYMMDD') === moment().format('YYYYMMDD')
                                                    ? `Сегодня, ${moment(item.createdAt).format('HH:mm')}`
                                                    : moment(item.createdAt).locale('ru').format('DD MMMM YYYY, HH:mm') || null}
                                            </Typography>
                                        </div>
                                    </Paper>

                                ) : null}

                                <div className={classes.paginationBlock}>
                                    <Pagination currentPage={activePage}
                                                total={count}
                                                perPage={PAGE_LIMIT}
                                                onChange={this.changePagination}
                                                path={path}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4}>
                                <Typography type="body2">
                                    <Paper className={classes.asideBlock}>
                                        <div>350х250</div>
                                    </Paper>
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
            </section>
        );
    };
};

export default withStyles(styles)(SectionWikiNavigationComp);