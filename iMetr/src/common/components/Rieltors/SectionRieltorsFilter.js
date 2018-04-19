import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import classNames from 'classnames';
import Input from 'material-ui/Input';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import MetrIcon from '../Icon';


const styles = theme => ({
    root: theme.root,
    button: {
        textTransform: 'none',
        display: 'block',
        border: '1px solid #b0b5b8',
        background: 'none',
        position: 'relative',
        zIndex: 1,
        boxShadow:'none',
        float: 'right',
        borderRadius: 3,
        minWidth: '117px',
        padding: '11px 23px',
        [theme.breakpoints.down('md')]: {
            float: 'none',
            margin:'0 auto',
        },
        '& .icon': {
            marginRight:10,
        },
    },
    quidel: {
        background: '#b0b5b8',
        overflow: 'hidden',
        transition: 'color 0.3s',
        transitionTimingFunction: 'cubic-bezier(0.75, 0, 0.125, 1)',
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
    smallFilter: {
        background:'#f3f5f6',
        zIndex:99,
        padding:'15px 0',
    },
    inputSingleline: {
        padding: '10px 37px 10px 50px',
    },
    input: {
        position:'relative',
        width: '100%',
        backgroundColor:'#fff',
        border:'1px solid #e1e1e1',
        borderRadius: 3,
        '&:before': {
            content:`'\\e936'`,
            fontFamily: 'imetr',
            position:'absolute',
            display:'block',
            height:0,
            top: '15px',
            left: '22px',
        }
    },
    selectFilter: {
        fontFamily: `'Exo 2'`,
        zIndex:99,
        '& .Select-control': {
            border: '1px solid #e1e1e1',
            borderRadius:3,
            boxShadow:'none',
            outline:0,
            padding:'5px 0',
            '& .Select-value-icon': {
                fontFamily:'Arial',
            },
            '& .Select-clear': {
                fontFamily:'Arial',
            },
            '& .Select-placeholder': {
                marginTop:5,
            },
            '& .Select-value': {
                marginTop:5,
            },
        },
        '& .Select-menu-outer': {
            top:'calc(100% + 15px)',
            zIndex:50,
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
            },
        },
        '&.is-focused': {
            '& .Select-control': {
                borderColor: '#e1e1e1',
                boxShadow: 'none',
            },
        },
    },
});

let options = [
    { value: '1', label: 'Квартира' },
    { value: '2', label: 'Комната' },
    { value: '3', label: 'Дом' },
    { value: '4', label: 'Офис' },
];
let optionsCity = [
    { value: '1', label: 'Брест' },
    { value: '2', label: 'Гомель' },
    { value: '3', label: 'Гродно' },
    { value: '4', label: 'Минск' },
    { value: '5', label: 'Брест' },
    { value: '6', label: 'Гомель' },
    { value: '7', label: 'Гродно' },

];

class SectionRieltorsFilterComp extends Component {
    state = {
        valueCity:'0',
        valueSpecialization: '0',
    };

    handleChangeSelect = (name, value) => {
        if (value !== null) {
            this.setState({ [name]: value.value});
        } else {
            this.setState({[name]: 0});
        }
    };
    handleShowFilter(event) {
        event.preventDefault();
        this.setState({filterShowed: !this.state.filterShowed})
    }

    render() {
        const {classes} = this.props;
        const { value } = this.state;

        return (
            <section className={classes.smallFilter} style={{...this.props.style}}>
                <Grid container spacing={24} className={classes.root} align={'center'} justify={'center'}>
                    <Grid item xs={12} sm={12} md={4}>
                        <Input
                            className={classes.input}
                            inputProps={{
                                'aria-label': 'Description',
                            }}
                            classes={{
                                inputSingleline: classes.inputSingleline,
                            }}
                            placeholder="Название, номeр ID или  телефон"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <Select
                            name="form-field-name"
                            value={this.state.valueCity}
                            options={options}
                            onChange={val => this.handleChangeSelect('valueCity', val)}
                            optionClassName="dropSelect"
                            clearable={false}
                            className={classes.selectFilter}
                            placeholder="Специализация"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={2}>
                        <Select
                            name="form-field-name"
                            value={this.state.valueSpecialization}
                            options={optionsCity}
                            onChange={val => this.handleChangeSelect('valueSpecialization', val)}
                            optionClassName="dropSelect"
                            clearable={false}
                            className={classes.selectFilter}
                            placeholder="Город"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <Button raised className={classNames(classes.button,classes.quidel)}>
                            <MetrIcon>location</MetrIcon>Показать на карте
                        </Button>
                    </Grid>
                </Grid>
                {this.state.filterShowed ?
                    <SectionFullFilterComp handleShowFilter={this.handleShowFilter.bind(this)}/>
                    : null }
            </section>
        );
    };
};


export default withStyles(styles)(SectionRieltorsFilterComp);