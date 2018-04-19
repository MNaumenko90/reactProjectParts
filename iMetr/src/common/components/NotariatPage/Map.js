import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';

import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

import SectionMap from './SectionMap'
const styles = theme => ({
    root: theme.root,
    pageTitle: {
        fontWeight:'100',
        fontSize: '24px'
    },
    containerMap: {
        height:400,
    },
    sectionMap: {
        marginBottom:30,
    },
});

function TabContainer(props) {
    return <div>{props.children}</div>;
};

class Map extends Component {
    render() {
        const {classes} = this.props;

        return (
            <section className={classes.sectionMap}>
                <Grid container spacing={24} className={classes.root} align={"center"}>
                    <Grid item xs={12}>
                        <Typography type="body1" component={"h3"} className={classes.pageTitle}>
                            На карте
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TabContainer>
                            <div className={classes.containerMap}>
                                <SectionMap/>
                            </div>
                        </TabContainer>
                    </Grid>
                </Grid>
            </section>
        )
    };
}

export default withStyles(styles)(Map);