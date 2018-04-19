import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import MetrIcon from '../../../common/components/Icon';
import classNames from 'classnames';
import Helmet from 'react-helmet';

// Components
import BreadCrumbs from './BreadCrumbs';
import AgencyItem from './AgencyItem';
import AboutAgency from './AboutAgency';
import FotoGallery from './FotoGallery';
import VideoComp from './VideoComp';
import AboutPress from './AboutPress';
import NewsComp from './NewsComp';
import AwordsComp from './AwordsComp';
import Documents from './DocumentsComp';
import OurAgents from './OurAgents';
import Vacancy from './Vacancy';
import AgencyRate from './AgencyRate';
import Reviews from './Reviews';
import Forum from './Forum';
import SectionMap from './SectionMap';
import SaleProperty from './SaleProperty';
import RentProperty from './RentProperty';
//Images


const styles = theme => ({
    root: theme.root,
    fotoGallery: {
        borderTop: '1px solid #e1e1e1',
    },
    fotoSection: {
        backgroundImage: 'linear-gradient(to top, #ffffff 0%, #e9eeee 100%)',
        borderTop: '1px solid #e1e1e1',
        padding:'28px 0',
    },
    labelContainer : {
        padding:'0 12px',
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
    mainSlide: {
        position:'relative',
    },
    agents: {
        backgroundColor: '#f3f5f6',
        padding:'28px 0',
    },
    pageTitle: {
        fontSize: 18,
    },
    mainMap: {
        position:'relative',
        display: 'inline-block',
        border: '1px solid #b0b5b8',
        borderRadius: 3,
        '& .indicator': {
            backgroundColor: 'transparent !important',
        },
        '& $labelContainer': {
            paddingLeft: '12px',
            paddingRight: '12px',
            [theme.breakpoints.down('sm')]: {
                padding: [0, 4],
            },
        },
        '& $label': {
            color: 'inherit',
            textTransform:'none',
        },
        '& $rootInheritSelected': {
            color: '#fff !important',
            background:'#5b86e5 !important',
        },
        '& $rootInherit': {
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
                minWidth: '166px',
            },
        },
    },
    button:{
        textTransform: 'none',
        color: '#1b2833',
        fontSize: 14,
        borderRadius: 3,
        float:'right',
        border: '1px solid #b0b5b8',
        padding: '9px 13px 7px 13px',
        [theme.breakpoints.down('sm')]: {
            float:'none',
            margin: 0,
        },
        '& .icon': {
            marginRight:5,
        },
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
        [theme.breakpoints.down('sm')]: {
            margin: 0,
        },
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
    SaleProperty: {
        marginBottom:58,
        [theme.breakpoints.down('md')]: {
            marginBottom: 25,
        },
    },
    RentProperty: {
        marginBottom:58,
        [theme.breakpoints.down('md')]: {
            marginBottom: 25,
        },
    },
    containerMap: {
        height:400,
    },
    sectionMap: {
        marginBottom:30,
    },
});

function TabContainer(props) {
    return <div>{props.children}</div>;
};


class AgencyPage extends Component {
    state = {
        value: 0,
        onMapValue: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };
    handleChangeOnMap = (event, onMapValue) => {
        this.setState({ onMapValue });
    };

    render() {
        const {classes} = this.props;
        const { value,onMapValue } = this.state;

        return (
                <div>
                    <Helmet>
                        <title>Твоя столица</title>
                        <meta name = "description" content={"«ТВОЯ СТОЛИЦА.АГЕНТСТВО НЕДВИЖИМОСТИ» на рынке риэлтерских услуг с 1996 года.\n" +
                        "                            Основные принципы работы – ответственность, честность и юридическая безупречность.\n" +
                        "                            Этому способствуют постоянное развитие технологий и новых сервисов, контроль качества\n" +
                        "                            услуг и высокий профессионализм сотрудников."} />
                    </Helmet>
                <main>
                    <BreadCrumbs/>
                    <AgencyItem/>
                    <AboutAgency/>
                    <section className={classes.fotoGallery}>
                        <Grid container spacing={24} className={classes.root}>
                            <Grid item xs={12}>
                                <Tabs value={value}
                                      onChange={this.handleChange}
                                      className={classes.mainSlide}
                                      scrollable
                                      scrollButtons="off"
                                >
                                    <Tab
                                        label="Фотогалерея" classes={{
                                        labelContainer: classes.labelContainer,
                                        label: classes.label,
                                        rootInherit: classes.rootInherit,
                                        rootInheritSelected: classes.rootInheritSelected,
                                    }} />
                                    <Tab
                                        label="Видео презентации" classes={{
                                        labelContainer: classes.labelContainer,
                                        label: classes.label,
                                        rootInherit: classes.rootInherit,
                                        rootInheritSelected: classes.rootInheritSelected,
                                    }} />
                                    <Tab
                                        label="О нас в прессе" classes={{
                                        labelContainer: classes.labelContainer,
                                        label: classes.label,
                                        rootInherit: classes.rootInherit,
                                        rootInheritSelected: classes.rootInheritSelected,
                                    }} />
                                    <Tab
                                        label="Новости" classes={{
                                        labelContainer: classes.labelContainer,
                                        label: classes.label,
                                        rootInherit: classes.rootInherit,
                                        rootInheritSelected: classes.rootInheritSelected,
                                    }} />
                                    <Tab
                                        label="Наши награды" classes={{
                                        labelContainer: classes.labelContainer,
                                        label: classes.label,
                                        rootInherit: classes.rootInherit,
                                        rootInheritSelected: classes.rootInheritSelected,
                                    }} />
                                    <Tab
                                        label="Документы" classes={{
                                        labelContainer: classes.labelContainer,
                                        label: classes.label,
                                        rootInherit: classes.rootInherit,
                                        rootInheritSelected: classes.rootInheritSelected,
                                    }} />
                                </Tabs>
                            </Grid>
                        </Grid>
                            {value === 0 && <TabContainer>
                                <section className={classes.fotoSection}>
                                    <FotoGallery/>
                                </section>
                            </TabContainer>}
                            {value === 1 && <TabContainer>
                                <section className={classes.fotoSection}>
                                    <VideoComp/>
                                </section>
                            </TabContainer>}
                            {value === 2 && <TabContainer>
                                <section className={classes.fotoSection}>
                                    <AboutPress/>
                                </section>
                            </TabContainer>}
                            {value === 3 && <TabContainer>
                                <section className={classes.fotoSection}>
                                    <NewsComp/>
                                </section>
                            </TabContainer>}
                            {value === 4 && <TabContainer>
                                <section className={classes.fotoSection}>
                                    <AwordsComp/>
                                </section>
                            </TabContainer>}
                            {value === 5 && <TabContainer>
                                <section className={classes.fotoSection}>
                                    <Documents/>
                                </section>
                            </TabContainer>}
                    </section>
                    <section className={classes.agents}>
                        <OurAgents/>
                        <Vacancy/>
                    </section>
                    <AgencyRate/>
                    <section className={classes.agents}>
                        <Reviews/>
                    </section>
                    <Forum/>
                    <section className={classes.sectionMap}>
                        <Grid container spacing={24} className={classes.root} align={"center"}>
                            <Grid item xs={12}>
                                <Typography type="body1" component={"h3"} className={classes.pageTitle}>
                                    Объект на карте
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={8} md={9}>
                                <Tabs value={onMapValue} onChange={this.handleChangeOnMap} className={classes.mainMap}>
                                    <Tab
                                        label="Офис и объекты"
                                        classes={{
                                            labelContainer: classes.labelContainer,
                                            label: classes.label,
                                            rootInherit: classes.rootInherit,
                                            rootInheritSelected: classes.rootInheritSelected,
                                        }} />
                                    <Tab
                                        label="Наш офис" classes={{
                                        labelContainer: classes.labelContainer,
                                        label: classes.label,
                                        rootInherit: classes.rootInherit,
                                        rootInheritSelected: classes.rootInheritSelected,
                                    }} />
                                    <Tab
                                        label="Наши объекты" classes={{
                                        labelContainer: classes.labelContainer,
                                        label: classes.label,
                                        rootInherit: classes.rootInherit,
                                        rootInheritSelected: classes.rootInheritSelected,
                                    }} />
                                </Tabs>
                            </Grid>
                            <Grid item  xs={12} sm={4} md={3}>
                                <Button className={classNames(classes.button,classes.quidel)}>
                                    <MetrIcon>full-screen</MetrIcon>
                                    Карта на весь экран
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                {onMapValue === 0 && <TabContainer>
                                    <div className={classes.containerMap}>
                                        <SectionMap/>
                                    </div>
                                </TabContainer>}
                                {onMapValue === 1 && <TabContainer>
                                    <div className={classes.containerMap}>
                                        <SectionMap/>
                                    </div>
                                </TabContainer>}
                                {onMapValue === 2 && <TabContainer>
                                    <div className={classes.containerMap}>
                                        <SectionMap/>
                                    </div>
                                </TabContainer>}
                            </Grid>
                        </Grid>
                    </section>
                    <section className={classes.SaleProperty}>
                        <SaleProperty/>
                    </section>
                    <section className={classes.RentProperty}>
                        <RentProperty/>
                    </section>
                </main>
                </div>
        )
    }
}
export default withStyles(styles)(AgencyPage);