import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Tabs, { Tab } from 'material-ui/Tabs';
import Button from 'material-ui/Button';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import classNames from 'classnames';
import Input from 'material-ui/Input';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import noMatch from './assets/images/404_bg.png';


const styles = theme => ({
    root: theme.root,
    filterMain: {
        backgroundImage: `url(${noMatch})`,
        width:'100%',
        minHeight: '661px',
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat',
        position:'relative',
    },
    filterTitle: {
        color: '#ffffff',
        padding:'81px 0 14px 0px',
        textAlign:'center',
        fontWeight: 100,
        fontSize: '40px',
        '& code': {
            fontWeight: 100,
            fontFamily: `'Exo 2'`,
        },
    },
    filterSubTitle: {
        color: '#ffffff',
        fontWeight: 100,
        paddingBottom:'65px',
        textAlign:'center',
        '& a': {
            color: '#ffffff',
        },
    },
    filterWrap: {
        borderRadius: 3,
        backgroundColor: 'rgba( 0 , 0 , 0 , .8)',
        [theme.breakpoints.down('xs')]: {
            margin:'0px',
        }
    },
    searchButton: {
        borderRadius:'0 3px 3px 0',
        minWidth:97,
        boxShadow:'none',
        [theme.breakpoints.down('md')]: {
            minWidth: '100%',
            borderRadius:'0 0px 3px 3px',
        }
    },
    filterContainer: {
        background:'#fff',
        borderRadius:3,
        '& > div': {
            borderLeft:'1px solid #e1e1e1',
        },
        '& > div:first-child': {
            borderLeft:'none',
        },
        '& > div:last-child': {
            borderLeft:'none',
        },
    },

    selectFilter: {
        fontFamily: `'Exo 2'`,
        zIndex:99,
        padding: '11px 0',
        '& .Select-control': {
            borderRadius:3,
            outline:0,
            borderColor:'transparent',
            boxShadow:'none',
            '& .Select-value-icon': {
                fontFamily:'Arial',
            },
            '& .Select-clear': {
                fontFamily:'Arial',
            },
        },
        '& .Select-menu-outer': {
            top:'calc(100% + 15px)',
            borderRadius:4,
            '&:before':{
                content: '""',
                display: 'block',
                position: 'absolute',
                width: 15,
                height: 15,
                background: '#fff',
                borderTop: '1px solid #fff',
                borderBottom: '1px solid #fff',
                transform:'rotate(45deg)',
                top: '-8px',
                left: '50px',
                zIndex: '-5',
            },
            '& .Select-option': {
                zIndex: 5,
            },
            '& .Select-option.is-selected': {
                position:'relative',
                '&:after': {
                    content:`'\\e909'`,
                    fontFamily: 'imetr',
                    position:'absolute',
                    display:'block',
                    right:17,
                    top:7,
                    color:'#5b86e5',
                },
            },
        },
        '&.is-focused': {
            '& .Select-control': {
                borderColor: 'transparent',
                boxShadow: 'none',
            },
        },
    },
    inputsWrap: {
        display:'flex',
    },
    inputFilter: {
        flex:'0 0 50%',
        padding:'6px 0 2px 0',
        '& > input': {
            height:'auto',
            padding:'15px 15px',
        },
        '&:first-child input': {
            borderRight:'1px solid #e1e1e1',
        },
    },
});


function TabContainer(props) {
    return <div style={{ padding: '10px 20px 20px' }}>{props.children}</div>;
};

let options = [
    { value: '1', label: 'Квартира' },
    { value: '2', label: 'Комната' },
    { value: '3', label: 'Дом' },
    { value: '4', label: 'Офис' },
];
let options1 = [
    { value: '1', label: '1 комн.' },
    { value: '2', label: '2 комн.' },
    { value: '3', label: '3 комн.' },
    { value: '4', label: '4 комн.' },
];
let options2 = [
    { value: '1', label: 'Минск' },
    { value: '2', label: 'Брест' },
    { value: '3', label: 'Гомель' },
    { value: '4', label: 'Гродно' },
    { value: '5', label: 'Минск' },
    { value: '6', label: 'Брест' },
    { value: '7', label: 'Гомель' },
    { value: '8', label: 'Гродно' },
];

class NoMatch extends Component {
    state = {
        value: 0,
        value1:0,
        value2:0,
        value3:0,
    };
    handleChange = (event, value) => {
        this.setState({ value });
    };
    handleChangeSelect = (name, value) => {
        if (value !== null) {
            this.setState({ [name]: value.value});
        } else {
            this.setState({[name]: 0});
        }
    };



