import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import {Link} from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import CrumbArr from '../RieltorsPage/assets/images/crumbsArr.png';

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
});

class BreadCrumbs extends Component {

    render() {

        const {classes} = this.props;


        return (
            <section className={classes.crumbsBg}>
                <Grid container className={classes.root} spacing={24}>
                    <Grid item xs={12}>
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
                                    {/*<Link to="/wiki">Термины и понятия</Link>*/}
                                </Typography>
                            </li>
                            <li>
                                <Typography type="caption">
                                    Восстановление границ земельного участка
                                </Typography>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            </section>
        );
    };
}

export default withStyles(styles)(BreadCrumbs);
