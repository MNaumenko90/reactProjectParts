import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {Link} from 'react-router-dom';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';

import IntegrationAutosuggest from './Autosuggest'

const styles = theme => ({
    root: theme.root,

    popularCity: {
        padding:'17px 0',
        fontFamily: `'Exo 2'`,
        display:'flex',
        '& > a': {
            color:'#519be2',
            fontSize:16,
            textDecoration:'none',
            padding:'8px 19px',
            borderRadius: '3px',
        },
        [theme.breakpoints.down('md')]: {
            flexWrap: 'wrap',
            justifyContent: 'space-between',
        },
    },
    activePopular: {
        background:'#5b86e5',
        color:'#fff !important',
    },
    viewAllMenu: {
        color:'#1b2833 !important',
        textDecoration:'underline',
        position:'relative',
        '&:after': {
            position:'absolute',
            content:'"⌄"',
            display:'block',
            top:'7px',
            right:0,
            zIndex:10,
            color: '#1b2833',
        },
    },
    opened: {
        display:'block !important',
    },
    linksContainer: {
        display:'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& $popularCity': {
            '& > a': {
                textDecoration: 'underline !important',
            },
            '& > $activePopular': {
                textDecoration: 'none !important',
            },
        },
    },
    cityContainer: {
        fontFamily: `'Exo 2'`,
        display:'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        overflow: 'auto',
        height: 300,
        padding:'30px 0',
        '& > div': {
            display:'flex',
            flexDirection:'column',
            flex: '0 0 21%',
            marginBottom: 20,
            '& > a': {
                color:'#519be2',
                fontSize: 16,
                fontWeight: 300,
                textDecoration:'none',
                lineHeight: '26px',
                display:'inline-block',
            },
        },
    },
});

class CityDropComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showFullList: false,
        };
    }
    handleOpenCitys(event) {
        event.preventDefault();
        this.setState({showFullList: !this.state.showFullList})
    };

    render() {
        const {classes} = this.props;

        return (
            <div>
                <List>
                    <IntegrationAutosuggest/>
                </List>
                <List>
                    <div className={classes.popularCity}>
                        <Link to="/" className={classes.activePopular}>Минск</Link>
                        <Link to="/">Витебск</Link>
                        <Link to="/">Гродно</Link>
                        <Link to="/">Брест</Link>
                        <Link to="/">Барановичи</Link>
                        <Link to="/">Пинск</Link>
                        <Link to="/">Могилев</Link>
                        <Link to="/" className={classes.viewAllMenu} onClick={this.handleOpenCitys.bind(this)}>Весь список</Link>
                    </div>
                </List>
                {this.state.showFullList ?
                    <List className={classes.displayNone}>
                        <Divider light />
                        <div className={classes.linksContainer}>
                            <div>
                                <Typography component={"p"}>
                                    Города Беларуси
                                </Typography>
                            </div>
                            <div>
                                <div className={classes.popularCity}>
                                    <Link to="/" className={classes.activePopular}>ВСЕ</Link>
                                    <Link to="/">А</Link>
                                    <Link to="/">Б</Link>
                                    <Link to="/">В</Link>
                                    <Link to="/">Г</Link>
                                    <Link to="/">Д</Link>
                                    <Link to="/">Е</Link>
                                    <Link to="/">Ж</Link>
                                    <Link to="/">З</Link>
                                    <Link to="/">И</Link>
                                    <Link to="/">К</Link>
                                    <Link to="/">Л</Link>
                                    <Link to="/">М</Link>
                                    <Link to="/">Н</Link>
                                    <Link to="/">О</Link>
                                    <Link to="/">П</Link>
                                    <Link to="/">Р</Link>
                                    <Link to="/">С</Link>
                                    <Link to="/">Т</Link>
                                    <Link to="/">У</Link>
                                    <Link to="/">Ф</Link>
                                    <Link to="/">Х</Link>
                                    <Link to="/">Ц</Link>
                                    <Link to="/">Ч</Link>
                                    <Link to="/">Ш</Link>
                                    <Link to="/">Щ</Link>
                                    <Link to="/">Э</Link>
                                    <Link to="/">Ю</Link>
                                    <Link to="/">Я</Link>
                                </div>
                            </div>
                        </div>
                        <div className={classes.cityContainer}>
                            <div>
                            <Typography component={"p"}>
                                А
                            </Typography>
                                <Link to="/">Абакан </Link>
                                <Link to="/">Анадырь</Link>
                                <Link to="/">Архангельск</Link>
                                <Link to="/">Астрахань</Link>
                            </div>
                            <div>
                                <Typography component={"p"}>
                                    Б
                                </Typography>
                                <Link to="/">Бобруйск </Link>
                                <Link to="/">Барановичи</Link>
                                <Link to="/">Борисов</Link>
                                <Link to="/">Барань</Link>
                                <Link to="/">Белоозерск </Link>
                                <Link to="/"> Береза </Link>
                                <Link to="/">Березино </Link>
                                <Link to="/">Березовка</Link>
                                <Link to="/">Браслав </Link>
                                <Link to="/">Брест </Link>
                                <Link to="/"> Буда-Кошелево </Link>
                                <Link to="/">Быхов </Link>
                            </div>
                            <div>
                                <Typography component={"p"}>
                                    В
                                </Typography>
                                <Link to="/">Василевичи </Link>
                                <Link to="/">Верхнедвинск</Link>
                                <Link to="/">Ветка</Link>
                                <Link to="/">Вилейка </Link>
                                <Link to="/">Витебск </Link>
                                <Link to="/"> Волковыск </Link>
                                <Link to="/">Воложин </Link>
                                <Link to="/">Высокое</Link>
                            </div>
                            <div>
                                <Typography component={"p"}>
                                    Г
                                </Typography>
                                <Link to="/">Ганцевичи </Link>
                                <Link to="/">Глубокое</Link>
                                <Link to="/">Гомель</Link>
                                <Link to="/">Горки </Link>
                                <Link to="/">Городок </Link>
                                <Link to="/"> Гродно </Link>
                            </div>
                            <div>
                                <Typography component={"p"}>
                                    Д
                                </Typography>
                                <Link to="/">Давид-Городок  </Link>
                                <Link to="/"> Дзержинск</Link>
                                <Link to="/">Дисна </Link>
                                <Link to="/">Добруш </Link>
                                <Link to="/">Докшицы </Link>
                                <Link to="/"> Дрогичин  </Link>
                                <Link to="/"> Дубровно</Link>
                                <Link to="/">Дятлово </Link>
                            </div>
                            <div>
                                <Typography component={"p"}>
                                    Е
                                </Typography>
                                <Link to="/">Ельск </Link>
                            </div>
                            <div>
                                <Typography component={"p"}>
                                    Ж
                                </Typography>
                                <Link to="/">Жодино </Link>
                                <Link to="/">  Жабинка </Link>
                                <Link to="/">Житковичи </Link>
                                <Link to="/"> Жлобин </Link>
                            </div>
                            <div>
                                <Typography component={"p"}>
                                    И
                                </Typography>
                                <Link to="/">Иваново  </Link>
                                <Link to="/">   Ивацевичи </Link>
                                <Link to="/">Ивье </Link>
                            </div>
                            <div>
                                <Typography component={"p"}>
                                    Д
                                </Typography>
                                <Link to="/">Давид-Городок  </Link>
                                <Link to="/"> Дзержинск</Link>
                                <Link to="/">Дисна </Link>
                                <Link to="/">Добруш </Link>
                                <Link to="/">Докшицы </Link>
                                <Link to="/"> Дрогичин  </Link>
                                <Link to="/"> Дубровно</Link>
                                <Link to="/">Дятлово </Link>
                            </div>
                            <div>
                                <Typography component={"p"}>
                                    Е
                                </Typography>
                                <Link to="/">Ельск </Link>
                            </div>
                            <div>
                                <Typography component={"p"}>
                                    Ж
                                </Typography>
                                <Link to="/">Жодино </Link>
                                <Link to="/">  Жабинка </Link>
                                <Link to="/">Житковичи </Link>
                                <Link to="/"> Жлобин </Link>
                            </div>
                            <div>
                                <Typography component={"p"}>
                                    И
                                </Typography>
                                <Link to="/">Иваново  </Link>
                                <Link to="/">   Ивацевичи </Link>
                                <Link to="/">Ивье </Link>
                            </div>
                        </div>
                    </List>
                    : null}
            </div>

        )
    }
}

CityDropComp.propTypes = {
    children: PropTypes.node,
};

export default withStyles(styles)(CityDropComp);
