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
import {Link} from 'react-router-dom';

// images
import LogoComp from './assets/images/logoComp.png';
import FilterImg from './assets/images/filter-bg.png';

import {CITY} from '../../constants/city';

const city = CITY;

const styles = theme => ({
    root: theme.root,
    filterMain: {
        backgroundImage: `url(${FilterImg})`,
        width:'100%',
        minHeight: '453px',
        backgroundSize: 'cover',
        backgroundRepeat:'no-repeat',
        position:'relative',
    },
    filterTitle: {
        color: '#ffffff',
        padding:'30px',
        textAlign:'center',
        fontWeight: 100,
    },
    filterWrap: {
        borderRadius: 3,
        backgroundColor: 'rgba( 0 , 0 , 0 , .8)',
        [theme.breakpoints.down('xs')]: {
            margin:'0px',
        }
    },
    filterDesc: {
        padding:'30px 0px',
        margin:'37px auto 0',
        minWidth: '700px',
        background: 'linear-gradient(to right, rgba(249,220,177,0) 0%,rgba(216,182,152,0.3) 50%,rgba(249,220,177,0) 100%)',
        textAlign:'center',
        position:'relative',
        '&:before': {
            content:'""',
            display:'block',
            width:'100%',
            height:'2px',
            background: 'linear-gradient(to right, rgba(249,220,177,0) 0%,rgba(216,182,152,0.3) 50%,rgba(249,220,177,0) 100%)',
            position:'absolute',
            top:0,
            left:0,
        },
        '& > p': {
            fontWeight:700,
        },
        [theme.breakpoints.down('md')]: {
            minWidth: '100%',
        }
    },
    link: {
        textDecoration: 'none',
    },
    searchButton: {
        borderRadius:'0 3px 3px 0',
        minWidth:97,
        boxShadow:'none',
        zIndex: 0,
        [theme.breakpoints.down('md')]: {
            minWidth: '100%',
            borderRadius:'0 0px 3px 3px',
        }
    },
    descText: {
        color:'#fff',
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
        // zIndex:99,
        padding: '11px 0',
        '@media (max-width: 768px)': {
            padding: '5px 0',
        },
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
            '& > .Select-option': {
                zIndex: 199,
                fontSize: 20,
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

let type = {
    sale : [
        {value: 'FlatSale', label: 'Квартира'},
        {value: 'RoomSale', label: 'Комната'},
        {value: 'HouseSale', label: 'Дом'},
        {value: 'OfficeSale', label: 'Офис'},
    ],
    rent :[
        {value: 'FlatRent', label: 'Квартира'},
        {value: 'RoomRent', label: 'Комната'},
        {value: 'HouseRent', label: 'Дом'},
        {value: 'OfficeRent', label: 'Офис'},
    ],
    newBuildings: [
        {value: 'NewBuildingFlatSale', label: 'Квартира'},
    ],
};

let flatRoomsCount = [
    { value: '1', label: '1 комн.' },
    { value: '2', label: '2 комн.' },
    { value: '3', label: '3 комн.' },
    { value: '4', label: '4 комн.' },
];


class SectionSearchComp extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
        this.props.setFilter(null);
    };

    handleChangePrice = (name) => (event) => {
        let filter =this.props.filter;
        if(name === 'PriceGte'){
            filter.Price && !filter.Price.lte ?
                this.props.setFilter(Object.assign({}, filter, {Price: (Object.assign({}, filter.Price, {gte: Number(event.target.value), lte: 1000000000}))})) :
                this.props.setFilter(Object.assign({}, filter, {Price: (Object.assign({}, filter.Price, {gte: Number(event.target.value)}))}));
        }
        if(name === 'PriceLte'){
            filter.Price && !filter.Price.gte ?
                this.props.setFilter(Object.assign({}, filter, {Price: (Object.assign({}, filter.Price, {gte: 0,lte: Number(event.target.value)}))})) :
                this.props.setFilter(Object.assign({}, filter, {Price: (Object.assign({}, filter.Price, {lte: Number(event.target.value)}))}))
        }
    };

    handleChangeSelect = name => (value) => {
        this.props.setFilter(Object.assign({}, this.props.filter, {[name]: value.value}))
        if(name === 'Address'){
            if(!value.subdomen){
                this.props.setSubdomen(null)
            }
            else {
                this.props.setSubdomen(value.subdomen)
            }
        }
    };

    handleChangeUrl = (subdomen, path,  filters) => (event)  => {
        event.preventDefault();
        this.props.goSubdomen(subdomen, path, filters)
    };


    render() {
        const {classes, filter} = this.props;
        const { value } = this.state;

        return (
            <section className={classes.filterMain}>
                <Grid container spacing={0} className={classes.root} justify='center'>
                    <Grid item xs={12} sm={12} md={12}>
                        <Typography type="display1" className={classes.filterTitle}>Вся недвижимость Беларуси на iMetr.by</Typography>
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
                                            instanceId='1'
                                            value={filter ? filter.type : ''}
                                            options={type.sale}
                                            onChange={this.handleChangeSelect('type')}
                                            optionClassName="dropSelect"
                                            clearable={false}
                                            className={classes.selectFilter}
                                            placeholder="Квартира"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3}>
                                        <Select
                                            instanceId='2'
                                            value={filter ? filter.FlatRoomsCount : ''}
                                            options={flatRoomsCount}
                                            onChange={this.handleChangeSelect('FlatRoomsCount')}
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
                                            onChange={this.handleChangePrice('PriceGte')}
                                            value={filter && filter.Price ? filter.Price.gte : '' }
                                            type="number"
                                        />
                                        <Input
                                            placeholder="до"
                                            className={classes.inputFilter}
                                            onChange={this.handleChangePrice('PriceLte')}
                                            value={filter && filter.Price ? filter.Price.lte : '' }
                                            type="number"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3}>
                                        <Select
                                            instanceId='3'
                                            value={filter ? filter.Address : ''}
                                            options={city}
                                            onChange={this.handleChangeSelect('Address')}
                                            optionClassName="dropSelect"
                                            clearable={false}
                                            className={classes.selectFilter}
                                            placeholder="Город"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={1}>
                                        <Button  onClick={this.handleChangeUrl(this.props.subdomen, '/kupit',filter)} raised color="primary" className={classNames(classes.button,classes.searchButton)}>
                                            Найти
                                        </Button>
                                    </Grid>
                                </Grid>
                                }</TabContainer>}
                            {value === 1 && <TabContainer>{
                                <Grid container spacing={0} className={classNames(classes.root,classes.filterContainer)}>
                                    <Grid item xs={12} sm={12} md={2}>
                                        <Select
                                            instanceId='4'
                                            value={filter ? filter.type : ''}
                                            options={type.rent}
                                            onChange={this.handleChangeSelect('type')}
                                            optionClassName="dropSelect"
                                            className={classes.selectFilter}
                                            clearable={false}
                                            placeholder="Квартира"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3}>
                                        <Select
                                            instanceId='5'
                                            value={filter ? filter.FlatRoomsCount : ''}
                                            options={flatRoomsCount}
                                            onChange={this.handleChangeSelect('FlatRoomsCount')}
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
                                            onChange={this.handleChangePrice('PriceGte')}
                                            value={filter && filter.Price ? filter.Price.gte : '' }
                                            type="number"
                                        />
                                        <Input
                                            placeholder="до"
                                            className={classes.inputFilter}
                                            onChange={this.handleChangePrice('PriceLte')}
                                            value={filter && filter.Price ? filter.Price.lte : '' }
                                            type="number"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3}>
                                        <Select
                                            instanceId='6'
                                            value={filter ? filter.Address : ''}
                                            options={city}
                                            onChange={this.handleChangeSelect('Address')}
                                            optionClassName="dropSelect"
                                            clearable={false}
                                            className={classes.selectFilter}
                                            placeholder="Город"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={1}>
                                        <Button onClick={this.handleChangeUrl(this.props.subdomen, '/snyat',filter)} raised color="primary" className={classNames(classes.button,classes.searchButton)}>
                                            Найти
                                        </Button>
                                    </Grid>
                                </Grid>
                            }</TabContainer>}
                            {value === 2 && <TabContainer>{
                                <Grid container spacing={0} className={classNames(classes.root,classes.filterContainer)}>
                                    <Grid item xs={12} sm={12} md={2}>
                                        <Select
                                            instanceId='7'
                                            value={filter ? filter.type : ''}
                                            options={type.newBuildings}
                                            onChange={this.handleChangeSelect('type')}
                                            optionClassName="dropSelect"
                                            clearable={false}
                                            className={classes.selectFilter}
                                            placeholder="Квартира"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3}>
                                        <Select
                                            instanceId='8'
                                            value={filter ? filter.FlatRoomsCount : ''}
                                            options={flatRoomsCount}
                                            onChange={this.handleChangeSelect('FlatRoomsCount')}
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
                                            onChange={this.handleChangePrice('PriceGte')}
                                            value={filter && filter.Price ? filter.Price.gte : '' }
                                            type="number"
                                        />
                                        <Input
                                            placeholder="до"
                                            className={classes.inputFilter}
                                            onChange={this.handleChangePrice('PriceLte')}
                                            value={filter && filter.Price ? filter.Price.lte : '' }
                                            type="number"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3}>
                                        <Select
                                            instanceId='9'
                                            value={filter ? filter.Address : ''}
                                            options={city}
                                            onChange={this.handleChangeSelect('Address')}
                                            optionClassName="dropSelect"
                                            clearable={false}
                                            className={classes.selectFilter}
                                            placeholder="Город"
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={1}>
                                        <Button onClick={this.handleChangeUrl(this.props.subdomen, '/novostroyki',filter)} raised color="primary" className={classNames(classes.button,classes.searchButton)}>
                                            Найти
                                        </Button>
                                    </Grid>
                                </Grid>
                            }</TabContainer>}
                        </div>
                        <div className={classes.filterDesc}>
                            <img src={LogoComp} alt={'ТАПАС'}/>
                            <Typography type="body1" className={classes.descText}>ЖК «Олимпик-Парк»</Typography>
                            <Typography type="caption" className={classes.descText}>В продаже 600 квартир по цене от 1 922 620 </Typography>
                            <Button raised color="contrast" className={classes.button}>
                                Подробнее
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </section>
        );
    };
};


export default withStyles(styles)(SectionSearchComp);


