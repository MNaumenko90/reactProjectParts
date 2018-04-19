import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Slider from 'react-slick'
import Typography from 'material-ui/Typography';
//components

import image from './assets/images/declarations.png';


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
    },
    pageTitle: {
        color: '#9299a2',
    },
    slideItem: {
        position:'relative',
        '& span': {
            color:'#fff',
            display:'none',
            background:'rgba( 0 , 0 , 0 , .5)',
            position: 'absolute',
            zIndex: 8,
            top: 0,
            left: 0,
            bottom: 0,
            textAlign:'center',
            paddingTop:'50%',
            borderRadius: 3,
        },
        '& img':{
            margin: 'auto',
        },
        '&:hover span': {
            display:'block',
        },
        '&:hover img': {
            filter: 'blur(3px)',
        },
    },
});

class Declarations extends Component {


    render() {

        const {classes} = this.props;
        let settings = {
            dots: false,
            slidesToShow: 4,
            responsive: [{
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 700,
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
                        10 разрешительных документов на строительство
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.containerSlide}>
                        <Slider {...settings}>
                            <div>
                                <div className={classes.slideItem}>
                                    <img src={image} alt={'iMetr'} />
                                    <Typography type="caption" component={"span"}>
                                        Свидетельство о государственной регистрации ООО iMetr
                                    </Typography>
                                </div>
                            </div>
                            <div>
                                <div className={classes.slideItem}>
                                    <img src={image} alt={'iMetr'} />
                                    <Typography type="caption" component={"span"}>
                                        Свидетельство о государственной регистрации ООО iMetr
                                    </Typography>
                                </div>
                            </div>
                            <div>
                                <div className={classes.slideItem}>
                                    <img src={image} alt={'iMetr'} />
                                    <Typography type="caption" component={"span"}>
                                        Свидетельство о государственной регистрации ООО iMetr
                                    </Typography>
                                </div>
                            </div>
                            <div>
                                <div className={classes.slideItem}>
                                    <img src={image} alt={'iMetr'} />
                                    <Typography type="caption" component={"span"}>
                                        Свидетельство о государственной регистрации ООО iMetr
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

export default withStyles(styles)(Declarations);
