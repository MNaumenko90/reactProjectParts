import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Dialog, { DialogTitle, DialogContent } from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

import Social from '../../../objects/components/Advert/Social';

const styles = theme => ({
    root: {
        zIndex: 9999,
    },
    container:{
        padding: 30,
    },
    btnClose: {
        position: 'absolute',
        top: -15,
        right: -15,
    },
});


class Share extends Component {

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
                <Grid container align={'center'} className={classes.container}>
                    <Grid item xs={6}>
                        <Typography type='body1'>
                            Поделиться в:
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Social show={true}/>
                    </Grid>
                </Grid>
            </Dialog>);
    }
}

export default withStyles(styles)(Share);