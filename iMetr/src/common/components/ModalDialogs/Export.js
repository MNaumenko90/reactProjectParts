import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Dialog, { DialogTitle, DialogContent } from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

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
    },
    button:{
        display: 'block',
        padding: 0,
        textDecoration: 'underline',
        color: '#519be2',
        fontSize: 16,
        '&:hover':{
            color: '#5b86e5',
        },
    },
});


class Export extends Component {

    handleRequestClose = () => {
        this.props.onRequestClose();
    };

    render() {
        const { classes, ...other } = this.props;
        return (
            <Dialog onRequestClose={this.handleRequestClose} {...other}>
                <DialogTitle className={classes.title}>
                    <Typography type='body2' component='p'>
                        Экспорт объявления
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
                        Выберите тип документа для экспорта.
                    </Typography>
                    <Button className={classes.button}>
                        Сохранить в формате PDF
                    </Button>
                    <Button className={classes.button}>
                        Сохранить в формате DOC
                    </Button>
                </DialogContent>
            </Dialog>);
    }
}

export default withStyles(styles)(Export);