import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
//components
import MetrIcon from '../../../common/components/Icon';

//images
import devBg from './assets/images/devBg.png';
import compLogo from './assets/images/companyLogo.png';

const styles = theme => ({
    root: theme.root,
    devBg: {
        background: `url(${devBg}) no-repeat`,
        backgroundSize:'cover',
    },
    devTitle: {
        padding:'46px 0',
        minWidth:543,
        margin:'0 auto',
        textAlign:'center',
        [theme.breakpoints.down('sm')]: {
            minWidth:320,
        },
    },
    pageTitle: {
        color:'#fff',
        fontWeight:100,
        marginTop:29,
        display:'inline-block',
        '& span': {
            fontSize:23,
            margin:'0 7px 0 11px',
        },
    },
    devRelise: {
        display:'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        },
        '& p': {
            color:'#fff',
            marginTop:15,
            display:'inline-block',
        },
        '& span': {
            fontSize:16,
            display:'inline-block',
            marginLeft:16,
            color:'#fff',
            fontFamily: `'Exo 2'`,
        },
        '& div': {
            flex: '1 0 0',
            [theme.breakpoints.down('sm')]: {
               flex: 'none',
            },
        },
    },
    rate: {
        display:'inline-block',
        marginLeft:29,
        '& a.is-active': {
            color:'#ffe26f',
        },
        '& a': {
            fontSize:26,
            color:'#fff',
        },
        '& > span': {
            color:'#fff',
            display:'inline-block',
            marginLeft: '10px',
        },
    },
    itemlDesc: {
        color: '#fff',
        display:'block',
        margin: '7px 0 0px 0',
        fontSize:12,
        '& span': {
            marginRight:15,
        },
    },
    chip: {
        borderRadius: 3,
        border:'1px solid #fff',
        padding:'5px 8px',
        color:'#fff',
        textTransform:'uppercase',
        fontWeight:'bold',
        fontFamily: `'Exo 2'`,
        fontSize: 12,
        verticalAlign: 'text-top',
        marginRight:5,
    },
});



class DevItem extends Component {

    render() {
        const {classes} = this.props;

        return (
            <section className={classes.devBg}>
                <Grid container spacing={40} className={classes.root}>
                    <Grid item xs={12} sm={12} md={2}>
                            <img src={compLogo} alt={'iMetr'}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={10}>
                        <div>
                            <Typography type="title" component={"h1"} className={classes.pageTitle}>
                                А-100 Девелопмент
                                <MetrIcon>medal2</MetrIcon>
                            </Typography>
                            <span className={classes.chip}>pro</span>
                            <span className={classes.chip}>стб</span>
                            <div className={classes.rate}>
                                <Rater
                                    total={5}
                                    rating={4}
                                    interactive={false}
                                />
                                <Typography type="caption" component="span">4.2</Typography>
                            </div>
                            <Typography type="caption" component="p" className={classes.itemlDesc}>
                                <span>6 лет и 5 мес. на iMetr copy</span><span>УНП: 101136973</span>
                            </Typography>
                        </div>
                            <div className={classes.devRelise}>
                                <div>
                                    <Typography type="display2" component={"p"}>
                                        1998
                                    </Typography>
                                    <span>Год основания <br/>компании</span>
                                </div>
                                <div>
                                    <Typography type="display2" component={"p"}>
                                        15
                                    </Typography>
                                    <span>Строящихся домов  <br/>в 9 ЖК</span>
                                </div>
                                <div>
                                    <Typography type="display2" component={"p"}>
                                        35
                                    </Typography>
                                    <span>Реализованных ЖК по <br/>всей Беларуси</span>
                                </div>
                            </div>
                    </Grid>
                </Grid>
            </section>
        )
    }
}
export default withStyles(styles)(DevItem);