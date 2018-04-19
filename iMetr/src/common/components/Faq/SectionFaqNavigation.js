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
import IconButton from 'material-ui/IconButton';
import Card, { CardContent, CardActions } from 'material-ui/Card';
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
        backgroundImage: 'linear-gradient(to top, #ffffff 0%, #e9eeee 100%)',
        padding:'30px 0 50px 0',
        borderTop:'1px solid #cfd4d7',
    },
    pageTitle: {
        fontSize: 26,
        marginBottom:4,
        color: '#1b2833',
    },
    subTitle: {
        fontSize: '23px',
        marginBottom:20,
    },
    pageText: {
        marginBottom:37,
        fontWeight: 400,
        lineHeight: '24px',
        letterSpacing: 'normal',
        '& > a': {
            color:'#519be2',
            textDecoration:'none',
        },
        '& > p:first-child': {
            marginTop:0,
        },
        '& > p:last-child': {
            marginBottom:0,
        },
        '@media (max-width: 768px)': {
            fontSize: 16,
            fontWeight: 300,
        },
    },
    aside: {
        borderRadius: 3,
        border: '1px solid #e1e1e1',
        backgroundColor: '#ffffff',
        marginLeft:74,
        [theme.breakpoints.down('md')]: {
            marginLeft: 0,
        },
    },
    inputWrap: {
        position:'relative',
    },
    inputSingleline: {
        padding: '10px 50px',
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
    collapseSubHead: {
        height:35,
    },
    collapseHead: {
        borderLeft:'3px solid #fff',
        fontSize:20,
        display: 'flex',
        height:54,
        justifyContent: 'space-between',
        padding: '2px 4px 2px 16px',
        '& > span': {
            padding:22,
            display:'inline-block',
        },
        '&:hover': {
            borderLeft:'3px solid #5b86e5',
        },
    },
    contentContainer: {
        '& > a': {
            fontSize:14,
            color:'#519be2',
            textDecoration:'none',
            padding:'5px 0 5px 16px',
            borderLeft:'1px solid #e1e1e1',
            display:'block',
            '&:hover': {
                color:'#9299a2',
                borderLeft:'2px solid #519be2',
                paddingLeft:15,
            },
        },
    },
    collapseContent: {
        padding:'0px 16px 16px 16px !important',
        '& > a': {
            color:'#519be2',
            textDecoration:'none',
            display:'block',
            fontSize:16,
            padding:'10px 0 10px 0px',
        },
    },
    subCollapse: {
        boxShadow:'none',
    },
    collapseMain: {
        boxShadow:'none',
        borderBottom:'1px solid #e1e1e1',
        fontWeight:400,
        '&:last-child': {
            borderBottom:'none',
        },
    },
    expand: {
        fontSize: 12,
        transform: 'rotate(90deg)',
        cursor:'pointer',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(270deg)',
    },
    expandX: {
        fontSize: 10,
        transform: 'rotate(45deg)',
        cursor:'pointer',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpenX: {
        transform: 'rotate(270deg)',
    },
    flexGrow: {
        flex: '1 1 auto',
    },
});


