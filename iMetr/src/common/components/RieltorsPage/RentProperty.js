import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';
import MetrIcon from '../../../common/components/Icon';
import Slider from 'react-slick'

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
            [theme.breakpoints.down('md')]: {
                top: -10,
                right: 40,
            },
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
            top:'-34px',
            right:0,
            background:'#fff',
            border: '1px solid #d7d7d7',
            borderRadius:'0 15px 15px 0',
            borderLeft:0,
            width:25,
            [theme.breakpoints.down('md')]: {
                top: -10,
                right: 15,
            },
            '&:before': {
                content:`'\\e939'`,
                fontFamily: 'imetr',
                color:'#d7d7d7',
                transform: 'rotate(180deg)',
                fontSize:12,
            },
        },
    },
    containerSlideSecond: {
        position:'relative',
        padding:10,
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
            '&:before': {
                content:`'\\e939'`,
                fontFamily: 'imetr',
                color:'#fff',
                transform: 'rotate(180deg)',
                fontSize:20,
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
            '&:before': {
                content:`'\\e939'`,
                fontFamily: 'imetr',
                color:'#fff',
                transform: 'rotate(180deg)',
                fontSize:20,
                position:'absolute',
                top:3,
                left:8,
            },
        },
    },
    itemSlDesc: {
        textTransform:'none',
        fontSize:18,
        '& span': {
            marginLeft:50,
        },
    },
    slideDesc: {
        '& span': {
            color: '#9299a2',
            fontSize: 16,
        },
    },
    slideAdress: {
        marginTop:11,
        '& span > span': {
            marginRight:10,
        },
        '& a': {
            textDecoration:'none',
            color:'#519be2',
            [theme.breakpoints.down('sm')]: {
                fontSize: 18,
                lineHeight: '18px',
                marginTop: 5,
            },
        },
    },
});
const items = [
    {
        itemTitle: '3-комн. кв. в Минске,  148 м2',
    },
    {
        itemTitle: '2-комн. кв. в Минске,  148 м2',
    },
    {
        itemTitle: '1-комн. кв. в Минске,  148 м2',
    },
    {
        itemTitle: '4-комн. кв. в Минске,  148 м2',
    },
];
let settings = {
    dots: false,
    slidesToShow: 3,
    infinite:false,
    responsive: [{
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
class RentProperty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemTitle: '',
        };
    };
    render() {
        const {classes} = this.props;

        return (
            <Grid container spacing={24} className={classes.root}>
                <Grid item xs={12}>
                    <Typography type="body1" component={"h3"} className={classes.pageTitle}>
                        Аренда жилой недвижимости
                    </Typography>
                    <Link to="/" className={classes.pageLink}>Смотреть все 153 предложения</Link>
                    <Link to="/" className={classes.pageLink}><MetrIcon>map</MetrIcon>Все 153 предложения на карте</Link>
                </Grid>
                <Grid item xs={12} className={classes.containerSlide}>
                    <Slider {...settings}>
                        {items.map((item) => {
                            return (
                                <div className={classes.containerSlideSecond} key={item.itemTitle}>
                                    <Slider {...settingsInSlide}>
                                        <div>
                                            <img src={image} alt={'iMetr'} />
                                            <p style={{width:'300px'}}></p>
                                        </div>
                                    </Slider>
                                    <div className={classes.slideDesc}>
                                        <Typography component={"p"} className={classes.itemSlDesc}>
                                            302 846 р. <span>1 258 р/м2</span>
                                        </Typography>
                                        <Typography component={"p"} className={classes.slideAdress}>
                                            {item.itemTitle}
                                        </Typography>
                                        <Typography component={"p"} className={classes.slideAdress}>
                                                    <span>
                                                    <MetrIcon>location</MetrIcon>
                                                    ул. Буденого, д.25
                                                    </span>
                                            <Link to="/" className={classes.pageLink}>на карте</Link>
                                        </Typography>
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
export default withStyles(styles)(RentProperty);