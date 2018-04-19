import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import MetrIcon from '../Icon';


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
        marginBottom:18,
        color: '#1b2833',
    },
    italicStyle: {
        fontWeight:100,
        lineHeight: '24px',
        marginBottom:44,
    },
    subTitle: {
        fontSize: '23px',
        marginBottom:20,
    },
    pageText: {
        marginBottom:47,
        fontWeight: 400,
        lineHeight: '24px',
        letterSpacing: 'normal',
        '@media (max-width: 768px)': {
            fontSize: 16,
            fontWeight: 300,
        },
    },
    bottomLinks: {
        '& > span': {
            color:'#9299a2',
        },
        '& > div':{
            display: 'inline-block',
            marginLeft: 30,
            [theme.breakpoints.down(1100)]: {
                display: 'block',
                marginTop: 10,
                marginLeft: 0,
            },
            '& > a': {
                color:'#519be2',
                marginRight:30,
                textDecoration:'none',
                [theme.breakpoints.down('xs')]: {
                   marginRight: 10,
                },
            },
        },

    },
    aside: {
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
        borderRadius: 3,
        backgroundColor: '#ffffff',
        marginLeft:75,
        padding:'23px 36px 18px 23px',
        fontSize: '14px',
        [theme.breakpoints.down('md')]: {
            marginLeft: 0,
        },
        '& > p > span': {
            display:'block',
            '& > span': {
                marginRight:8,
            },
        },
        '@media (max-width: 768px)': {
            fontSize: 16,
            fontWeight: 300,
        },
    },
});

class SectionAboutNavigationComp extends Component {


    render() {
        const {classes} = this.props;
        return (
            <section>
                <Grid container spacing={16} className={classes.root} align={'center'}>
                    <Grid item xs={12}>
                        <nav className={classes.navigation}>
                            <NavLink exact activeClassName="active" to='/about'>О проекте</NavLink>
                            <NavLink activeClassName="active" to='/contacts'>Контакты</NavLink>
                            <NavLink activeClassName="active" to='/faq'>FAQ</NavLink>
                        </nav>
                    </Grid>
                </Grid>
                    <div className={classes.contentAbout}>
                        <Grid container spacing={24} className={classes.root}>
                            <Grid item xs={12} sm={12} md={7}>
                                <Typography type="display2" component={"h2"} className={classes.pageTitle}>
                                    О проекте
                                </Typography>
                                <Typography type="body1" component={"i"} className={classes.italicStyle}>
                                    У нас было все: взлеты, падения и новые взлеты, ошибки и скрупулезная работа над ними.
                                    Мы, как команда альпинистов, покоряющих новую вершину, отворачиваясь от ударов непогоды и сложностей,
                                    подстерегающих нас, шаг за шагом продвигались вперед. К этому моменту, к новой верcии Квадрум.ру.
                                </Typography>
                                <Typography type="body2" component={"h2"} className={classes.subTitle}>
                                    И сегодня мы готовы рассказать, как все было…
                                </Typography>
                                <Typography type="caption" component={"p"} className={classes.pageText}>
                                    Интернет-проект Квадрум.ру стартовал 30 апреля 2005 как площадка для размещения объявлений
                                    об объектах недвижимости с фотографиями. Зона охвата – Москва и Московская область,
                                    Санкт-Петербург и Ленинградская область. Впоследствии сайт претерпел множество изменений.
                                </Typography>
                                <Typography type="body2" component={"h2"} className={classes.subTitle}>
                                    На смену старой версии приходит нановерсия
                                </Typography>
                                <Typography type="caption" component={"div"} className={classes.pageText}>
                                    <p>2014 год. Осень. Запущена новая версия единой базы недвижимости Квадрум.ру.</p>
                                    <p>Все 9 лет работы проекта ежедневно велся мониторинг поведенческой активности пользователей
                                    на сайте Квадрум.ру, все данные тщательно анализировались. Новая версия стала уникальным проектом,
                                    который предугадывает желания каждого посетителя. </p>
                                    <p>Сайт стал первым интерактивным ресурсом
                                    по подбору объектов недвижимости. Модернизирована система поиска, изменились принципы
                                    показа как объектов, так и рекламы на сайте.</p>
                                </Typography>
                                <Typography type="body2" component={"h2"} className={classes.subTitle}>
                                    Мы знаем, как завоевать мир
                                </Typography>
                                <Typography type="caption" component={"p"} className={classes.pageText}>
                                    Задачи, которые решает ресурс - это помощь посетителям сайта в аренде, сдаче, покупке или
                                    продаже недвижимости в максимально короткие сроки. Высокую популярность и доверие со стороны
                                    пользователей мы завоевали благодаря высокому качеству предоставляемых услуг. Квадрум.ру – результативный
                                    проект и мы доказываем это каждый день. Каждую минуту, 24 часа в сутки, 365 дней в году мы над этим работаем!
                                </Typography>
                                <div className={classes.bottomLinks}>
                                    <span>Вам может быть также  интересно: </span>
                                    <div>
                                        <Link to="/contacts">
                                            Контакты
                                        </Link>
                                        <Link to="/">
                                            Реклама
                                        </Link>
                                        <Link to="/faq">
                                            Поддержка
                                        </Link>
                                        <Link to="/">
                                            Вакансии
                                        </Link>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={5}>
                                <Typography type="body2" className={classes.aside}>
                                    <p>ООО «iMetr» <br/>УНП 191299645 </p>
                                    <p>Юридический адрес: 220020, Республика Беларусь, г. Минск, пр. Победителей, д.103, оф.1013</p>
                                    <p>Р/с: BY97OLMP30121000415150000933, в ОАО “Белгазпромбанк” </p>
                                    <p>
                                        <span>
                                            <MetrIcon>phone</MetrIcon>
                                            +375 (17) 236 13 70
                                        </span>
                                        <span>
                                            <MetrIcon>phone</MetrIcon>
                                            +375 (17) 236 13 70
                                        </span>
                                    </p>
                                    <p>
                                        <span><MetrIcon>mail</MetrIcon>info@imetr.by</span>
                                    </p>
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
            </section>
        );
    };
};


export default withStyles(styles)(SectionAboutNavigationComp);