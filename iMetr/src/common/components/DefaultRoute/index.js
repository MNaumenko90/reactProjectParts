
import React from 'react';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import Header from '../../containers/Header'
import Footer from '../../containers/Footer'

const styles = theme => ({
    root: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflowX: 'hidden',
    },
    hideBackgroundTopHeader: {
        marginTop: 0,
    },
    showPreloader: {
        display: 'block'
    },
    hidePreloader: {
        display: 'none',
        visibility: 'hidden',
        height: 0,
        width: 0,
    },
    preloader: {
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 99999,
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

});

const DefaultRoute = ({component: Component, isAuthenticated, loader ,alert, hideAlert, classes, hideBackgroundTopHeader, hideBackgroundTopMobileHeader, hideBackgroundTopMobileHeaderScroll, hideHeader, ...rest}) => {

    return <Route {...rest} render={props => {
        if (props.staticContext)
            props.staticContext.routeProps = rest;

        return (
            <div>
                <Grid
                    className={classNames(classes.root, {[classes.hideBackgroundTopHeader]: hideBackgroundTopHeader || hideBackgroundTopMobileHeader})}>
                    {!hideHeader && <Header hideBackgroundTopHeader={hideBackgroundTopHeader}
                                            hideBackgroundTopMobileHeaderScroll={hideBackgroundTopMobileHeaderScroll}
                                            hideBackgroundTopMobileHeader={hideBackgroundTopMobileHeader}/>}
                    <Component  {...rest} {...props}/>
                    <Footer/>
                </Grid>
                <div className={classNames(classes.preloader, loader > 0 ? classes.showPreloader : classes.hidePreloader)}>
                    <div>
                        Loading ...
                    </div>
                </div>
            </div>
        )
    }}/>
};

DefaultRoute.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DefaultRoute);