import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import classNames from 'classnames';
import Button from 'material-ui/Button';
import MetrIcon from '../Icon';
import {Link} from 'react-router-dom';

const styles = theme => ({
    root: theme.root,
    shadowBottom: {
        borderTop: '1px solid #e1e1e1',
        padding:'60px 0',
    },
    addedBox: {
        display:'flex',
        [theme.breakpoints.down('xs')]: {
            display:'block',
        },
        '& > span': {
            color:'#5b86e5',
            fontSize:'70px',
        },
        '& > div': {
            marginLeft:42,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            [theme.breakpoints.down('xs')]: {
                marginLeft:0,
            },
        },
        '& > div > p': {
            marginBottom:15,
            lineHeight: '24px',
        },
    },
    button: {
        fontSize: '16px',
        fontWeight: '300',
        color: '#fff',
        textDecoration:'none',
    },
});

class SectionProposeComp extends Component {
    render() {
        const {classes} = this.props;
        return (
            <section className={classNames(classes.gradientBg,classes.shadowBottom)}>
                <Grid container spacing={24} className={classes.root} style={{}}>
                    <Grid item xs={12} sm={6} className={classes.addedBox}>
                        <MetrIcon>add</MetrIcon>
                        <div>
                            <Typography type="body2" component="p">
                                Размещайте объявления
                            </Typography>
                            <Typography type="caption" component="p">
                                Новая форма подачи позволит быстро и удобно <br/>разместить объявление
                            </Typography>
                            <Link to="/object/add" className={classes.button}>
                                <Button raised color="primary" >
                                    Разместить объявление
                                </Button>
                            </Link>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} className={classes.addedBox}>
                        <MetrIcon>rocket2</MetrIcon>
                        <div>
                            <Typography type="body2" component="p">
                                Ускоряйте сделки
                            </Typography>
                            <Typography type="caption" component="p">
                                Премиум-размещение увеличивает количество <br/>звонков в 3 раза
                            </Typography>
                            <Button raised color="primary" className={classes.button}>
                                Купить премиум
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </section>
        );
    };
};


export default withStyles(styles)(SectionProposeComp);