    render() {
        const {classes,location,} = this.props;
        const { value } = this.state;

        return (
            <section className={classes.filterMain}>
                <Grid container spacing={0} className={classes.root} justify='center'>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography type="display1" className={classes.filterTitle}>Извините, страница <code>{location.pathname}</code> не найдена</Typography>
                        <Typography type="body1" className={classes.filterSubTitle}>Воспользуйтесь поиском ниже  или <Link to="/">перейдите на главную</Link></Typography>
                        <div className={classes.filterWrap}>
                            <Tabs
                                value={this.state.value}
                                onChange={this.handleChange}
                                centered
                            >
                                <Tab label="Продажа" />
                                <Tab label="Аренда" />
                                <Tab label="Новостройки" />
                            </Tabs>
                            {value === 0 && <TabContainer>{
                                <Grid container spacing={0} className={classNames(classes.root,classes.filterContainer)}>
                                    <Grid item xs={12} sm={12} md={2}>
                                        <Select
                                            name="form-field-name"
                                            value={this.state.value1}
                                            options={options}
                                            onChange={val => this.handleChangeSelect('value1', val)}
                                            optionClassName="dropSelect"
                                            clearable={false}
                                            className={classes.selectFilter}
                                            placeholder="Квартира"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3}>
                                        <Select
                                            name="form-field-name"
                                            value={this.state.value2}
                                            options={options1}
                                            onChange={val => this.handleChangeSelect('value2', val)}
                                            optionClassName="dropSelect"
                                            clearable={false}
                                            className={classes.selectFilter}
                                            placeholder="Кол-во комнат"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3} className={classes.inputsWrap}>
                                        <Input
                                            placeholder="от"
                                            className={classes.inputFilter}
                                            type="number"
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
                                        />
                                        <Input
                                            placeholder="до"
                                            className={classes.inputFilter}
                                            type="number"
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3}>
                                        <Select
                                            name="form-field-name"
                                            value={this.state.value3}
                                            options={options2}
                                            onChange={val => this.handleChangeSelect('value3', val)}
                                            optionClassName="dropSelect"
                                            clearable={false}
                                            className={classes.selectFilter}
                                            placeholder="Город"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={1}>
                                        <Button raised color="primary" className={classNames(classes.button,classes.searchButton)}>
                                            Найти
                                        </Button>
                                    </Grid>
                                </Grid>
                            }</TabContainer>}
                            {value === 1 && <TabContainer>{
                                <Grid container spacing={0} className={classNames(classes.root,classes.filterContainer)}>
                                    <Grid item xs={12} sm={12} md={2}>
                                        <Select
                                            name="form-field-name"
                                            value={this.state.valueSelect}
                                            options={options}
                                            onChange={this.handleChangeSelect}
                                            optionClassName="dropSelect"
                                            className={classes.selectFilter}
                                            placeholder="Поиск"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3}>
                                        <Select
                                            name="form-field-name"
                                            value={this.state.valueSelect1}
                                            options={options1}
                                            onChange={this.handleChangeSelect1}
                                            optionClassName="dropSelect"
                                            clearable={false}
                                            className={classes.selectFilter}
                                            multi={true}
                                            placeholder="Поиск"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3} className={classes.inputsWrap}>
                                        <Input
                                            placeholder="от"
                                            className={classes.inputFilter}
                                            type="number"
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
                                        />
                                        <Input
                                            placeholder="до"
                                            className={classes.inputFilter}
                                            type="number"
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3}>
                                        <Select
                                            name="form-field-name"
                                            value={this.state.valueSelect2}
                                            options={options2}
                                            onChange={this.handleChangeSelect2}
                                            optionClassName="dropSelect"
                                            clearable={false}
                                            className={classes.selectFilter}
                                            placeholder="Поиск"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={1}>
                                        <Button raised color="primary" className={classNames(classes.button,classes.searchButton)}>
                                            Найти
                                        </Button>
                                    </Grid>
                                </Grid>
                            }</TabContainer>}
                            {value === 2 && <TabContainer>{
                                <Grid container spacing={0} className={classNames(classes.root,classes.filterContainer)}>
                                    <Grid item xs={12} sm={12} md={2}>
                                        <Select
                                            name="form-field-name"
                                            value={this.state.valueSelect}
                                            options={options}
                                            onChange={this.handleChangeSelect}
                                            optionClassName="dropSelect"
                                            className={classes.selectFilter}
                                            placeholder="Поиск"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3}>
                                        <Select
                                            name="form-field-name"
                                            value={this.state.valueSelect1}
                                            options={options1}
                                            onChange={this.handleChangeSelect1}
                                            optionClassName="dropSelect"
                                            clearable={false}
                                            className={classes.selectFilter}
                                            multi={true}
                                            placeholder="Поиск"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3} className={classes.inputsWrap}>
                                        <Input
                                            placeholder="от"
                                            className={classes.inputFilter}
                                            type="number"
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
                                        />
                                        <Input
                                            placeholder="до"
                                            className={classes.inputFilter}
                                            type="number"
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3}>
                                        <Select
                                            name="form-field-name"
                                            value={this.state.valueSelect2}
                                            options={options2}
                                            onChange={this.handleChangeSelect2}
                                            optionClassName="dropSelect"
                                            clearable={false}
                                            className={classes.selectFilter}
                                            placeholder="Поиск"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={1}>
                                        <Button raised color="primary" className={classNames(classes.button,classes.searchButton)}>
                                            Найти
                                        </Button>
                                    </Grid>
                                </Grid>
                            }</TabContainer>}
                        </div>
                    </Grid>
                </Grid>
            </section>
        );
    };
};
NoMatch.propTypes = {
    children: PropTypes.node,
};

export default withStyles(styles)(NoMatch);


