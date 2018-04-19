import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import CrumbArr from './assets/images/crumbsArr.png';

const styles = theme => ({
    root: theme.root,
    crumbsBg: {
        backgroundColor: '#eaeeee',
        border: '1px solid #cfd4d7',
        padding: '6px 0',
    },
    crumbs: {
        margin:0,
        padding:[10,0],
        listStyle: 'none',
        '& li': {
            display:'inline-block',
            color:'#9299a2',
            position:'relative',
            paddingLeft:10,
            marginRight:5,
            '&:after': {
                position:'absolute',
                content:'""',
                background: `url(${CrumbArr}) no-repeat`,
                zIndex:2,
                top:6,
                left:0,
                color:'#fff',
                width:8,
                height:8,
                display:'block',
            },
            '&:first-child': {
                paddingLeft:0,
                '&:after': {
                    display:'none',
                },
            },
            '& a': {
                textDecoration: 'none',
                color:'inherit',
                '&:hover':{
                    color: '#1b2833',
                },
            },
        },
    },
    button:{
        textTransform: 'none',
        color: '#1b2833',
        fontSize: 14,
        borderRadius: 3,
        border: '1px solid #b0b5b8',
        float:'right',
        padding: '9px 13px 7px 13px',
        [theme.breakpoints.down('md')]: {
            float: 'none',
        },
        '& a': {
            textDecoration:'none',
            color: '#1b2833',
        },
    },
    quidel: {
        background: 'none',
        border: '1px solid #b0b5b8',
        overflow: 'hidden',
        transition: 'color 0.3s',
        position: 'relative',
        zIndex: 1,
        boxShadow:'none',
        textTransform: 'none',
        borderRadius: 3,
        transitionTimingFunction: 'cubic-bezier(0.75, 0, 0.125, 1)',
        display: 'block',
        margin: '0 auto',
        '&:after': {
            content: '""',
            position: 'absolute',
            zIndex: -1,
            top: '1px',
            left: '1px',
            right: '1px',
            bottom: '1px',
            background: '#fff',
        },
        '&:before': {
            content: '""',
            position: 'absolute',
            zIndex: -1,
            background: '#1b2833',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            transform: 'translate3d(0, 100%, 0)',
            transition: 'transform 0.3s',
            transitionTimingFunction: 'cubic-bezier(0.75, 0, 0.125, 1)',
        },
        '&:hover': {
            '&:before': {
                transform: 'translate3d(0, 0, 0)',
            },
        },
    },
});

class BreadCrumbs extends Component {

    render() {

        const {classes} = this.props;


        return (
            <section className={classes.crumbsBg}>
                <Grid container className={classes.root} spacing={24}>
                    <Grid item xs={12} sm={12} md={9}>
                        <ul className={classes.crumbs}>
                            <li>
                                <Typography type="caption">
                                    <Link to="/">
                                        Недвижимость минска
                                    </Link>
                                </Typography>
                            </li>
                            <li>
                                <Typography type="caption">
                                    Застройщики
                                </Typography>
                            </li>
                            <li>
                                <Typography type="caption">
                                    А-100 девелопмент
                                </Typography>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <Button className={classNames(classes.button,classes.quidel)}>
                            {/*<Link to="/Rieltors">*/}
                                Список риэлтеров и агентов
                            {/*</Link>*/}
                        </Button>
                    </Grid>
                </Grid>
            </section>
        );
    };
}

export default withStyles(styles)(BreadCrumbs);
