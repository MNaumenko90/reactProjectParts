import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import {Link} from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import classNames from 'classnames';
import Button from 'material-ui/Button';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import MetrIcon from '../Icon';

// images
import ImgCard1 from './assets/images/img-1.png';
import ImgCard2 from './assets/images/img-2.png';
import ImgCard3 from './assets/images/img-3.png';
import ImgCard4 from './assets/images/img-4.png';
import ImgCard5 from './assets/images/searchInMap.png';

const styles = theme => ({
    gradientBg: theme.gradientBg,
    root: theme.root,
    card: {
        display:'flex',
        height:'100%',
        overflow:'hidden',
        [theme.breakpoints.down('sm')]: {
            flexDirection:'column',
        },
    },
    cardRtl: {
        flexDirection:'row-reverse',
        overflow:'hidden',
        [theme.breakpoints.down('sm')]: {
            flexDirection:'column',
        },
    },
    media: {
        minHeight: 253,
        position:'relative',
        flex:'0 0 50%',
        '&:before': {
            content:'""',
            display:'block',
            width:'70px',
            height:'100%',
            position:'absolute',
            background: 'linear-gradient(to right, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%)',
            top:0,
            left:0,
            zIndex:2,
        },
    },
    mediaRtl: {
        '&:before': {
            content:'""',
            display:'block',
            width:'70px',
            height:'100%',
            position:'absolute',
            background: 'linear-gradient(to right, rgba(255,255,255,0) 0%,rgba(255,255,255,1) 100%)',
            top:0,
            right:0,
            left: 'inherit',
            zIndex:2,
        },
    },
    cardContent: {
        flex:'0 0 50%',
        padding:'0 0 0 0',
        '& > div': {
            padding : '30px 10px 30px 30px',
            lineHeight:1.5,
        },
        '& > div > p': {
            marginBottom:'17px',
        },
    },
    noneMedia: {
        flex:'0 0 100%',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            display:'block',
        },
    },
    searchInMap: {
        background: `url(${ImgCard5}) no-repeat`,
        backgroundSize: 'cover',
        flex:'0 0 100%',
        position:'relative',
        '&:before': {
            content:'""',
            position:'absolute',
            backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, #ffffff 50%, rgba(255, 255, 255, 0) 100%)',
            height:'100%',
            width:'100%',
            top:0,
            left:0,
            zIndex:2,
        },
        '& > div': {
            textAlign:'center',
            position:'relative',
            zIndex:3,
            padding:'35px 0 22px 0',
        },
    },
    searchMap : {
        color:'#5b86e5',
        fontSize: '45px',
        marginBottom:'15px',
        display: 'inline-block',
    },
    cardLink: {
        '& a': {
        textDecoration:'none',
        color:'#519be2',
        transition: 'transform 0.3s',
        marginRight: 5,
        '& :hover': {
            textDecoration:'underline',
            transition: 'transform 0.3s',
        },
        },
        '& span': {
            color:'#9299a2',
        }
    },
    quidel: {
        background: 'none',
        border: '1px solid #b0b5b8',
        overflow: 'hidden',
        transition: 'color 0.3s',
        position: 'relative',
        zIndex: 1,
        boxShadow:'none',
        textTransform: 'none',
        borderRadius: 3,
        transitionTimingFunction: 'cubic-bezier(0.75, 0, 0.125, 1)',
        display: 'block',
        margin: '0 auto',
        '&:after': {
            content: '""',
            position: 'absolute',
            zIndex: -1,
            top: '1px',
            left: '1px',
            right: '1px',
            bottom: '1px',
            background: '#fff',
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            zIndex: -1,
            background: '#1b2833',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            transform: 'translate3d(0, 100%, 0)',
            transition: 'transform 0.3s',
            transitionTimingFunction: 'cubic-bezier(0.75, 0, 0.125, 1)',
        },
        '&:hover': {
            '&:before': {
                transform: 'translate3d(0, 0, 0)',
            },
        },
    },
});

