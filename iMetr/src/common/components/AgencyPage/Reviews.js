import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import Button from 'material-ui/Button';
import classNames from 'classnames';
import Paper from 'material-ui/Paper';
import MetrIcon from '../../../common/components/Icon';
import RieltorFoto from '../Rieltors/assets/images/RieltorFoto.png';
import { Link } from 'react-router-dom';
import Dialog, {
    withMobileDialog,
    DialogActions,
} from 'material-ui/Dialog';
import Input from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';


const styles = theme => ({
    root: theme.root,
    rate: {
        '& a.is-active': {
            color:'#ffe26f',
        },
        '& > span': {
            color:'#9299a2',
            display:'inline-block',
            marginLeft: '10px',
        },
        '& > p': {
            color: '#9299a2',
            display:'block',
        },
    },
    pageTitle: {
        fontSize: 18,
    },
    pageDesc: {
        color: '#9299a2',
        '& span': {
            marginRight:5,
        },
    },
    button:{
        textTransform: 'none',
        color: '#1b2833',
        fontSize: 14,
        borderRadius: 3,
        border: '1px solid #b0b5b8',
        padding: '9px 13px 7px 13px',
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
    agencyLogo: {
        display: 'flex',
        alignItems: 'center',
        flexDirection:'column',
        '& div': {
            width:100,
            height:100,
            borderRadius:100,
        },
        '& p': {
            color: '#9299a2',
            marginTop:10,
        },
    },
    likeButton: {
        minWidth:40,
        margin:0,
        display:'inline-block',
        padding: '9px 8px 7px 8px',
        '& .icon': {
            margin:0,
        },
    },
    likeRotate: {
        '& .icon': {
            transform:'rotate(180deg)',
            position:'absolute',
            top:11,
            right:9,
        },
    },
    likeBlock: {
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center',
        '& > span': {
            margin:'0 10px',
        },
    },
    dateText: {
        fontSize: 12,
        color: '#9299a2',
        margin:'10px 0',
    },
    textHolder: {
        height:54,
        overflow: 'hidden',
        lineHeight:'18px',
    },
    mystyle: {
        '& $textHolder': {
            height: 'auto',
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
    viewAllMenu: {
        display:'inline-block',
        position:'relative',
        paddingRight:20,
        marginBottom:15,
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
    reviewBox: {
       margin:'20px 0',
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
        '& $rate': {
            marginTop:21,
            '& p': {
                fontSize:16,
                color: '#1b2833',
            },
            '& .react-rater': {
                fontSize:27,
            },
        },
    },
    sendDocs: {
        padding: '10px 8px',
    },
    inputTextArea: {
        position:'relative',
        marginTop:24,
        width:'100%',
        '& textarea': {
            paddingTop:10,
        },
    },
    helperText: {
        display: 'inline-block',
        position: 'absolute',
        background: '#fff',
        top: '-7px',
        left: '8px',
        marginTop: 0,
        color: '#9299a2',
    },
});

class Reviews extends Component {
    state={
        open: false,
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
    render() {
        const {classes, fullScreen} = this.props;

        return (
            <div>
                <Grid container spacing={24} className={classes.root} align={"center"}>
                    <Grid item xs={12} sm={3} md={2}>
                        <Typography type="body1" component={"h3"} className={classes.pageTitle}>
                            Отзывы
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3} md={2}>
                        <Typography type="caption" component={"span"} className={classes.pageDesc}>
                            <MetrIcon>comments</MetrIcon>3 отзыва
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3} md={5}>
                        <Typography type="caption" component={"span"} className={classes.pageDesc}>
                            <MetrIcon>like2</MetrIcon>3 оценки
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <Button className={classNames(classes.button,classes.quidel)} onClick={this.handleClickOpen}>
                            <MetrIcon>comments</MetrIcon>
                            Оставить отзыв
                        </Button>
                        <Dialog
                            open={this.state.open}
                            fullScreen={fullScreen}
                            maxWidth={"sm"}
                        >
                            <Grid container className={classes.root} spacing={0}>
                                <Grid item xs={12} className={classes.allOfficesTitle}>
                                    <Typography type="body1" component={"h3"} className={classes.pageTitle}>
                                        Оставить отзыв
                                    </Typography>
                                    <Button className={classes.closeModal} onClick={this.handleRequestClose}>
                                        <MetrIcon>letter-x</MetrIcon>
                                    </Button>
                                </Grid>
                                <Grid item xs={12} className={classes.modalContent}>
                                    <Typography type="caption" component={"p"}>
                                        Оставьте отзыв о работе агентства. Ваше мнение очень важно для нас.
                                    </Typography>
                                    <div className={classes.rate}>
                                        <Typography type="caption" component={"p"}>
                                            Оцените качество обслуживание:
                                        </Typography>
                                        <Rater
                                            total={5}
                                            rating={0}
                                            interactive={true}
                                        />
                                    </div>
                                    <div className={classes.rate}>
                                        <Typography type="caption" component={"p"}>
                                            Оцените компетентность сотрудников:
                                        </Typography>
                                        <Rater
                                            total={5}
                                            rating={0}
                                            interactive={true}
                                        />
                                    </div>
                                    <div className={classes.rate}>
                                        <Typography type="caption" component={"p"}>
                                            Оцените вежливость сотрудников:
                                        </Typography>
                                        <Rater
                                            total={5}
                                            rating={0}
                                            interactive={true}
                                        />
                                    </div>
                                    <FormControl className={classes.inputTextArea}>
                                        <Input
                                            placeholder="Поделитесь вашим мнением"
                                            inputProps={{
                                                'aria-label': 'Description',
                                            }}
                                            type="textarea"
                                            multiline={true}
                                            rows={7}
                                        />
                                        <FormHelperText className={classes.helperText}>Отзыв</FormHelperText>
                                    </FormControl>
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
                    </Grid>
                </Grid>
                <Grid container spacing={0} className={classes.root}>
                    <Grid item xs={12}>
                        <Paper className={classes.reviewBox}>
                            <Grid container spacing={24} className={classes.root}>
                                <Grid item xs={12} sm={12} md={2} className={classes.agencyLogo}>
                                    <div>
                                        <img src={RieltorFoto} alt={'iMetr'}/>
                                    </div>
                                    <Typography type="caption" component={"p"}>
                                        Александр
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={12} md={10}>
                                    <Grid container spacing={0} className={classes.root}>
                                        <Grid item xs={12} sm={6} md={2}>
                                            <div className={classes.rate}>
                                                <Typography type="caption" component={"p"}>
                                                    Внимательность:
                                                </Typography>
                                                <Rater
                                                    total={5}
                                                    rating={4}
                                                    interactive={false}
                                                />
                                                <Typography type="caption" component="span">4.2</Typography>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={2}>
                                            <div className={classes.rate}>
                                                <Typography type="caption" component={"p"}>
                                                    Компетентность:
                                                </Typography>
                                                <Rater
                                                    total={5}
                                                    rating={4}
                                                    interactive={false}
                                                />
                                                <Typography type="caption" component="span">4.2</Typography>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={2}>
                                            <div className={classes.rate}>
                                                <Typography type="caption" component={"p"}>
                                                    Ответственность:
                                                </Typography>
                                                <Rater
                                                    total={5}
                                                    rating={4}
                                                    interactive={false}
                                                />
                                                <Typography type="caption" component="span">4.2</Typography>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={2}>
                                            <div className={classes.rate}>
                                                <Typography type="caption" component={"p"}>
                                                    Пунктуальность:
                                                </Typography>
                                                <Rater
                                                    total={5}
                                                    rating={4}
                                                    interactive={false}
                                                />
                                                <Typography type="caption" component="span">4.2</Typography>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={4} className={classes.likeBlock}>
                                            <Button className={classNames(classes.button,classes.quidel,classes.likeButton)}>
                                                <MetrIcon>like2</MetrIcon>
                                            </Button>
                                            <Typography type="caption" component={"span"}>
                                                3
                                            </Typography>
                                            <Button className={classNames(classes.button,classes.quidel,classes.likeButton,classes.likeRotate)}>
                                                <MetrIcon>like2</MetrIcon>
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography type="caption" component="span" className={classes.dateText}>20.11.2017</Typography>
                                            <Typography type="caption" component="p" className={classes.textHolder}>
                                                Спасибо Александру за оперативность и терпение при продаже нашей квартиры в
                                                очень короткий срок. Если вам нужно купить или продать квартиру,выбирайте его.
                                                Он умеет хорошо преподнести ваш объект.
                                                Всегда вежлив и тактичен, коммуникабелен.
                                                Остались довольны качеством его работы.<br/> Помог нам с продажей квартиры.
                                                Хотя продажа казалась нереальной из-за множества вопросов в оформлении документов.  
                                                Благодаря грамотным действиям Дмитрия, были собраны и проверены многочисленные документы.
                                                Самому не под силу было бы это сделать,но благодаря профессиональным действиям
                                                Дмитрия мой вопрос был успешно решён. Квартира продана Большое спасибо.
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Link to="/" className={classes.viewAllMenu}>
                                                <Typography type="caption" onClick={this.handleOpenStanse.bind(this)}>
                                                    Показать все
                                                </Typography>
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={40} className={classes.root} align={"center"}>
                    <Grid item xs={12}>
                        <Button className={classNames(classes.button,classes.quidel)}>
                            Показать еще отзывы
                        </Button>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default withStyles(styles)(Reviews);