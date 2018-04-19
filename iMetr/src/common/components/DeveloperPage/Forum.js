import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import classNames from 'classnames';
import MetrIcon from '../../../common/components/Icon';
import RieltorFoto from '../Rieltors/assets/images/RieltorFoto.png';


const styles = theme => ({
    root: theme.root,
    forum: {
        padding:'30px 0 59px 0',
        display:'flex',
        justifyContent:'space-between',
    },
    forumTitle: {
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        border: '1px solid #e1e1e1',
        backgroundColor: '#eef2f3',
        borderRadius:'3px 3px 0 0',
    },
    forumBody: {
        border: '1px solid #e1e1e1',
        borderRadius:'0 0 3px 3px',
        borderTop:0,
    },
    pageTitle: {
        '& span': {
            marginRight:15,
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
    forumMessage: {
        display:'flex',
        marginBottom:24,
    },
    answer: {
        flexDirection: 'row-reverse',
        '& $messageIcon': {
            marginRight:0,
            marginLeft:10,
        },
        '& $messageTitle': {
            '& p': {
                justifyContent:'flex-end',
            },
            '& div': {
                border: '1px solid #ebebeb',
                backgroundColor: '#f7f9f9',
            },
        },
    },
    messageIcon: {
        width:40,
        height:40,
        borderRadius:100,
        marginRight:10,
    },
    messageTitle: {
        maxWidth:723,
        '& p': {
            display:'flex',
            justifyContent:'space-between',
            fontWeight: 700,
            marginBottom:7,
            '& span': {
                fontSize: 12,
                color: '#9299a2',
            },
        },
        '& div': {
            border: '1px solid #ebebeb',
            padding:12,
            '& p': {
                fontWeight:400,
            },
        },
    },
});

class Forum extends Component {

    render() {
        const {classes} = this.props;

        return (
            <section className={classes.forum}>
                <Grid container spacing={24} className={classes.root}>
                    <Grid item xs={12} className={classes.forumTitle}>
                        <Typography type="body1" component={"h3"} className={classes.pageTitle}>
                            <MetrIcon>chat</MetrIcon>Форум
                        </Typography>
                        <Button className={classNames(classes.button,classes.quidel)}>
                            Перейти на форум
                        </Button>
                    </Grid>
                    <Grid item xs={12} className={classes.forumBody}>
                        <div className={classes.forumMessage}>
                            <div className={classes.messageIcon}>
                                <img src={RieltorFoto} alt={'iMetr'}/>
                            </div>
                            <div className={classes.messageTitle}>
                                <Typography type="caption" component={"p"}>
                                    Игорь Николаев
                                    <span>12.12.2016, в 11:55</span>
                                </Typography>
                                <div>
                                    <Typography type="caption" component={"p"}>
                                        Балкон, посудомоечная машина, холодильник, душевая кабина, стиральная машина.
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className={classes.forumMessage}>
                            <div className={classes.messageIcon}>
                                <img src={RieltorFoto} alt={'iMetr'}/>
                            </div>
                            <div className={classes.messageTitle}>
                                <Typography type="caption" component={"p"}>
                                    Игорь Николаев
                                    <span>12.12.2016, в 11:55</span>
                                </Typography>
                                <div>
                                    <Typography type="caption" component={"p"}>
                                        Балкон, посудомоечная машина, холодильник, душевая кабина, стиральная машина.
                                    </Typography>
                                </div>
                            </div>
                        </div>
                        <div className={classNames(classes.forumMessage,classes.answer)}>
                            <div className={classes.messageIcon}>
                                <img src={RieltorFoto} alt={'iMetr'}/>
                            </div>
                            <div className={classes.messageTitle}>
                                <Typography type="caption" component={"p"}>
                                    <span>12.12.2016, в 11:55</span>
                                </Typography>
                                <div>
                                    <Typography type="caption" component={"p"}>
                                        Балкон, посудомоечная машина, холодильник, душевая кабина, стиральная машина.
                                        Недавно завершился процесс покупки жилья!
                                        Дмитрий с самого начального этапа и до его конца профессионально вел дело.
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </section>
        )
    }
}
export default withStyles(styles)(Forum);