import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Tabs, { Tab } from 'material-ui/Tabs';
import Divider from 'material-ui/Divider';

// Components
import TabNavComp from './TabNav';


const styles = theme => ({
    root: {
        ...theme.root,
        [theme.breakpoints.down(1200)]: {
           padding: [0,10],
        },
    },
    footerTabs: {
        borderTop:'1px solid #e1e1e1',
        boxShadow: '0 -15px 30px rgba(146, 153, 162, 0.2)',
    },
    bottomTabs: {
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'flex-start',
        },
    },
    labelContainer : {
        [theme.breakpoints.up('md')]: {
            paddingLeft: 0,
            paddingRight: 0,
        },
        [theme.breakpoints.down('md')]: {
            paddingLeft: 6,
            paddingRight: 6,
        },
    },
    label: {
        color: '#519be2',
        fontSize: '18px',
    },
    rootInherit: {
        [theme.breakpoints.up('md')]: {
            minWidth: 'auto',
            marginRight: '20px',
        },
    },
});

function TabContainer(props) {
    return <div>{props.children}</div>;
}

class SectionBottomLinksComp extends Component {
    state = {
        value: 0,
    };
    handleChange = (event, value) => {
        this.setState({ value });
    };
    render() {
        const {classes} = this.props;
        const { value } = this.state;

        return (
            <section className={classes.footerTabs}>
                {/*<Grid container spacing={0} className={classes.root}>*/}
                    {/*<Grid item xs={12}>*/}
                            {/*<Tabs*/}
                                {/*value={value}*/}
                                {/*onChange={this.handleChange}*/}
                                {/*scrollable*/}
                                {/*scrollButtons="off"*/}
                            {/*>*/}
                                {/*{this.props.subdomen === null &&*/}
                                {/*<Tab label="Квартиры у метро" classes={{*/}
                                    {/*labelContainer: classes.labelContainer,*/}
                                    {/*label: classes.label,*/}
                                    {/*rootInherit: classes.rootInherit,*/}
                                {/*}}/>}*/}
                                {/*<Tab label="Квартиры в районе" classes={{*/}
                                    {/*labelContainer: classes.labelContainer,*/}
                                    {/*label: classes.label,*/}
                                    {/*rootInherit: classes.rootInherit,*/}
                                {/*}}/>*/}
                                {/*{this.props.subdomen === null &&*/}
                                {/*<Tab label="Квартиры в городах" classes={{*/}
                                    {/*labelContainer: classes.labelContainer,*/}
                                    {/*label: classes.label,*/}
                                    {/*rootInherit: classes.rootInherit,*/}
                                {/*}}/>}*/}
                                {/*{this.props.subdomen === null &&*/}
                                {/*<Tab label="Популярное"  classes={{*/}
                                    {/*labelContainer: classes.labelContainer,*/}
                                    {/*label: classes.label,*/}
                                    {/*rootInherit: classes.rootInherit,*/}
                                {/*}}/>}*/}
                            {/*</Tabs>*/}
                    {/*</Grid>*/}
                {/*</Grid>*/}
                {/*<Divider light />*/}
                {/*<Grid container spacing={0} className={classes.root}>*/}
                    {/*<Grid item xs={12}>*/}
                        {/*{value === 0 && <TabContainer><TabNavComp/></TabContainer>}*/}
                        {/*{value === 1 && <TabContainer><TabNavComp/></TabContainer>}*/}
                        {/*{value === 2 && <TabContainer><TabNavComp/></TabContainer>}*/}
                        {/*{value === 3 && <TabContainer><TabNavComp/></TabContainer>}*/}
                    {/*</Grid>*/}
                {/*</Grid>*/}
            </section>
        );
    };
};


export default withStyles(styles)(SectionBottomLinksComp);