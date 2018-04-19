import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import { Link , NavLink } from 'react-router-dom';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import Helmet from 'react-helmet';

// Components
import SectionRieltorsFilterComp from './SectionRieltorsFilter';
import AllRieltorsComp from './AllRieltors';
import Pagination from '../../../objects/components/Pagination';
//Images
import ListingBg from './assets/images/rieltorsBg.png';
import CrumbBg from './assets/images/crumbArrow.png';

const styles = theme => ({
    root: theme.root,
    crumbsBg: {
        background: `url(${ListingBg}) no-repeat`,
        backgroundSize:'cover',
        padding: '27px 0',
    },
    subHead: {
        color:'#fff',
        marginTop:76,
        fontSize:36,
        fontWeight: 100,
        [theme.breakpoints.down('sm')]: {
            marginTop: 0,
            fontSize: 32,
        },
    },
    crumbs: {
        margin:0,
        padding:0,
        listStyle: 'none',
        '& li': {
            display:'inline-block',
            color:'#9299a2',
            position:'relative',
            paddingRight:20,
            marginRight:10,
            '&:after': {
                position:'absolute',
                content:'""',
                background: `url(${CrumbBg}) no-repeat`,
                zIndex:2,
                top:6,
                right:0,
                color:'#fff',
                width:8,
                height:8,
                display:'block',
            },
            '&:last-child': {
                paddingRight:0,
                marginRight:0,
                '&:after': {
                    display:'none',
                },
            },
            '& a': {
                color:'#fff',
            },
        },
    },
    navigation: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
        },
        '& > a': {
            padding:'20px 3px',
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
    contentBgr: {
        background:'#f3f5f6',
        padding:'30px 0',
        borderTop: '1px solid #e1e1e1',
    },
    selectFilter: {
        fontFamily: `'Exo 2'`,
        zIndex:99,
        display:'inline-block',
        minWidth:183,
        verticalAlign: 'middle',
        '& .Select-control': {
            border: '1px solid #e1e1e1',
            borderRadius:3,
            boxShadow:'none',
            outline:0,
            padding:'5px 0',
            '& .Select-value-icon': {
                fontFamily:'Arial',
            },
            '& .Select-clear': {
                fontFamily:'Arial',
            },
            '& .Select-placeholder': {
                marginTop:5,
            },
            '& .Select-value': {
                marginTop:5,
            },
        },
        '& .Select-menu-outer': {
            top:'calc(100% + 15px)',
            zIndex:50,
            borderRadius:4,
            '&:before':{
                content: '""',
                display: 'block',
                position: 'absolute',
                width: 15,
                height: 15,
                background: '#fff',
                borderTop: '1px solid #fff',
                borderBottom: '1px solid #fff',
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
                borderColor: '#e1e1e1',
                boxShadow: 'none',
            },
        },
    },
    sortBlock: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'flex-start',
        },
        '& > span': {
            color: '#9299a2',
            marginRight:10,
        },
    },
    paginationWrapper: {
        textAlign: 'center',
    },
})

let optionsSort = [
    { value: '1', label: 'Квартира' },
    { value: '2', label: 'Комната' },
    { value: '3', label: 'Дом' },
    { value: '4', label: 'Офис' },
];

class ListingAgency extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value:'0',
            activePage: 1,
        };
    };
    handleChangeSelect = (name, value) => {
        if (value !== null) {
            this.setState({ [name]: value.value});
        } else {
            this.setState({[name]: 0});
        }
    };
    render() {
        const {classes, objectcount, activePage} = this.props;

        return (
                <div>
                    <Helmet>
                        <title>{`Риэлтеры, страница ${activePage? activePage : ''}`}</title>
                        <meta name = "description" content={`Список риэлтеров в Беларуси, страница-${activePage? activePage : ''}`} />
                    </Helmet>
                <main>
                    <SectionRieltorsFilterComp/>
                    <section className={classes.crumbsBg}>
                        <Grid container spacing={24} className={classes.root}>
                            <Grid item xs={12}>
                                <Typography type="subheading" component={"h1"} className={classes.subHead}>
                                    Риэлтеры, агенты
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <ul className={classes.crumbs}>
                                    <li>
                                        <Link to="/">
                                            <Typography type="caption">
                                                Недвижимость минска
                                            </Typography>
                                        </Link>
                                    </li>
                                    <li>
                                        <Typography type="caption">
                                            Риэлтеры, агенты
                                        </Typography>
                                    </li>
                                </ul>
                            </Grid>
                        </Grid>
                    </section>
                    <section>
                        <Grid container spacing={24} className={classes.root} align={'center'}>
                            <Grid item xs={12} sm={12} md={7}>
                                <nav className={classes.navigation}>
                                    {/*<NavLink activeClassName="active" to='/ListingAgency'>Агентства недвижимости</NavLink>*/}
                                    {/*<NavLink exact activeClassName="active" to='/Rieltors'>Риэлтеры и агенты</NavLink>*/}
                                    {/*<NavLink activeClassName="active" to='/Developers'>Застройщики</NavLink>*/}
                                </nav>
                            </Grid>
                            <Grid item xs={12} sm={12} md={5} className={classes.sortBlock}>
                                <Typography type="caption">
                                    Сортировать:
                                </Typography>
                                <Select
                                    name="form-field-name"
                                    value={this.state.value}
                                    options={optionsSort}
                                    onChange={val => this.handleChangeSelect('value', val)}
                                    optionClassName="dropSelect"
                                    clearable={false}
                                    className={classes.selectFilter}
                                    placeholder="по умолчанию"
                                />
                            </Grid>
                        </Grid>
                    <div className={classes.contentBgr}>
                    <AllRieltorsComp/>
                    <Grid container spacing={24} className={classes.root} justify={'center'}>
                        <Grid item xs={12} sm={12} md={4} className={classes.paginationWrapper}>
                            <Pagination currentPage={this.state.activePage}
                                        total={600}
                                        perPage={15}
                            />
                        </Grid>
                    </Grid>
                </div>
                </section>
                </main>
                </div>
        )
    }
    }
export default withStyles(styles)(ListingAgency);