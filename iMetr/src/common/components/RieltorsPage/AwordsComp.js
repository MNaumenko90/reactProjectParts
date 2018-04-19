import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Slider from 'react-slick'
import Typography from 'material-ui/Typography';
import Dialog, {
    DialogActions,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import MetrIcon from '../../../common/components/Icon';
//components

import image from './assets/images/aword.png';


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
    awordItem: {
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
            borderRadius:3,
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
    pageTitle: {
        color: '#9299a2',
    },
    allOfficesTitle: {
        display:'flex',
        fontSize:18,
        padding:30,
        alignItems:'center',
        justifyContent:'space-between',
        position:'relative',
    },
    closeModal: {
        cursor:'pointer',
        minWidth:50,
        position:'absolute',
        top:0,
        right:0,
        zIndex:1500,
    },
    slideItemModal: {
        display:'flex',
        padding:'30px 30px 30px 30px',
        '& span': {
            padding:'30px 0 30px 30px',
        },
        '& img': {
            marginRight:30,
        },
    },
    arrowModal: {
        position:'absolute',
        bottom:0,
        right:0,
    },
    bodyModal: {
        position:'relative',
    },
    arrowNext: {
        position:'relative',
        '&:before': {
            content:`'\\e939'`,
            fontFamily: 'imetr',
            color:'#519be2',
            transform: 'rotate(0deg)',
            fontSize:12,
            position:'absolute',
            top:11,
            right:0,
        },
        '&:hover': {
            backgroundColor:'transparent',
        },
    },
    arrowPrew: {
        position:'relative',
        '&:before': {
            content:`'\\e939'`,
            fontFamily: 'imetr',
            color:'#519be2',
            transform: 'rotate(180deg)',
            fontSize:12,
            position:'absolute',
            top:11,
            left:0,
        },
        '&:hover': {
            backgroundColor:'transparent',
        },
    },
});
let settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite:false,
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
let set = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
};
const items = [
    {
        itemName: `Realt Golden Key 2017`,
        itemDescr: `<span>Почетное звание за за вклад в развитие и популяризацию белорусской культуры.</span><span>Золотая медаль в номинации Социально ответственный брэнд, категория Активная социальная позиция.</span>`,
        itemTitle: `Диплом за участие в 26-й международной выставке «Здравоохранение - 2016»`,
    },
    {
        itemName: 'Realt Golden Key 201',
        itemDescr: 'Почетное звание за за вклад в развитие и популяризацию белорусской культуры.Золотая медаль в номинации Социально ответственный брэнд, категория Активная социальная позиция.',
        itemTitle: 'Диплом за участие в 26-й международной выставке «Здравоохранение - 2016»',
    },
    {
        itemName: 'Realt Golden Key 20',
        itemDescr: 'Почетное звание за за вклад в развитие и популяризацию белорусской культуры.Золотая медаль в номинации Социально ответственный брэнд, категория Активная социальная позиция.',
        itemTitle: 'Диплом за участие в 26-й международной выставке «Здравоохранение - 2016»',
    },
    {
        itemName: 'Realt Golden Key 2',
        itemDescr: 'Почетное звание за за вклад в развитие и популяризацию белорусской культуры.Золотая медаль в номинации Социально ответственный брэнд, категория Активная социальная позиция.',
        itemTitle: 'Диплом за участие в 26-й международной выставке «Здравоохранение - 2016»',
    },
    {
        itemName: 'Realt Golden Key',
        itemDescr: 'Почетное звание за за вклад в развитие и популяризацию белорусской культуры.Золотая медаль в номинации Социально ответственный брэнд, категория Активная социальная позиция.',
        itemTitle: 'Диплом за участие в 26-й международной выставке «Здравоохранение - 2016»',
    },
];

class AboutPress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            itemName:'',
            itemTitle:'',
            itemDescr:'',
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    };
    next() {
        this.slider.slickNext()
    };
    previous() {
        this.slider.slickPrev()
    };
    handleClickOpen = (item) => {
        this.setState({
            open: true ,
            itemName:item.itemName,
            itemTitle:item.itemTitle,
            itemDescr:item.itemDescr,
        });
    };

    handleRequestClose = () => {
        this.setState({ open: false });
    };

    render() {
        const {classes,fullScreen} = this.props;

        return (
            <Grid container spacing={24} className={classes.root}>
                <Grid item xs={12}>
                    <Typography type="caption" component={"span"} className={classes.pageTitle}>
                        Более 10 наград
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <div className={classes.containerSlide}>
                        <Slider {...settings}>
                            {items.map((item) => {
                                return (
                                    <div key={item.itemName} onClick={() => this.handleClickOpen(item)}>
                                        <div className={classes.awordItem}>
                                            <img src={image} alt={'iMetr'} />
                                            <Typography type="caption" component={"span"}>
                                                {this.state.itemTitle}
                                            </Typography>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                        <Dialog
                            open={this.state.open}
                            fullScreen={fullScreen}
                            maxWidth={"sm"}
                            className={classes.bodyModal}
                        >

                                    <Button className={classes.closeModal} onClick={this.handleRequestClose}>
                                        <MetrIcon>letter-x</MetrIcon>
                                    </Button>
                                    <div>
                                        <Slider ref={c => this.slider = c } {...set}>
                                            <div>
                                                <div className={classes.slideItemModal}>
                                                    <img src={image} alt={'iMetr'} />
                                                    <div>
                                                        <Typography type="body1" component={"p"}>
                                                            {this.state.itemName}
                                                        </Typography>
                                                        <Typography type="caption" component={"p"}>
                                                            {this.state.itemDescr}
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                            <DialogActions className={classes.arrowModal}>
                                <Button color="primary" onClick={this.previous} className={classes.arrowPrew}>
                                    Предыдущая
                                </Button>
                                <Button color="primary" onClick={this.next} className={classes.arrowNext}>
                                    Следующая
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                </Grid>
            </Grid>
        );
    };
}

export default withStyles(styles)(AboutPress);
