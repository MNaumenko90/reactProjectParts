import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Slider from 'react-slick'
import Typography from 'material-ui/Typography';
//components

import image1 from './assets/images/listImg1.png';
import image2 from './assets/images/listImg4.png';
import image3 from './assets/images/listImg5.png';


const styles = theme => ({
    root: theme.root,
    containerSlide: {
        position:'relative',
        marginTop:15,
        '& .slick-prev': {
            position:'absolute',
            top:'-25px',
            right:25,
            left:'inherit',
            background:'#fff',
            border: '1px solid #d7d7d7',
            borderRadius:'15px 0 0 15px',
            width:25,
            '&:before': {
                content:`'\\e939'`,
                fontFamily: 'imetr',
                color:'#d7d7d7',
                transform: 'rotate(180deg)',
                fontSize:12,
                position:'absolute',
                top:3,
                left:8,
            },
        },
        '& .slick-next': {
            position:'absolute',
            top:'-25px',
            right:0,
            background:'#fff',
            border: '1px solid #d7d7d7',
            borderRadius:'0 15px 15px 0',
            borderLeft:0,
            width:25,
            '&:before': {
                content:`'\\e939'`,
                fontFamily: 'imetr',
                color:'#d7d7d7',
                transform: 'rotate(180deg)',
                fontSize:12,
            },
        },
        '& .slick-slide img':{
            [theme.breakpoints.down(1200)]: {
                width: '98%',
            },
            [theme.breakpoints.down('sm')]: {
                width: '100%',
            },
        },
    },
    pageTitle: {
        color: '#9299a2',
    },
    slideItem: {
        position: 'relative',
        '& span': {
            position:'absolute',
            color:'#fff',
            left:0,
            bottom:0,
            right:0,
            padding: '14px 12px 20px 22px',
            fontSize:16,
            '& small': {
                display:'block',
                opacity:.5,
                marginBottom:14,
            },
        },
    },
});

class AboutPress extends Component {


    render() {

        const {classes} = this.props;
        let settings = {
            dots: false,
            slidesToShow: 3,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }]
        };
        return (
            <Grid container spacing={24} className={classes.root}>
                <Grid item xs={12}>
                    <Typography type="caption" component={"span"} className={classes.pageTitle}>
                        Показано 3 новости из 15
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.containerSlide}>
                        <Slider {...settings}>
                            <div>
                                <div className={classes.slideItem}>
                                    <img src={image1} alt={'iMetr'} />
                                    <Typography type="caption" component={"span"}>
                                        <small>Lenta.ru</small>
                                        5 уловок туристических фирм, чтобы вы переплачивали
                                    </Typography>
                                </div>
                            </div>
                            <div>
                                <div className={classes.slideItem}>
                                    <img src={image2} alt={'iMetr'} />
                                    <Typography type="caption" component={"span"}>
                                        <small>Onliner.by</small>
                                        Получите шанс выиграть 1 000 рублей на оплату электроэнергии
                                    </Typography>
                                </div>
                            </div>
                            <div>
                                <div className={classes.slideItem}>
                                    <img src={image3} alt={'iMetr'} />
                                    <Typography type="caption" component={"span"}>
                                        <small>News.tut.by</small>
                                        Фотопроект «Крыши Минска». Самые дорогие виды столицы и задорная девушка в
                                    </Typography>
                                </div>
                            </div>
                            <div>
                                <div className={classes.slideItem}>
                                    <img src={image1} alt={'iMetr'} />
                                    <Typography type="caption" component={"span"}>
                                        <small>Lenta.ru</small>
                                        5 уловок туристических фирм, чтобы вы переплачивали
                                    </Typography>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </Grid>
            </Grid>
        );
    };
}

export default withStyles(styles)(AboutPress);
