import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Dialog, { DialogTitle, DialogContent } from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';

const styles = theme => ({
    title:{
        paddingTop: 24,
    },
    btnClose: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    text:{
        fontWeight: 300,
        marginBottom: 10,
        [theme.breakpoints.down('sm')]: {
            fontSize: 16,
        },
    },
    formInput:{
        marginBottom: 10,
    },
    print:{
        padding: [15,60],
        marginTop: 15,
    },
    button:{
        textTransform:'uppercase',
        marginTop:23,
        fontSize: 18,
        fontWeight: 500,
        color: '#519be2',
        '&:hover':{
            color: '#5b86e5',
        },
    },
});


class ContactForm extends Component {

    handleRequestClose = () => {
        this.props.onRequestClose();
    };

    render() {
        const { classes, ...other } = this.props;
        return (
            <Dialog onRequestClose={this.handleRequestClose} {...other}>
                <DialogTitle className={classes.title}>
                    <Typography type='body2' component='p'>
                        Отправить сообщение
                    </Typography>
                    <IconButton
                        className={classes.btnClose}
                        onClick={this.handleRequestClose}
                    >
                        <Icon>close</Icon>
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <Typography className={classes.text}>
                        Оставьте ваше имя, email и текст сообщения. Ответ придет вам на email в течение суток.
                    </Typography>
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                            <TextField required
                                       fullWidth
                                       label="Ваше имя"
                                       placeholder="Ваше имя"
                                       type="text"
                                       className={classes.formInput}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField required
                                       fullWidth
                                       label="Ваш Email"
                                       type="email"
                                       className={classes.formInput}
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField required
                                       fullWidth
                                       multiline
                                       rows={10}
                                       label="Сообщение"
                                       type="text"
                                       className={classes.formInput}
                            />
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <Button raised type="submit" color="primary" className={classes.print}>
                                Отправить
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <Button className={classes.button}  onClick={this.handleRequestClose}>
                                Отмена
                            </Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>);
    }
}

export default withStyles(styles)(ContactForm);