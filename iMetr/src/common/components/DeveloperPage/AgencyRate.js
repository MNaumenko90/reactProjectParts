import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';


const styles = theme => ({
    root: theme.root,
    rate: {
        marginTop:12,
        '& a.is-active': {
            color:'#ffe26f',
        },
        '& > span': {
            color:'#9299a2',
            display:'inline-block',
            marginLeft: '10px',
        },
    },
});

class AgencyRate extends Component {

    render() {
        const {classes} = this.props;

        return (
            <Grid container spacing={40} className={classes.root}>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography type="caption" component={"p"}>
                        Внимательность:
                    </Typography>
                    <div className={classes.rate}>
                        <Rater
                            total={5}
                            rating={4}
                            interactive={false}
                        />
                        <Typography type="caption" component="span">4.2</Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography type="caption" component={"p"}>
                        Компетентность:
                    </Typography>
                    <div className={classes.rate}>
                        <Rater
                            total={5}
                            rating={4}
                            interactive={false}
                        />
                        <Typography type="caption" component="span">4.2</Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography type="caption" component={"p"}>
                        Ответственность:
                    </Typography>
                    <div className={classes.rate}>
                        <Rater
                            total={5}
                            rating={4}
                            interactive={false}
                        />
                        <Typography type="caption" component="span">4.2</Typography>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography type="caption" component={"p"}>
                        Пунктуальность:
                    </Typography>
                    <div className={classes.rate}>
                        <Rater
                            total={5}
                            rating={4}
                            interactive={false}
                        />
                        <Typography type="caption" component="span">4.2</Typography>
                    </div>
                </Grid>
            </Grid>

        )
    }
}
export default withStyles(styles)(AgencyRate);