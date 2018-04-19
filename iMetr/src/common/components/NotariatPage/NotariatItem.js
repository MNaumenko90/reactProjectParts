import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import 'react-rater/lib/react-rater.css';
import Divider from 'material-ui/Divider';

//components


//images


const styles = theme => ({
    root: theme.root,
    notariatItem:{
      padding:12
    },
    notariatItemTitle: {
        color: "#000",
        fontSize: 26,
        lineHeight:'35px',
        fontWeight: 300,
        paddingTop: 12,
    },
    subTitleofNotariatItem: {
        justifyContent: 'flex-start',
        marginBottom: '15px',
        color: '#9299a2',
        '& span':{
            color: '#9299a2',
            fontSize: 12,
        },
    },

});

class NotariatItem extends Component {

    render() {
        const {classes} = this.props;

        return (
            <Grid container spacing={0} className={classes.root}>
                <Grid item xs={12} className={classes.notariatItem}>
                    <Typography className={classes.notariatItemTitle}>Первая Минская городская нотариальная контора</Typography>
                    <Typography type="caption" className={classes.subTitleofNotariatItem}>
                        Минский городской нотариальный округ
                    </Typography>
                    <Divider />
                </Grid>
            </Grid>

        )
    }
}
export default withStyles(styles)(NotariatItem);