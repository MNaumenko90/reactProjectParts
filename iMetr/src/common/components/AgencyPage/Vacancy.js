import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import classNames from 'classnames';
import MetrIcon from '../Icon';
import Dialog, {
    withMobileDialog,
    DialogActions,
} from 'material-ui/Dialog';
import Dropzone from 'react-dropzone';
//components
import asideBg from './assets/images/asideImg.png';
import drop from './assets/images/drop.png';



const styles = theme => ({
    root: theme.root,
    pageTitle: {
        fontSize: 18,
    },
    pageLink: {
        color: '#519be2',
        textDecoration:'none',
        fontFamily: `'Exo 2'`,
    },
    itemSlDesc: {
        textTransform:'none',
        marginBottom:5,
        '& span': {
            fontSize:14,
            color: '#9299a2',
            marginRight:15,
        },
    },
    itemMetro: {
        position:'relative',
        paddingLeft:15,
        '&:before': {
            content:'""',
            position:'absolute',
            width:10,
            height:10,
            background: '#be0505',
            borderRadius:20,
            top:4,
            left:0,
        },
    },
    vacancyDesc: {
    },
    mystyle: {
        '& $textHolder': {
            '& > div': {
                display:'block',
            },
        },
        '& $viewAllMenu': {
            '&:after': {
                position:'absolute',
                content:'"⌄"',
                display:'block',
                transform: 'rotate(180deg)',
                top:4,
            },
        },
    },
    textHolder: {
        padding:'0px !important',
        '& > div': {
            display:'none',
            padding:12,
            '& p': {
                marginTop:14,
            },
        },
    },
    viewAllMenu: {
        display:'inline-block',
        position:'relative',
        paddingRight:20,
        '&:after': {
            position:'absolute',
            content:'"⌄"',
            display:'block',
            top:0,
            right:0,
            zIndex:10,
            color: '#519be2',
        },
        '& span': {
            textDecoration: 'underline',
            color: '#519be2',
        },
    },
    button:{
        textTransform: 'none',
        color: '#1b2833',
        fontSize: 14,
        borderRadius: 3,
        border: '1px solid #b0b5b8',
        padding: '9px 13px 7px 13px',
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
    specialization: {
        marginTop:10,
        margin:0,
        padding:0,
        '& li': {
            color: '#1b2833',
            fontFamily: `'Exo 2'`,
            fontSize:14,
            listStyle:'none',
            position:'relative',
            paddingLeft:15,
            lineHeight:'22px',
            '&:before': {
                position:'absolute',
                content:'""',
                background:'#5b86e5',
                width:5,
                height:5,
                borderRadius:10,
                top:9,
                left:0,
            },
        },
    },
    vacancyPropose: {
        padding:'30px 20px 36px 20px',
        background: `url(${asideBg}) no-repeat`,
        backgroundSize:'cover',
        backgroundPosition: 'center',
        borderRadius:3,
        '& p': {
            color:'#fff',
            marginBottom:20,
        },
    },
    sendButton: {
        color:'#fff',
        margin:0,
    },
    allOfficesTitle: {
        display:'flex',
        fontSize:18,
        padding:'30px 60px 17px 30px',
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
    },
    modalContent: {
        padding:'0px 30px 15px 30px',
    },
    sendDocs: {
        padding: '10px 8px',
    },
    dropZone: {
        border:'none',
        background: `url(${drop}) no-repeat`,
        minHeight:60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        '& p': {
            flex:'0 0 80%',
        },
    },
    dropZoneWrap: {
        padding:'25px 25px 16px 25px',
        borderRadius: 3,
        border: '1px solid #d7d7d7',
        position:'relative',
        margin:'15px 0',
        '&:before': {
            position:'absolute',
            fontFamily: `'Exo 2'`,
            fontSize:14,
            color: '#9299a2',
            padding:8,
            content:'"Резюме"',
            top:'-18px',
            left:5,
            display:'block',
            zIndex:10,
            background:'#fff',
        },
    },
});

class OurAgents extends Component {
    constructor() {
        super()
        this.state = { files: [] , open: false, }
    };
    handleOpenStanse(event) {
        event.preventDefault();
        let linkShow = event.target;
        if (linkShow.textContent === 'Свернуть') {
            linkShow.textContent = 'Показать все';
        } else {
            linkShow.textContent = 'Свернуть';
        }
        linkShow.parentNode.parentNode.parentNode.classList.toggle(this.props.classes.mystyle)
    };
    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleRequestClose = () => {
        this.setState({ open: false });
    };
    onDrop(files) {
        this.setState({
            files:this.state.files.concat(files)
        });
    };
    render() {
        const {classes, fullScreen} = this.props;

        return (
            <div>
                <Grid container spacing={24} className={classes.root}>
                    <Grid item xs={12} sm={12} md={2}>
                        <Typography type="body1" component={"h3"} className={classes.pageTitle}>
                            Вакансии
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={10}>
                        <Link to="/" className={classes.pageLink}>Смотреть все 12 вакансий</Link>
                    </Grid>
                </Grid>
                <Grid container spacing={24} className={classes.root}>
                    <Grid item xs={12} sm={12} md={8}>
                        <Paper className={classes.vacancyBox}>
                            <Grid container spacing={24} className={classes.root}>
                                <Grid item xs={12} sm={12} md={8}>
                                    <Typography component={"p"} type={"body1"} className={classes.itemSlDesc}>
                                        Агент по недвижимости/Риелтер
                                    </Typography>
                                    <Typography component={"p"} className={classes.itemSlDesc}>
                                        <span>Минск</span>
                                        <span className={classes.itemMetro}>Фрунзенская</span>
                                        <span>20.11.2017</span>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4}>
                                    <Typography component={"p"} type={"body2"} className={classes.itemSlDesc}>
                                        700-1 500 <small>бел. руб.</small>
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={12}>
                                    <Typography component={"p"} type={"caption"} className={classes.vacancyDesc}>
                                        Прием звонков и консультирование. Осмотры и показы объектов.
                                        Заключение договоров. Контакт и работа с клиентами.
                                        Ответственность и исполнительность, пунктуальность.
                                        Высокая работоспособность. Прием звонков и консультирование.
                                        Осмотры и показы объектов. Заключение договоров.
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Divider light />
                            <Grid container spacing={24} className={classes.root} justify={"space-between"} align={"center"}>
                                <Grid item xs={12} className={classes.textHolder}>
                                    <div>
                                        <Typography component={"p"} type={"caption"} className={classes.vacancyDesc}>
                                            Наша компания в связи с расширением ищет активных и коммуникабельных
                                            людей на должность специалиста по операциям с недвижимостью.
                                        </Typography>
                                        <Typography component={"p"} type={"body1"} className={classes.itemSlDesc}>
                                            Обязанности
                                        </Typography>
                                            <ul className={classes.specialization}>
                                                <li>работа с базой объектов недвижимости , </li>
                                                <li> звонки консультирование клиентов,</li>
                                                <li>работа с документами, </li>
                                                <li> сопровождение клиента на всех этапах,  </li>
                                            </ul>
                                        <Typography component={"p"} type={"body1"} className={classes.itemSlDesc}>
                                            Требования
                                        </Typography>
                                        <ul className={classes.specialization}>
                                            <li>коммуникабельность , </li>
                                            <li>стрессоустойчивость ,</li>
                                            <li> вежливость, </li>
                                            <li>желание и умение самостоятельно</li>
                                        </ul>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <Link to="/" className={classes.viewAllMenu}>
                                        <Typography type="caption" onClick={this.handleOpenStanse.bind(this)}>
                                            Полное описание
                                        </Typography>
                                    </Link>
                                </Grid>
                                <Grid item xs={12} sm={6} md={3}>
                                    <Button className={classNames(classes.button,classes.quidel)}>Откликнуться</Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <div className={classes.vacancyPropose}>
                            <Typography component={"p"} type={"body1"} className={classes.itemSlDesc}>
                                Работа у нас – отличный способ реализовать свои возможности!
                            </Typography>
                            <Typography type="caption" component={"p"}>
                                Группа компаний «Твоя столица» - лидер столичного рынка недвижимости.
                            </Typography>
                            <Typography type="caption" component={"p"}>
                                Мы работаем во всех сегментах рынка: от купли-продажи квартир до
                                инвестиционного консалтинга и управления проектами.
                            </Typography>
                            <Typography type="caption" component={"p"}>
                                Наша организация неоднократно признавалась лучшей среди риэлтерских.
                            </Typography>
                            <Typography type="caption" component={"p"}>
                                6 офисов в Минске, команда - более чем 180 опытных специалистов,
                                положительные отзывы наших клиентов – результат многолетней
                                кропотливой работы всех членов нашей команды.
                            </Typography>
                            <Button raised color="contrast" className={classNames(classes.button,classes.sendButton)} onClick={this.handleClickOpen}>
                                Отправить резюме
                            </Button>
                            <Dialog
                                open={this.state.open}
                                fullScreen={fullScreen}
                                maxWidth={"sm"}
                            >
                                <Grid container className={classes.root} spacing={0}>
                                    <Grid item xs={12} className={classes.allOfficesTitle}>
                                        <Typography type="body1" component={"h3"} className={classes.pageTitle}>
                                            Отправить резюме
                                        </Typography>
                                        <Button className={classes.closeModal} onClick={this.handleRequestClose}>
                                            <MetrIcon>letter-x</MetrIcon>
                                        </Button>
                                    </Grid>
                                    <Grid item xs={12} className={classes.modalContent}>
                                        <Typography type="caption" component={"p"}>
                                            Прикрепите уже имеющееся резюме в формате: .jpg, .jpeg, .gif, .png, .doc, .docx, .ppt, .pptx, .xls, .xlsx, .pdf, .rar, .zip, .7z.
                                        </Typography>
                                        <div className={classes.dropZoneWrap}>
                                            <Dropzone
                                                onDrop={this.onDrop.bind(this)}
                                                className={classes.dropZone}
                                            >
                                                <Typography type="caption" component={"p"}>
                                                    Перетащите один или несколько файлов в  эту область или
                                                    <Link to="/" className={classes.pageLink}> выберите файл</Link>
                                                </Typography>
                                            </Dropzone>
                                            {this.state.files !== [] &&
                                            <ul>
                                                {this.state.files.map(item =>
                                                    <li key={item.preview}>{item.name}</li>
                                                )}
                                            </ul>
                                            }
                                        </div>
                                        <DialogActions>
                                            <Button raised color="primary" className={classes.sendDocs} onClick={this.handleRequestClose}>
                                                Отправить
                                            </Button>
                                            <Button onClick={this.handleRequestClose} color="primary" autoFocus>
                                                Отмена
                                            </Button>
                                        </DialogActions>
                                    </Grid>
                                </Grid>
                            </Dialog>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    };
}

export default withStyles(styles)(OurAgents);
