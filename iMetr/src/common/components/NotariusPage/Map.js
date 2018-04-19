import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';

import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

import SectionMap from './SectionMap'
const styles = theme => ({
    root: theme.root,
    containerMap: {
        paddingTop:25,
        height:550,
    },

});

function TabContainer(props) {
    return <div>{props.children}</div>;
};

class Map extends Component {
    render() {
        const {classes} = this.props;

        return (
                    <Grid item xs={12} md={7}>
                        <TabContainer>
                            <div className={classes.containerMap}>
                                <SectionMap/>
                            </div>
                        </TabContainer>
                    </Grid>


        )
    };
}

export default withStyles(styles)(Map);