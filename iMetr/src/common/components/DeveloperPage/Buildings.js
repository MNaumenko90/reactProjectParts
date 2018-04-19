import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';
import MetrIcon from '../../../common/components/Icon';
import Slider from 'react-slick'
import Divider from 'material-ui/Divider';

import image from './assets/images/build.png';


const styles = theme => ({
    root: theme.root,
    pageLink: {
        color: '#519be2',
        textDecoration:'none',
        fontFamily: `'Exo 2'`,
        marginLeft:59,
        [theme.breakpoints.down('md')]: {
            display: 'block',
            marginLeft: 0,
            marginBottom: 10,
        },
        '& span': {
            marginRight:6,
        },
    },
    pageTitle: {
        fontSize: 18,
        display:'inline-block',
        [theme.breakpoints.down('md')]: {
            display: 'block',
            marginBottom: 10,
        },
    },
    containerSlide: {
        position:'relative',
        '& .slick-prev': {
            position:'absolute',
            top:'-34px',
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
            [theme.breakpoints.down('md')]: {
                top: -10,
                right: 40,
            },
        },
        '& .slick-next': {
            position:'absolute',
            top:'-34px',
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
            [theme.breakpoints.down('md')]: {
                top: -10,
                right: 15,
            },
        },
    },
    containerSlideSecond: {
        position:'relative',
        padding: 10,
        '& .slick-slide': {
            color:'transparent',
        },
        '& .slick-next': {
            position:'absolute',
            top:'50%',
            right:9,
            background:'transparent',
            border: 'none',
            borderRadius:0,
            borderLeft:0,
            width:40,
            height:40,
            '&:before': {
                content:`'\\e939'`,
                fontFamily: 'imetr',
                color:'#fff',
                transform: 'rotate(180deg)',
                fontSize:30,
            },
        },
        '& .slick-prev': {
            position:'absolute',
            top:'50%',
            left:0,
            right:'inherit',
            background:'transparent',
            border: 'none',
            borderRadius:0,
            borderLeft:0,
            zIndex:9,
            width:40,
            height:40,
            '&:before': {
                content:`'\\e939'`,
                fontFamily: 'imetr',
                color:'#fff',
                transform: 'rotate(180deg)',
                fontSize:30,
                position:'absolute',
                top:3,
                left:8,
            },
        },
    },
    slideDesc: {
        '& span': {
            color: '#9299a2',
            fontSize: 14,
        },
        '& > div': {
            display:'flex',
            alignItems:'center',
            marginTop:15,
            '& span': {
                flex: '0 0 40%',
                color: '#1b2833',
            },
            '& span:first-child': {
                flex: '0 0 30%',
            },
            '& span:last-child': {
                flex: '0 0 30%',
                paddingLeft:3,
            },
        },
    },
    slideAdress: {
        marginTop:'11px',
        '& span': {
            marginBottom:20,
            [theme.breakpoints.down('md')]: {
                marginRight:17,
            },
        },
        '& span > span': {
            marginRight:10,
        },
        '& a': {
            textDecoration:'none',
            color:'#519be2',
            display:'block',
        },
    },
});
let settings = {
    dots: false,
    slidesToShow: 3,
    responsive: [{
        breakpoint: 900,
        settings: {
            slidesToShow: 2,
        }
    },{
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
        }
    },]
};
let settingsInSlide = {
    dots: false,
    slidesToShow: 1,
};
const items = [
    {
        itemName: 'Корпоратив 2015 г.',
    },
    {
        itemName: 'Корпоратив 2015 г.2',
    },
    {
        itemName: 'Корпоратив 2015 г.3',
    },
];
class Buildings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemName:'',
        };
    };
    render() {
        const {classes} = this.props;

        return (
            <Grid container spacing={24} className={classes.root}>
                <Grid item xs={12}>
                    <Typography type="body1" component={"h3"} className={classes.pageTitle}>
                        Строящиеся ЖК
                    </Typography>
                    <Link to="/" className={classes.pageLink}>Смотреть все 153 предложения</Link>
                    <Link to="/" className={classes.pageLink}><MetrIcon>map</MetrIcon>Все 153 предложения на карте</Link>
                </Grid>
                <Grid item xs={12} className={classes.containerSlide}>
                    <Slider {...settings}>
                        {items.map((item) => {
                            return (
                        <div className={classes.containerSlideSecond} key={item.itemName}>
                            <Slider {...settingsInSlide}>
                                <div>
                                    <img src={image} alt={'iMetr'} />
                                    <p style={{width:'300px'}}></p>
                                </div>
                            </Slider>
                            <div className={classes.slideDesc}>
                                <Typography type="body2" component={"p"} className={classes.slidePrice}>
                                    {this.state.itemName}
                                    ЖК «Мегаполис»
                                </Typography>
                                <Typography component={"p"} type="caption" className={classes.slideAdress}>
                                    Срок сдачи: 1 кв. 2019
                                </Typography>
                                <Typography component={"p"} className={classes.slideAdress}>
                                            <span>
                                            <MetrIcon>location</MetrIcon>
                                            ул. Буденого, д.25
                                            </span>
                                </Typography>
                                <div>
                                    <Typography component={"span"} type="caption">
                                        1-к от 38 м&sup2;
                                    </Typography>
                                    <span>
                                                <Divider light />
                                            </span>
                                    <Typography component={"span"} type="caption">
                                        1 258 р./м&sup2;
                                    </Typography>
                                </div>
                                <div>
                                    <Typography component={"span"} type="caption">
                                        2-к от 42 м&sup2;
                                    </Typography>
                                    <span>
                                                <Divider light />
                                            </span>
                                    <Typography component={"span"} type="caption">
                                        2 597 р./м&sup2;
                                    </Typography>
                                </div>
                                <div>
                                    <Typography component={"span"} type="caption">
                                        3-к от 63 м&sup2;
                                    </Typography>
                                    <span>
                                                <Divider light />
                                            </span>
                                    <Typography component={"span"} type="caption">
                                        3 788 р./м&sup2;
                                    </Typography>
                                </div>
                            </div>
                        </div>
                            )
                        })}
                    </Slider>
                </Grid>
            </Grid>

        )
    }
}
export default withStyles(styles)(Buildings);