class SectionCardsComp extends Component {
    render() {
        const {classes} = this.props;

        return (
            <section className={classNames(classes.gradientBg)}>
                <Grid container spacing={16} className={classes.root}>
                    <Grid item xs={12} sm={6}>
                        <Card className={classNames(classes.card,classes.cardRtl)}>
                            <CardMedia
                                className={classes.media}
                                image={ImgCard1}
                                title="iMetr"
                            />
                            <CardContent className={classes.cardContent}>
                                <div>
                                    <Typography component="p">
                                        Купить квартиру
                                    </Typography>
                                    <Typography type="caption" className={classes.cardLink}>
                                        <Link to="/kupit-1-komnatnuyu-kvartiru">
                                            1-комнатные
                                        </Link>
                                        <span>41 988</span>
                                    </Typography><br/>
                                    <Typography type="caption" className={classes.cardLink}>
                                        <Link to="/kupit-2-komnatnuyu-kvartiru">
                                            2-комнатные
                                        </Link>
                                        <span>52 362</span>
                                    </Typography><br/>
                                    <Typography type="caption" className={classes.cardLink}>
                                        <Link to="/kupit-3-komnatnuyu-kvartiru">
                                            3-комнатные
                                        </Link>
                                        <span>40 304</span>
                                    </Typography>
                                    <br/>
                                    <Typography type="caption" className={classes.cardLink}>
                                        <Link to="/kupit-kvartiru-svobodnoy-planirovki">
                                            Свободная планировка
                                        </Link>
                                        <span>1 286</span>
                                    </Typography>
                                    <br/>
                                    <Typography type="caption" className={classes.cardLink}>
                                        <Link to="/kupit-kvartiru-studiu">
                                            Квартиры-студии
                                        </Link>
                                        <span>1 002</span>
                                    </Typography>
                                    <br/>
                                    <Typography type="caption" className={classes.cardLink}>
                                        <Link to="/kupit-komnatu">
                                            Комнаты в квартире
                                        </Link>
                                        <span>2 142</span>
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classNames(classes.card,classes.cardRtl)}>
                            <CardMedia
                                className={classes.media}
                                image={ImgCard2}
                                title="iMetr"
                            />
                            <CardContent className={classes.cardContent}>
                                <div>
                                    <Typography component="p">
                                        Снять квартиру
                                    </Typography>
                                    <Typography type="caption" className={classes.cardLink}>
                                        <Link to="/snyat-1-komnatnuyu-kvartiru">
                                            1-комнатные
                                        </Link>
                                        <span>41 988</span>
                                    </Typography>
                                    <br/>
                                    <Typography type="caption" className={classes.cardLink}>
                                        <Link to="/snyat-2-komnatnuyu-kvartiru">
                                            2-комнатные
                                        </Link>
                                        <span>52 362</span>
                                    </Typography>
                                    <br/>
                                    <Typography type="caption" className={classes.cardLink}>
                                        <Link to="/snyat-3-komnatnuyu-kvartiru">
                                            3-комнатные
                                        </Link>
                                        <span>40 304</span>
                                    </Typography>
                                    <br/>
                                    <Typography type="caption" className={classes.cardLink}>
                                        <Link to="/snyat-kvartiru-svobodnoy-planirovki">
                                            Свободная планировка  
                                        </Link>
                                        <span>1 286</span>
                                    </Typography>
                                    <br/>
                                    <Typography type="caption" className={classes.cardLink}>
                                        <Link to="/snyat-kvartiru-studiu">
                                            Квартиры-студии
                                        </Link>
                                        <span>1 002</span>
                                    </Typography>
                                    <br/>
                                    <Typography type="caption" className={classes.cardLink}>
                                        <Link to="/snyat-komnatu">
                                            Комнаты в квартире
                                        </Link>
                                        <span>2 142</span>
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classNames(classes.card)}>
                            <CardMedia
                                className={classNames(classes.media,classes.mediaRtl)}
                                image={ImgCard3}
                                title="iMetr"
                            />
                            <CardContent className={classes.cardContent}>
                                <div>
                                    <Typography component="p">
                                        Новостройки
                                    </Typography>
                                    <Typography type="caption" className={classes.cardLink}>
                                        <Link to="/novostroyki">
                                            Каталог ЖК
                                        </Link>
                                        <span>419 </span>
                                    </Typography>
                                    <br/>
                                    <Typography type="caption" className={classes.cardLink}>
                                        <Link to="/novostroyki-na-stadii-sdachi">
                                            Сданные новостройки
                                        </Link>
                                        <span>522</span>
                                    </Typography>
                                    <br/>
                                    <Typography type="caption" className={classes.cardLink}>
                                        <Link to="/novostroyki-stroyashiesya">
                                            Строящиеся новостройки
                                        </Link>
                                        <span>404 </span>
                                    </Typography>
                                    <br/>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classNames(classes.card)}>
                            <CardMedia
                                className={classNames(classes.media,classes.mediaRtl)}
                                image={ImgCard4}
                                title="iMetr"
                            />
                            <CardContent className={classes.cardContent}>
                                <div>
                                    <Typography component="p">
                                        Коммерческая  недвижимость
                                    </Typography>
                                    <Typography type="caption" className={classes.cardLink}>
                                        <Link to="/kupit-sklad">
                                            Купить склад
                                        </Link>
                                        <span>419 </span>
                                    </Typography>
                                    <br/>
                                    <Typography type="caption" className={classes.cardLink}>
                                        <Link to="/kupit-ofis">
                                            Купить офис  
                                        </Link>
                                        <span>522</span>
                                    </Typography>
                                    <br/>
                                    <Typography type="caption" className={classes.cardLink}>
                                        <Link to="/snyat-pomeshenie-svobodnogo-naznachenija">
                                            Арендовать помещение
                                        </Link>
                                        <span>404 </span>
                                    </Typography>
                                    <br/>
                                    <Typography type="caption" className={classes.cardLink}>
                                        <Link to="/snyat-ofis">
                                            Арендовать офис
                                        </Link>
                                        <span>522 </span>
                                    </Typography>
                                    <br/>
                                    <Typography type="caption" className={classes.cardLink}>
                                        <Link to="/snyat-sklad">
                                            Арендовать склад
                                        </Link>
                                        <span>404 </span>
                                    </Typography>
                                    <br/>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classNames(classes.card)}>
                            <CardContent className={classNames(classes.cardContent,classes.noneMedia)}>
                                <div>
                                    <Typography component="p">
                                        Объекты на карте
                                    </Typography>
                                    <Typography type="caption" className={classes.cardLink}>
                                        <Link to="/kupit-kvartiru">
                                            Продажа квартир
                                        </Link>
                                        <span>419</span>
                                    </Typography>
                                    <br/>
                                    <Typography type="caption" className={classes.cardLink}>
                                        <Link to="/kupit-komnatu">
                                            Продажа комнат
                                        </Link>
                                        <span>522</span>
                                    </Typography>
                                    <br/>
                                    <Typography type="caption" className={classes.cardLink}>
                                        <Link to="/kupit-dachu">
                                            Продажа дач  
                                        </Link>
                                        <span>419</span>
                                    </Typography>
                                    <br/>
                                    <Typography type="caption" className={classes.cardLink}>
                                        <Link to="/kupit-ofis">
                                            Продажа офисов
                                        </Link>
                                        <span>522</span>
                                    </Typography>
                                    <br/>
                                    <Typography type="caption" className={classes.cardLink}>
                                        <Link to="/kupit-sklad">
                                            Продажа складов
                                        </Link>
                                        <span>404</span>
                                    </Typography>
                                    <br/>
                                    <Typography type="caption" className={classes.cardLink}>
                                        <Link to="/kupit-torgovuyu-ploshad">
                                            Продажа торговых помещений
                                        </Link>
                                        <span>404</span>
                                    </Typography>
                                    <br/>
                                </div>
                                <div>
                                    <Typography type="caption" className={classes.cardLink}>
                                        <Link to="/snyat-kvartiru">
                                            Аренда квартир
                                        </Link>
                                        <span>419</span>
                                    </Typography>
                                    <br/>
                                    <Typography type="caption" className={classes.cardLink}>
                                        <Link to="/snyat-komnatu">
                                            Аренда комнат  
                                        </Link>
                                        <span>522</span>
                                    </Typography>
                                    <br/>
                                    <Typography type="caption" className={classes.cardLink}>
                                        <Link to="/snyat-dom">
                                            Аренда  дома
                                        </Link>
                                        <span>404</span>
                                    </Typography>
                                    <br/>
                                    <Typography type="caption" className={classes.cardLink}>
                                        <Link to="/snyat-ofis">
                                            Аренда офисов
                                        </Link>
                                        <span>522</span>
                                    </Typography>
                                    <br/>
                                    <Typography type="caption" className={classes.cardLink}>
                                        <Link to="/snyat-torgovuyu-ploshad">
                                            Аренда торговых помещений
                                        </Link>
                                        <span>404</span>
                                    </Typography>
                                    <br/>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classNames(classes.card)}>
                            <CardContent className={classNames(classes.cardContent,classes.searchInMap)}>
                                <div>
                                    <MetrIcon className={classes.searchMap}>map</MetrIcon>
                                    <Typography type="body2" component="p">
                                        Поиск на карте
                                    </Typography>
                                    <Typography  type="caption" component="p">
                                        Ищите новостройки рядом с работой, <br/>парком или родственниками
                                    </Typography>
                                    <Button raised className={classNames(classes.button,classes.quidel)}>
                                        Найти на карте
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </section>
        );
    };
};


export default withStyles(styles)(SectionCardsComp);


