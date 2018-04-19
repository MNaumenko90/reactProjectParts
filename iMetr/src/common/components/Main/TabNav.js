import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import {Link} from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    tabsMenu: {
        lineHeight: '30px',
        padding:'20px 0',
        [theme.breakpoints.down('sm')]: {
            margin:[-8, 0],
            padding:'0 10px',
        },
        '& a': {
            display:'block',
            color: '#519be2',
        },
    },
    viewAllMenu: {
        marginBottom:20,
        display:'inline-block',
        position:'relative',
        paddingRight:20,
        [theme.breakpoints.down('sm')]: {
            marginLeft: 10,
        },
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
    tabsHolder: {
        height: '176px',
        overflow: 'hidden',
        [theme.breakpoints.down('sm')]: {
            margin: [10,0],
        },
    },
    mystyle: {
        '& > div': {
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
    }
});

class TabNavComp extends Component {
    handleOpenStanse = event => {
        event.preventDefault();
        let linkShow = event.target;
        if (linkShow.textContent === 'Свернуть') {
            linkShow.textContent = 'Показать все станции';
        } else {
            linkShow.textContent = 'Свернуть';
        }
        linkShow.parentNode.parentNode.parentNode.parentNode.classList.toggle(this.props.classes.mystyle)
    }
    render() {
        const {classes} = this.props;
        return (
            <div>
                <div className={classes.tabsHolder}>
                <Grid container spacing={16} className={classes.root}>
                    <Grid item xs={12} sm={3}>
                        <div className={classes.tabsMenu}>
                            <Link to='/'>
                                <Typography type="caption">
                                    Автозаводская
                                </Typography>
                            </Link>
                            <Link to='/'>
                                <Typography type="caption">
                                    Грушевка
                                </Typography>
                            </Link>
                            <Link to='/'>
                                <Typography type="caption">
                                    Купаловская
                                </Typography>
                            </Link>
                            <Link to='/'>
                                <Typography type="caption">
                                    Молодёжная
                                </Typography>
                            </Link>
                            <Link to='/'>
                                <Typography type="caption">
                                    Парк Челюскинцев
                                </Typography>
                            </Link>
                            <Link to='/'>
                                <Typography type="caption">
                                    Площадь Ленина
                                </Typography>
                            </Link>
                            <Link to='/'>
                                <Typography type="caption">
                                    Пушкинская
                                </Typography>
                            </Link>
                            <Link to='/'>
                                <Typography type="caption">
                                    Фрунзенская
                                </Typography>
                            </Link>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <div className={classes.tabsMenu}>
                            <Link to='/'>
                                <Typography type="caption">
                                    Академия наук
                                </Typography>
                            </Link>
                            <Link to='/'>
                                <Typography type="caption">
                                    Институт культуры
                                </Typography>
                            </Link>
                            <Link to='/'>
                                <Typography type="caption">
                                    Малиновка
                                </Typography>
                            </Link>
                            <Link to='/'>
                                <Typography type="caption">
                                    Московская
                                </Typography>
                            </Link>
                            <Link to='/'>
                                <Typography type="caption">
                                    Партизанская
                                </Typography>
                            </Link>
                            <Link to='/'>
                                <Typography type="caption">
                                    Площадь Победы
                                </Typography>
                            </Link>
                            <Link to='/'>
                                <Typography type="caption">
                                    Спортивная
                                </Typography>
                            </Link>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <div className={classes.tabsMenu}>
                            <Link to='/'>
                                <Typography type="caption">
                                    Борисовский тракт
                                </Typography>
                            </Link>
                            <Link to='/'>
                                <Typography type="caption">
                                    Каменная горка
                                </Typography>
                            </Link>
                            <Link to='/'>
                                <Typography type="caption">
                                    Михалово
                                </Typography>
                            </Link>
                            <Link to='/'>
                                <Typography type="caption">
                                    Немига
                                </Typography>
                            </Link>
                            <Link to='/'>
                                <Typography type="caption">
                                    Первомайская
                                </Typography>
                            </Link>
                            <Link to='/'>
                                <Typography type="caption">
                                    Площадь Якуба Коласа
                                </Typography>
                            </Link>
                            <Link to='/'>
                                <Typography type="caption">
                                    Тракторный завод
                                </Typography>
                            </Link>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <div className={classes.tabsMenu}>
                            <Link to='/'>
                                <Typography type="caption">
                                    Восток
                                </Typography>
                            </Link>
                            <Link to='/'>
                                <Typography type="caption">
                                    Кунцевщина
                                </Typography>
                            </Link>
                            <Link to='/'>
                                <Typography type="caption">
                                    Могилёвская
                                </Typography>
                            </Link>
                            <Link to='/'>
                                <Typography type="caption">
                                    Октябрьская
                                </Typography>
                            </Link>
                            <Link to='/'>
                                <Typography type="caption">
                                    Петровщина
                                </Typography>
                            </Link>
                            <Link to='/'>
                                <Typography type="caption">
                                    Пролетарская
                                </Typography>
                            </Link>
                            <Link to='/'>
                                <Typography type="caption">
                                    Уручье
                                </Typography>
                            </Link>
                        </div>
                    </Grid>
                </Grid>
                </div>
                <Grid container spacing={24} className={classes.root}>
                    <Grid item xs={12} sm={4}>
                        <Link to='/' className={classes.viewAllMenu}>
                            <Typography type="caption" onClick={this.handleOpenStanse}>
                                Показать все станции
                            </Typography>
                        </Link>
                    </Grid>
                </Grid>
            </div>
        );
    };
};

export default withStyles(styles)(TabNavComp);


