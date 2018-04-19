import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Tabs, { Tab } from 'material-ui/Tabs';
import Slider from 'react-slick';
import Dialog, {
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import MetrIcon from '../../../common/components/Icon';
import ImageGallery from '../../../common/components/ImageGallery';
//components

import image from './assets/images/party.png';
import NoPhoto from './assets/images/noPhoto.jpg';


const styles = theme => ({
    root: theme.root,
    labelContainer : {
        paddingLeft: '12px',
        paddingRight: '12px',
        [theme.breakpoints.down('sm')]: {
            padding:[0,4],
        },
    },
    label: {
        color: 'inherit',
        textTransform:'none',
    },
    rootInheritSelected: {
        color: '#fff !important',
        background:'#5b86e5 !important',
    },
    rootInherit: {
        color: '#1b2833',
        background:'#fff',
        height: 33,
        borderRight:'1px solid #b0b5b8',
        '&:last-child': {
            border:'none',
        },
        '&:after': {
            display:'none',
        },
        [theme.breakpoints.up('md')]: {
            minWidth: '97px',
        },
    },
    mainSlide: {
        position:'relative',
        display: 'inline-block',
        border: '1px solid #b0b5b8',
        borderRadius: 3,
        '& .indicator': {
            backgroundColor: 'transparent !important',
        },
    },
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
            [theme.breakpoints.down('md')]: {
                width: '95%',
            },
            [theme.breakpoints.down('sm')]: {
                width: '100%',
            },
        },
    },
    allOfficesTitle: {
        display:'flex',
        fontSize:18,
        alignItems:'center',
        justifyContent:'space-between',
        position:'relative',
        '& > div > span': {
            position:'absolute',
            bottom:5,
            left:5,
            zIndex:10,
            color: '#fefefe',
        },
        '& .image-gallery-left-nav, & .image-gallery-right-nav': {
            fontSize: '3em',
        },
    },
    closeModal: {
        cursor:'pointer',
        minWidth:50,
        position:'absolute',
        top:0,
        right:0,
        zIndex:1500,
    },
    noPhoto:{
        height: '100%',
    },
});

function TabContainer(props) {
    return <div>{props.children}</div>;
};
let settings = {
    dots: false,
    slidesToShow: 4,
    centerMode: false,
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 3,
        }
    }, {
        breakpoint: 900,
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
const images = [
    {
        original: image,
    },
    {
        original: image,
    },
    {
        original: image,
    },
    {
        original: image,
    },
    ];
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
    {
        itemName: 'Корпоратив 2015 г.4',
    },
];
class FotoGallery extends Component {
    state = {
        value: 0,
        open: false,
        itemName:'',
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleClickOpen = (item) => {
        this.setState({
            open: true ,
            itemName:item.itemName,
        });
    };

    handleRequestClose = () => {
        this.setState({ open: false });
    };

    render() {

        const {classes,fullScreen} = this.props;
        const { value } = this.state;
        return (
                <Grid container spacing={24} className={classes.root}>
                    <Grid item xs={12}>
                        <Tabs value={value} onChange={this.handleChange} className={classes.mainSlide}>
                            <Tab
                                label="Все"
                                classes={{
                                labelContainer: classes.labelContainer,
                                label: classes.label,
                                rootInherit: classes.rootInherit,
                                rootInheritSelected: classes.rootInheritSelected,
                            }} />
                            <Tab
                                label="Офис" classes={{
                                labelContainer: classes.labelContainer,
                                label: classes.label,
                                rootInherit: classes.rootInherit,
                                rootInheritSelected: classes.rootInheritSelected,
                            }} />
                            <Tab
                                label="Наша команда" classes={{
                                labelContainer: classes.labelContainer,
                                label: classes.label,
                                rootInherit: classes.rootInherit,
                                rootInheritSelected: classes.rootInheritSelected,
                            }} />
                            <Tab
                                label="Мероприятия" classes={{
                                labelContainer: classes.labelContainer,
                                label: classes.label,
                                rootInherit: classes.rootInherit,
                                rootInheritSelected: classes.rootInheritSelected,
                            }} />
                        </Tabs>
                    </Grid>
                    <Grid item xs={12}>
                        {value === 0 && <TabContainer>
                            <div className={classes.containerSlide}>
                                <Slider {...settings}>
                                    {items.map((item) => {
                                        return (
                                            <div key={item.itemName} onClick={() => this.handleClickOpen(item)}>
                                                <img src={image} alt={'iMetr'} />
                                            </div>
                                        )
                                    })}
                                </Slider>
                                <Dialog
                                    open={this.state.open}
                                    fullScreen={fullScreen}
                                    maxWidth={"md"}
                                >
                                    <Grid container className={classes.root} spacing={0}>
                                        <Grid item xs={12} className={classes.allOfficesTitle}>
                                            <Button className={classes.closeModal} onClick={this.handleRequestClose}>
                                                <MetrIcon>letter-x</MetrIcon>
                                            </Button>
                                            <div>
                                                {(images.length !==0 ) ? (
                                                    <ImageGallery
                                                        items={images}
                                                        slideInterval={2000}
                                                        infinite={true}
                                                        showThumbnails={false}
                                                        showFullscreenButton={false}
                                                        showPlayButton={false}
                                                    />) : (<img className={classes.noPhoto} src={`${NoPhoto}`} alt="Фото отсутствует"/>)
                                                }
                                                <Typography type="caption" component={"span"}>
                                                    {this.state.itemName}
                                                </Typography>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Dialog>
                            </div>
                        </TabContainer>}
                        {value === 1 && <TabContainer>
                            <div className={classes.containerSlide}>
                                <Slider {...settings}>
                                    {items.map((item) => {
                                        return (
                                            <div key={item.itemName} onClick={() => this.handleClickOpen(item)}>
                                                <img src={image} alt={'iMetr'} />
                                            </div>
                                        )
                                    })}
                                </Slider>
                            </div>
                        </TabContainer>}
                        {value === 2 && <TabContainer>
                            <div className={classes.containerSlide}>
                                <Slider {...settings}>
                                    {items.map((item) => {
                                        return (
                                            <div key={item.itemName} onClick={() => this.handleClickOpen(item)}>
                                                <img src={image} alt={'iMetr'} />
                                            </div>
                                        )
                                    })}
                                </Slider>
                            </div>
                        </TabContainer>}
                        {value === 3 && <TabContainer>
                            <div className={classes.containerSlide}>
                                <Slider {...settings}>
                                    {items.map((item) => {
                                        return (
                                            <div key={item.itemName} onClick={() => this.handleClickOpen(item)}>
                                                <img src={image} alt={'iMetr'} />
                                            </div>
                                        )
                                    })}
                                </Slider>
                            </div>
                        </TabContainer>}
                    </Grid>
                </Grid>
        );
    };
}

export default withStyles(styles)(FotoGallery);
