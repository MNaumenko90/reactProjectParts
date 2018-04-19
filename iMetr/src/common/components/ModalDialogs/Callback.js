import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Dialog, { DialogTitle, DialogContent } from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import CallbackBg from './assets/images/callback_bg.png';

const styles = theme => ({
    root: {
       padding: 0,
    },
    btnClose: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    img:{
        height: '100%',
    },
    content:{
        textAlign: 'center',
        padding: [45,30],
    },
    descr:{
        fontWeight: 300,
        '& span':{
            display: 'block',
            fontSize: 22,
            fontWeight: 400,
        }
    },
    button:{
        width: '100%',
        padding: 15,
    },
});


class Callback extends Component {

    handleRequestClose = () => {
        this.props.onRequestClose();
    };

    render() {
        const { classes, ...other } = this.props;
        return (
            <Dialog className={classes.root} onRequestClose={this.handleRequestClose} {...other}>
                <IconButton
                    className={classes.btnClose}
                    onClick={this.handleRequestClose}
                >
                    <Icon>close</Icon>
                </IconButton>
                <Grid container spacing={0}>
                    <Grid item xs={5}>
                        <img src={`${CallbackBg}`} alt="IMetr" className={classes.img}/>
                    </Grid>
                    <Grid item xs={7}>
                        <Grid container className={classes.content}>
                            <Grid item xs={12}>
                                <Typography className={classes.descr}>
                                    Оставьте ваш номер телефона и мы презвоним вам в течение <span>1 минуты</span>
                                </Typography>
                                <TextField
                                    fullWidth
                                    label="Ваш номер телефона"
                                    type="tel"
                                    margin="normal"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button raised type="submit" color="primary" className={classes.button}>
                                    Перезвоните мне
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Dialog>);
    }
}

export default withStyles(styles)(Callback);