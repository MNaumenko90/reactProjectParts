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
    brtiItem:{
      padding:12
    },
    brtiItemTitle: {
        color: "#000",
        fontSize: 26,
        lineHeight:'35px',
        fontWeight: 300,
        paddingTop: 12,
    },
    subTitleofBrtiItem: {
        justifyContent: 'flex-start',
        marginBottom: '15px',
        color: '#9299a2',
        '& span':{
            color: '#9299a2',
            fontSize: 12,
        },
    },

});

class BrtiItem extends Component {

    render() {
        const {classes} = this.props;

        return (
            <Grid container spacing={0} className={classes.root}>
                <Grid item xs={12} className={classes.brtiItem}>
                    <Typography className={classes.brtiItemTitle}>ГУП «Национальное кадастровое агентство»</Typography>
                    <Typography type="caption" className={classes.subTitleofBrtiItem}>
                        Минская область
                    </Typography>
                    <Divider />
                </Grid>
            </Grid>

        )
    }
}
export default withStyles(styles)(BrtiItem);