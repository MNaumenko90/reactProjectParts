import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Tabs, { Tab } from 'material-ui/Tabs';
import Divider from 'material-ui/Divider';

// Components
import ImageGalleryComp from './ImageGalleryCompPopular';


const styles = theme => ({
    root: theme.root,
    gradientBg: theme.gradientBg,
    mainSlide: {
        position:'relative',
    },
    slideItem: {
        display:'block',
        '& .image-gallery': {
            transition:'all .5s ease',
        },
        '&:hover .image-gallery': {
            boxShadow: '2px 8px 20px rgba(0, 0, 0, 0.2)',
            transition:'all .5s ease',
        },
    },
    wrapSlider: {
        marginTop:20,
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'block',
        },
        '& > span':{
            color: '#1b2833',
            fontFamily: `'Exo 2'`,
            fontSize: 18,
            textTransform: 'uppercase',
            margin: '4px 20px 0 0',
            fontWeight:300,
        },
    },
    labelContainer : {
        [theme.breakpoints.up('md')]: {
            paddingLeft: 0,
            paddingRight: 0,
        },
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '3px',
            paddingRight: '3px',
        },
    },
    label: {
      color: 'inherit',
    },
    rootInheritSelected: {
        color: '#000 !important',
    },
    rootInherit: {
        color: '#519be2',
        [theme.breakpoints.up('md')]: {
            minWidth: '97px',
        },
    },
});

class SectionPopularComp extends Component {


    state = {
        value: 0,
        value2: 0,
    };
    handleChange = (event, value) => {
        this.setState({ value });
    };
    handleChange2 = (event, value2) => {
        this.setState({ value2 });
    };

    render() {
        const {classes} = this.props;
        const { value, value2 } = this.state;

        return (
            <section className={classes.gradientBg}>
                <Typography type="display1" align={'center'} component={"h2"}>
                    Популярные объявления
                </Typography>
                <Grid container spacing={16} className={classes.root} style={{}}>
                    <Grid item xs={12}>
                        <div className={classes.wrapSlider}>
                            <span>Продажа:</span>
                            <Tabs
                                value={value}
                                onChange={this.handleChange}
                                className={classes.mainSlide}
                            >
                                <Tab label="Квартиры" classes={{
                                    labelContainer: classes.labelContainer,
                                    label: classes.label,
                                    rootInherit: classes.rootInherit,
                                    rootInheritSelected: classes.rootInheritSelected,
                                }} />
                                <Tab label="Комнаты" classes={{
                                    labelContainer: classes.labelContainer,
                                    label: classes.label,
                                    rootInherit: classes.rootInherit,
                                    rootInheritSelected: classes.rootInheritSelected,
                                }} />
                                <Tab label="Дома" classes={{
                                    labelContainer: classes.labelContainer,
                                    label: classes.label,
                                    rootInherit: classes.rootInherit,
                                    rootInheritSelected: classes.rootInheritSelected,
                                }} />
                                <Tab label="Офисы" classes={{
                                    labelContainer: classes.labelContainer,
                                    label: classes.label,
                                    rootInherit: classes.rootInherit,
                                    rootInheritSelected: classes.rootInheritSelected,
                                }} />
                            </Tabs>
                        </div>
                    </Grid>
                </Grid>
                <Divider light />
                <Grid container spacing={0} className={classes.root} style={{}}>
                    <Grid item xs={12}>
                        <ImageGalleryComp tabState={value}  popular={this.props.popular}  mode={'Sale'}/>
                    </Grid>
                </Grid>
                <Grid container spacing={16} className={classes.root} style={{}}>
                    <Grid item xs={12}>
                        <div className={classes.wrapSlider}>
                            <span>Аренда:</span>
                            <Tabs
                                value={value2}
                                onChange={this.handleChange2}
                                className={classes.mainSlide}
                            >
                                <Tab label="Квартиры" classes={{
                                    labelContainer: classes.labelContainer,
                                    label: classes.label,
                                    rootInherit: classes.rootInherit,
                                    rootInheritSelected: classes.rootInheritSelected,
                                }} />
                                <Tab label="Комнаты" classes={{
                                    labelContainer: classes.labelContainer,
                                    label: classes.label,
                                    rootInherit: classes.rootInherit,
                                    rootInheritSelected: classes.rootInheritSelected,
                                }} />
                                <Tab label="Дома" classes={{
                                    labelContainer: classes.labelContainer,
                                    label: classes.label,
                                    rootInherit: classes.rootInherit,
                                    rootInheritSelected: classes.rootInheritSelected,
                                }} />
                                <Tab label="Офисы" href="" classes={{
                                    labelContainer: classes.labelContainer,
                                    label: classes.label,
                                    rootInherit: classes.rootInherit,
                                    rootInheritSelected: classes.rootInheritSelected,
                                }} />
                            </Tabs>
                        </div>
                    </Grid>
                </Grid>
                <Divider light />
                <Grid container spacing={0} className={classes.root}>
                    <Grid item xs={12}>
                        <ImageGalleryComp tabState={value2}  popular={this.props.popular} mode={'Rent'}/>
                    </Grid>
                </Grid>

            </section>
        );
    };
};

export default withStyles(styles)(SectionPopularComp);