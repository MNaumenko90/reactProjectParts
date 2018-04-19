import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import MetrIcon from '../Icon';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import classNames from 'classnames';
import Select from 'react-select';
import 'react-select/dist/react-select.css';



const styles = theme => ({
    root: theme.root,
    navigation: {
        '& > a': {
            padding:'15px 3px',
            marginRight:15,
            color:'#519be2',
            fontSize:16,
            textTransform: 'uppercase',
            textDecoration:'none',
            fontFamily: `'Exo 2'`,
            display:'inline-block',
            position:'relative',
            '&:last-child': {
                marginRight:0,
            },
        },
        '& .active': {
            color: '#1b2833',
            '&:after': {
                position:'absolute',
                content:'""',
                display:'block',
                width:'100%',
                height:3,
                background:'#5b86e5',
                left:0,
                bottom:0,
            },
        },
    },
    contentAbout: {
        backgroundImage: 'linear-gradient(to top, #ffffff 0%, #e9eeee 100%)',
        padding:'30px 0 50px 0',
        borderTop:'1px solid #cfd4d7',
    },
    pageTitle: {
        fontSize: 26,
        marginBottom:4,
        color: '#1b2833',
    },
    subTitle: {
        fontSize: '23px',
        marginBottom:20,
    },
    pageText: {
        marginBottom:31,
        fontWeight: 400,
        lineHeight: '24px',
        letterSpacing: 'normal',
        '& > a': {
            color:'#519be2',
            textDecoration:'none',
        },
        '@media (max-width: 768px)': {
            fontSize: 16,
            fontWeight: 300,
        },
    },
    aside: {
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
        borderRadius: 3,
        backgroundColor: '#ffffff',
        marginLeft:75,
        padding:'23px 36px 18px 23px',
        fontSize: '14px',
        [theme.breakpoints.down('md')]: {
            marginLeft: 0,
        },
        '& > p > span': {
            display:'block',
            '& > span': {
                marginRight:8,
            },
        },
        '@media (max-width: 768px)': {
            fontSize: 16,
            fontWeight: 300,
        },
    },
    formContainer: {
        display:'flex',
        flexDirection:'column',
    },
    formBtn: {
        width: 153,
        padding:'14px 8px',
        marginTop:10,
    },
    selectFilter: {
        fontFamily: `'Exo 2'`,
        zIndex:99,
        marginTop:15,
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
                color:'#1b2833',
                fontWeight:300,
                fontSize:16,
            },
            '& .Select-value': {
                marginTop:5,
            },
        },
        '& .Select-menu-outer': {
            top:'calc(100% + 10px)',
            zIndex:50,
            borderRadius:4,
            '&:before':{
                content: '""',
                display: 'block',
                position: 'absolute',
                width: 15,
                height: 15,
                background: '#fff',
                borderTop: '1px solid #e1e1e1',
                borderLeft: '1px solid #e1e1e1',
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


class SectionContactsNavigationComp extends Component {
    state = {
        value:0,
        name: [],
        valueSelect:0,
    };
    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    handleChangeSelect = (valueSelect) => {
        this.setState({ valueSelect });
    };

    render() {
        const {classes} = this.props;
        var options = [
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' }
        ];
        return (
            <section>
                <Grid container spacing={24} className={classes.root} align={'center'}>
                    <Grid item xs={12}>
                        <nav className={classes.navigation}>
                            <NavLink activeClassName="active" to='/about'>О проекте</NavLink>
                            <NavLink exact activeClassName="active" to='/contacts'>Контакты</NavLink>
                            <NavLink activeClassName="active" to='/faq'>FAQ</NavLink>
                        </nav>
                    </Grid>
                </Grid>
                    <div className={classes.contentAbout}>
                        <Grid container spacing={24} className={classes.root}>
                            <Grid item xs={12} sm={12} md={7}>
                                <Typography type="display2" component={"h2"} className={classes.pageTitle}>
                                    Контакты
                                </Typography>
                                <Typography type="caption" component={"p"} className={classes.pageText}>
                                    По вопросам рекламы и сотрудничества пишите на наш E-mail - <Link to='mailto:info@imetr.by'>info@imetr.by </Link><br/>
                                    Или введите данные своего запроса в форму обратной связи.
                                    Сотрудники нашей службы поддержки ответят вам в ближайшее время
                                </Typography>
                                <Typography type="body2" component={"h2"} className={classes.subTitle}>
                                    Задать вопрос
                                </Typography>
                                <form className={classes.formContainer} noValidate autoComplete="off">
                                    <Grid container>
                                        <Grid item xs={12} sm={12} md={10}>
                                            <TextField
                                                fullWidth
                                                label="Ваше имя"
                                                type="text"
                                                labelClassName={classes.formLabel}
                                                className={classes.textField}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={10}>
                                            <TextField
                                                fullWidth
                                                label="Ваш Email"
                                                type="text"
                                                autoComplete="current-password"
                                                labelClassName={classes.formLabel}
                                                className={classes.textField}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={10}>
                                            <Select
                                                name="form-field-name"
                                                value={this.state.valueSelect}
                                                options={options}
                                                onChange={this.handleChangeSelect}
                                                optionClassName="dropSelect"
                                                className={classes.selectFilter}
                                                placeholder="Выберите тему"
                                                clearable={false}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={10}>
                                            <TextField
                                                fullWidth
                                                label="Сообщение"
                                                type="text"
                                                autoComplete="current-password"
                                                labelClassName={classes.formLabel}
                                                multiline
                                                rows="6"
                                                className={classes.textField}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={10}>
                                            <Button raised color="primary"
                                                    className={classNames(classes.button, classes.formBtn)}>
                                                Отправить
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                            <Grid item xs={12} sm={12} md={5}>
                                <Typography type="body2" className={classes.aside}>
                                    <p>ООО «iMetr» <br/>УНП 191299645 </p>
                                    <p>Юридический адрес: 220020, Республика Беларусь, г. Минск, пр. Победителей, д.103, оф.1013</p>
                                    <p>Р/с: BY97OLMP30121000415150000933, в ОАО “Белгазпромбанк” </p>
                                    <p>
                                        <span>
                                            <MetrIcon>phone</MetrIcon>
                                            +375 (17) 236 13 70
                                        </span>
                                        <span>
                                            <MetrIcon>phone</MetrIcon>
                                            +375 (17) 236 13 70
                                        </span>
                                    </p>
                                    <p>
                                        <span><MetrIcon>mail</MetrIcon>info@imetr.by</span>
                                    </p>
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
            </section>
        );
    };
};


export default withStyles(styles)(SectionContactsNavigationComp);