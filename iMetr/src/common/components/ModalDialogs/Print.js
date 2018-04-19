import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import classNames from 'classnames';
import Dialog, { DialogTitle, DialogContent } from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import {FormControl, FormControlLabel} from 'material-ui/Form';
import Radio, { RadioGroup } from 'material-ui/Radio';

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
        marginBottom: 20,
        [theme.breakpoints.down('sm')]: {
            fontSize: 16,
        },
    },
    controlBlock:{
        marginBottom: 20,
        '& label':{
            marginBottom: 10,
        },
    },
    comment:{
        borderLeft: '1px solid #e1e1e1',
        [theme.breakpoints.down('sm')]: {
            borderLeft: 'none',
        },
    },
    print:{
        padding: [15,60],
    },
    button:{
        textTransform:'uppercase',
        marginTop:8,
        fontSize: 18,
        fontWeight: 500,
        color: '#519be2',
        '&:hover':{
            color: '#5b86e5',
        },
    },
});


class Print extends Component {
    state = {
        contactRadio: "С контактами",
        commentRadio: "С комментарием"
    };

    handleChange = name => (event, value) => {
        this.setState({ [name]: value});
    };


    handleRequestClose = () => {
        this.props.onRequestClose();
    };

    render() {
        const { classes, ...other } = this.props;
        return (
            <Dialog onRequestClose={this.handleRequestClose} {...other}>
                <DialogTitle className={classes.title}>
                    <Typography type='body2' component='p'>
                        Распечатать объявление
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
                        Выберите информацию, которую хотите включить в распечатываемый документ.
                    </Typography>
                    <Grid container spacing={0}>
                        <Grid item xs={12} sm={6} >
                            <FormControl required className={classes.controlBlock}>
                                <RadioGroup
                                    value={this.state.contactRadio}
                                    onChange={this.handleChange('contactRadio')}>
                                    <FormControlLabel value="С контактами" control={<Radio />} label="С контактами" />
                                    <FormControlLabel value="Без контактов" control={<Radio />} label="Без контактов" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl required className={classNames(classes.controlBlock,classes.comment)}>
                                <RadioGroup
                                    value={this.state.commentRadio}
                                    onChange={this.handleChange('commentRadio')}>
                                    <FormControlLabel value="С комментарием" control={<Radio />} label="С комментарием" />
                                    <FormControlLabel value="Без комментария" control={<Radio />} label="Без комментария" />
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                    <Grid item xs={12} sm={5}>
                        <Button raised type="submit" color="primary" className={classes.print}>
                            Распечатать
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

export default withStyles(styles)(Print);