class SectionFaqNavigationComp extends Component {
    state = {
        expanded: false,
        expanded2: false,
        expanded3: true,
        expanded4: false,
        expanded5: false,
        expanded6: false,
        expanded7: false,
        expanded8: true,
    };

    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    };
    handleExpandClick2 = () => {
        this.setState({ expanded2: !this.state.expanded2 });
    };
    handleExpandClick3 = () => {
        this.setState({ expanded3: !this.state.expanded3 });
    };
    handleExpandClick4 = () => {
        this.setState({ expanded4: !this.state.expanded4 });
    };
    handleExpandClick5 = () => {
        this.setState({ expanded5: !this.state.expanded5 });
    };
    handleExpandClick6 = () => {
        this.setState({ expanded6: !this.state.expanded6 });
    };
    handleExpandClick7 = () => {
        this.setState({ expanded7: !this.state.expanded7 });
    };
    handleExpandClick8 = () => {
        this.setState({ expanded8: !this.state.expanded8 });
    };

    render() {
        const {classes} = this.props;
        return (
            <section>
                <Grid container spacing={24} className={classes.root} align={'center'}>
                    <Grid item xs={12}>
                        <nav className={classes.navigation}>
                            <NavLink activeClassName="active" to='/about'>О проекте</NavLink>
                            <NavLink activeClassName="active" to='/contacts'>Контакты</NavLink>
                            <NavLink exact activeClassName="active" to='/faq'>FAQ</NavLink>
                        </nav>
                    </Grid>
                </Grid>
                    <div className={classes.contentAbout}>
                        <Grid container spacing={24} className={classes.root}>
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
                                    Помощь
                                </Typography>
                                <Typography type="caption" component={"div"} className={classes.pageText}>
                                    <p>iMetr.by – интернет-сервис для покупателей и арендаторов жилья.  </p>
                                    <p>Ежедневно более 85000 человек решают свой жилищный вопрос при помощи iMetr.
                                        Перед вами краткая навигация по сайту с ответами на наиболее распространенные вопросы.</p>
                                </Typography>
                                <Typography type="body2" component={"h2"} className={classes.subTitle}>
                                    1. Как разместить объявление на сайте?
                                </Typography>
                                <Typography type="caption" component={"p"} className={classes.pageText}>
                                    Для того чтобы разместить объявление на сайтах «ЦИАН ГРУПП», необходимо зарегистрироваться.
                                    Заполнив один раз простую анкету, вы зарегистрируетесь одновременно на двух ведущих интернет-площадках
                                    по недвижимости — Cian.ru и Realty.dmir.ru, с совокупной аудиторией более 4 млн человек.
                                    Для авторизации на этих сайтах будет использоваться один и тот же логин / пароль.
                                    Смотрите нашу пошаговую инструкцию <Link to='/'>по размещению объявлений</Link>.
                                </Typography>
                                <Typography type="body2" component={"h2"} className={classes.subTitle}>
                                    2. Кто размещает объявления на сайте?
                                </Typography>
                                <Typography type="caption" component={"p"} className={classes.pageText}>
                                    На CIAN.ru размещаются объявления от частных лиц, агентств недвижимости и <Link to='/'>застройщиков</Link>.
                                </Typography>
                                <Typography type="body2" component={"h2"} className={classes.subTitle}>
                                    3. Какие преимущества имеют платные объявления?
                                </Typography>
                                <Typography type="caption" component={"p"} className={classes.pageText}>
                                    Практика показывает, что платные объявления достоверны в девяти случаях из десяти.
                                    Тогда как для бесплатных характерна скорее обратная пропорция.
                                    Это связано с особенностями рынка недвижимости.
                                    О платных возможностях на ЦИАН <Link to='/'>читайте здесь</Link>.
                                </Typography>
                                <Typography type="body2" component={"h2"} className={classes.subTitle}>
                                    4. Какие виды рекламы можно разместить на сайте?
                                </Typography>
                                <Typography type="caption" component={"p"} className={classes.pageText}>
                                    ЦИАН предоставляет возможности размещения медийной рекламы продуктов и услуг в сфере недвижимости и смежных с ней,
                                    таких как страхование, ипотечное и потребительское кредитование, юридические услуги, ремонт, переезды и т.д.
                                    Подробнее читайте <Link to='/'>здесь</Link>.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={5}>
                                <Typography type="body2" className={classes.aside}>
                                    <Card className={classes.collapseMain}>
                                        <CardActions disableActionSpacing className={classes.collapseHead}>
                                            <Typography component="p">
                                                Поиск по базе объявлений
                                            </Typography>
                                            <IconButton
                                                className={classNames(classes.expand, {
                                                    [classes.expandOpen]: this.state.expanded,
                                                })}
                                                onClick={this.handleExpandClick}
                                                aria-expanded={this.state.expanded}
                                                aria-label="Show more"
                                            >
                                                <MetrIcon>skip-track</MetrIcon>
                                            </IconButton>
                                        </CardActions>
                                        <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
                                            <CardContent className={classes.collapseContent}>
                                                <Typography type={"caption"}>
                                                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                                    minutes.
                                                </Typography>
                                            </CardContent>
                                        </Collapse>
                                    </Card>
                                    <Card className={classes.collapseMain}>
                                        <CardActions disableActionSpacing className={classes.collapseHead}>
                                            <Typography component="p">
                                                iMetr для профессионалов
                                            </Typography>
                                            <IconButton
                                                className={classNames(classes.expand, {
                                                    [classes.expandOpen]: this.state.expanded2,
                                                })}
                                                onClick={this.handleExpandClick2}
                                                aria-expanded={this.state.expanded2}
                                                aria-label="Show more"
                                            >
                                                <MetrIcon>skip-track</MetrIcon>
                                            </IconButton>
                                        </CardActions>
                                        <Collapse in={this.state.expanded2} transitionDuration="auto" unmountOnExit>
                                            <CardContent className={classes.collapseContent}>
                                                <Typography type={"caption"}>
                                                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                                    minutes.
                                                </Typography>
                                            </CardContent>
                                        </Collapse>
                                    </Card>
                                    <Card className={classes.collapseMain}>
                                        <CardActions disableActionSpacing className={classes.collapseHead}>
                                            <Typography component="p">
                                                Тарифы
                                            </Typography>
                                            <IconButton
                                                className={classNames(classes.expand, {
                                                    [classes.expandOpen]: this.state.expanded3,
                                                })}
                                                onClick={this.handleExpandClick3}
                                                aria-expanded={this.state.expanded3}
                                                aria-label="Show more"
                                            >
                                                <MetrIcon>skip-track</MetrIcon>
                                            </IconButton>
                                        </CardActions>
                                        <Collapse in={this.state.expanded3} transitionDuration="auto" unmountOnExit>
                                            <CardContent className={classes.collapseContent}>
                                                <Card className={classes.subCollapse}>
                                                    <CardActions disableActionSpacing className={classes.collapseSubHead}>
                                                        <IconButton
                                                            className={classNames(classes.expandX, {
                                                                [classes.expandOpenX]: this.state.expanded4,
                                                            })}
                                                            onClick={this.handleExpandClick4}
                                                            aria-expanded={this.state.expanded4}
                                                            aria-label="Show more"
                                                        >
                                                            <MetrIcon>letter-x</MetrIcon>
                                                        </IconButton>
                                                        <Typography type="caption">
                                                            Способы оплаты
                                                        </Typography>
                                                    </CardActions>
                                                    <Collapse in={this.state.expanded4} transitionDuration="auto" unmountOnExit>
                                                        <CardContent>
                                                            <Typography type="caption">
                                                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                                                minutes.
                                                            </Typography>
                                                        </CardContent>
                                                    </Collapse>
                                                </Card>
                                                <Card className={classes.subCollapse}>
                                                    <CardActions disableActionSpacing className={classes.collapseSubHead}>
                                                        <IconButton
                                                            className={classNames(classes.expandX, {
                                                                [classes.expandOpenX]: this.state.expanded7,
                                                            })}
                                                            onClick={this.handleExpandClick7}
                                                            aria-expanded={this.state.expanded7}
                                                            aria-label="Show more"
                                                        >
                                                            <MetrIcon>letter-x</MetrIcon>
                                                        </IconButton>
                                                        <Typography type="caption">
                                                            Спецпредложения – активные акции
                                                        </Typography>
                                                    </CardActions>
                                                    <Collapse in={this.state.expanded7} transitionDuration="auto" unmountOnExit>
                                                        <CardContent>
                                                            <Typography type="caption">
                                                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                                                minutes.
                                                            </Typography>
                                                        </CardContent>
                                                    </Collapse>
                                                </Card>
                                                <Card className={classes.subCollapse}>
                                                    <CardActions disableActionSpacing className={classes.collapseSubHead}>
                                                        <IconButton
                                                            className={classNames(classes.expandX, {
                                                                [classes.expandOpenX]: this.state.expanded8,
                                                            })}
                                                            onClick={this.handleExpandClick8}
                                                            aria-expanded={this.state.expanded8}
                                                            aria-label="Show more"
                                                        >
                                                            <MetrIcon>letter-x</MetrIcon>
                                                        </IconButton>
                                                        <Typography type="caption">
                                                            Архив тарифов и акций
                                                        </Typography>
                                                    </CardActions>
                                                    <Collapse in={this.state.expanded8} transitionDuration="auto" unmountOnExit>
                                                        <CardContent>
                                                            <div className={classes.contentContainer}>
                                                                <Link to="/">Изменение тарифов </Link>
                                                                <Link to="/">Новые тарифы в Ростове и Уфе </Link>
                                                                <Link to="/">Новые тарифы в Краснодаре и Казани </Link>
                                                                <Link to="/">Изменение тарифов в Нижегородской области </Link>
                                                                <Link to="/">Изменение тарифов в Санкт-Петербурге и Ленинградской области</Link>
                                                            </div>
                                                        </CardContent>
                                                    </Collapse>
                                                </Card>
                                                <Link to="/">Медийная реклама на ЦИАН</Link>
                                                <Link to="/">Цены</Link>
                                            </CardContent>
                                        </Collapse>
                                    </Card>
                                    <Card className={classes.collapseMain}>
                                        <CardActions disableActionSpacing className={classes.collapseHead}>
                                            <Typography component="p">
                                                Безопасность
                                            </Typography>
                                            <IconButton
                                                className={classNames(classes.expand, {
                                                    [classes.expandOpen]: this.state.expanded5,
                                                })}
                                                onClick={this.handleExpandClick5}
                                                aria-expanded={this.state.expanded5}
                                                aria-label="Show more"
                                            >
                                                <MetrIcon>skip-track</MetrIcon>
                                            </IconButton>
                                        </CardActions>
                                        <Collapse in={this.state.expanded5} transitionDuration="auto" unmountOnExit>
                                            <CardContent className={classes.collapseContent}>
                                                <Typography type="caption">
                                                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                                    minutes.
                                                </Typography>
                                            </CardContent>
                                        </Collapse>
                                    </Card>
                                    <Card className={classes.collapseMain}>
                                        <CardActions disableActionSpacing className={classes.collapseHead}>
                                            <Typography component="p">
                                                Служба качества
                                            </Typography>
                                            <IconButton
                                                className={classNames(classes.expand, {
                                                    [classes.expandOpen]: this.state.expanded6,
                                                })}
                                                onClick={this.handleExpandClick6}
                                                aria-expanded={this.state.expanded6}
                                                aria-label="Show more"
                                            >
                                                <MetrIcon>skip-track</MetrIcon>
                                            </IconButton>
                                        </CardActions>
                                        <Collapse in={this.state.expanded6} transitionDuration="auto" unmountOnExit>
                                            <CardContent className={classes.collapseContent}>
                                                <Typography type="caption">
                                                    Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                                    minutes.
                                                </Typography>
                                            </CardContent>
                                        </Collapse>
                                    </Card>
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
            </section>
        );
    };
};


export default withStyles(styles)(SectionFaqNavigationComp);