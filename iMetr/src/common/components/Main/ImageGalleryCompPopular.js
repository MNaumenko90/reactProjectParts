import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import MetrIcon from '../Icon';
import {Link} from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import Grid from 'material-ui/Grid';
import classNames from 'classnames';
import { FLAT_RENT,FLAT_SALE,ROOM_SALE,ROOM_RENT,HOUSE_SALE,HOUSE_RENT,OFFICE_SALE,OFFICE_RENT } from '../../constants';

import ImageGallery from '../../../common/components/ImageGallery';

// Images
import NoPhoto from './assets/images/noPhoto.jpg';

const styles = theme => ({
    root: theme.root,
    slideDesc: {
        paddingTop:'15px',
        '& span': {
            color: '#9299a2',
            fontSize: 16,
        },
    },
    slidePrice: {
        marginBottom:'15px',
        fontWeight: 300,
        '& span': {
            marginLeft:50,
            [theme.breakpoints.down('md')]: {
                marginLeft:17,
            },
        },
    },
    slideAdress: {
        marginTop:'11px',
        '& span': {
            marginRight:50,
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
    itemSlDesc: {
        textTransform:'none',
        fontWeight: 300,
        '& span': {
            marginLeft:10,
            display:'inline-block',
            fontWeight: 100,
        },
    },
    imgWrap: {
        position:'relative',
        '& .image-gallery-left-nav, & .image-gallery-right-nav': {
            fontSize: '3em',
            zIndex:50,
        },
        '& > img': {
            minHeight:250,
        },
    },
    expand: {
        position:'absolute',
        zIndex:98,
        top: 0,
        right: 0,
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        color:'#e55b5b',
    },
    slideItem: {
        '&:hover $imgWrap': {
            boxShadow: '2px 8px 20px rgba(0, 0, 0, 0.2)',
            transition:'all .5s ease',
        },
        '& > div': {
            position:'relative',
            zIndex:10,
        },
    },

});

function TabContainer(props) {
    return <div>{props.children}</div>;
}
const priceCurrency = {
    usd: '$',
    byn: 'бел. руб.',
    eur: '€',
    rub: 'руб.',
};
const title = {
    FlatRent: `-комн. кв. в Минске`,
    FlatSale: `-комн. кв. в Минске`,
    RoomSale:`-комн. в Минске`,
    RoomRent:`-комн. в Минске`,
    HouseSale:"Продажа дома в Минске",
    HouseRent:"Аренда дома в минске",
    NewBuildings: `-комн. кв. в Минске`,
    OfficeSale: "Продажа офиса в Минске",
    OfficeRent: "Аренда офиса в Минске",
    OfficeDailyRent: "Аренда офиса в Минске",
};
const saleTabs = [FLAT_SALE, ROOM_SALE, HOUSE_SALE, OFFICE_SALE];
const rentTabs = [ FLAT_RENT, ROOM_RENT, HOUSE_RENT, OFFICE_RENT];

class ImageGalleryComp extends Component {
    state = {
        expanded: false,
    };

    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    handleRedirect = (name, type) => (event) => {
        if (event.target.nodeName !== 'BUTTON' && event.target.nodeName !== 'A') {
            window.location.replace(`/listing/${type}/${name}`);
        }
    };

    render() {
        const {classes, popular, tabState, mode} = this.props;
        let modeTabs = mode === 'Sale' ? saleTabs : rentTabs;

        return (
            <TabContainer>
                <Grid container spacing={40} className={classes.root}>

                    {popular[modeTabs[tabState]].map(object => (

                    <Grid item xs={12} sm={4} md={4} className={classes.slideItem} key={object.objectId}>
                        <div onClick={this.handleRedirect(object.objectId, object.type)}>
                            <div className={classes.imgWrap}>
                             {(object.Photos.length !== 0 ) ? (
                                    <ImageGallery
                                        items={object.Photos.map(photo => ({
                                            original: `${photo.PhotoURL? photo.PhotoURL : NoPhoto}?height=250`,
                                            originalClass: 'listingGallery'
                                        }))}
                                        slideInterval={2000}
                                        infinite={true}
                                        showThumbnails={false}
                                        showFullscreenButton={false}
                                        showPlayButton={false}
                                    />) : (<img className={classes.noPhoto} src={`${NoPhoto}`} alt="Фото отсутствует"/>)
                                }
                                {/*<IconButton*/}
                                    {/*className={classNames(classes.expand, {*/}
                                        {/*[classes.expandOpen]: this.state.expanded,*/}
                                    {/*})}*/}
                                    {/*onClick={this.handleExpandClick}*/}
                                    {/*aria-expanded={this.state.expanded}*/}
                                    {/*aria-label="Favorite"*/}
                                {/*>*/}
                                    {/*<MetrIcon>heart</MetrIcon>*/}
                                {/*</IconButton>*/}
                            </div>
                            <div className={classes.slideDesc}>
                                <Typography type="body2" component={"p"} className={classes.slidePrice}>
                                    {object.Price} {priceCurrency[object.PriceCurrency] || '$'}
                                    {object.PriceM2 ?
                                        <span>
                                                    {object.PriceM2} {priceCurrency[object.PriceCurrency] || '$'} за м&sup2;
                                                </span>
                                        : <span>н/д за м&sup2;</span>
                                    }
                                </Typography>
                                <Typography type="button" component={"p"} className={classes.itemSlDesc}>
                                    {object.FlatRoomsCount}{title[object.type]},
                                    {object.TotalArea ?
                                        <span>{object.TotalArea} м&sup2;</span>
                                        : <span>н/д м&sup2;</span>
                                    }
                                </Typography>
                                <Typography component={"p"} className={classes.slideAdress}>
                                                <span>
                                                    <MetrIcon>location</MetrIcon>
                                                    {object.Address}
                                                </span>

                                    <Link to='/'>на карте</Link>

                                </Typography>
                            </div>
                        </div>
                    </Grid>
                    ))}
                </Grid>
            </TabContainer>
        );
    };
}

export default withStyles(styles)(ImageGalleryComp);


