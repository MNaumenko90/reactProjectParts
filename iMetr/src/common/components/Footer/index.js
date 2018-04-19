import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {Link} from 'react-router-dom';
import Grid from 'material-ui/Grid';
import DefaultLogo from './assets/images/logo_1.svg';
import SocLogo from './assets/images/footer-social.png';
import BgFooter from './assets/images/bg-footer.png';
import Typography from 'material-ui/Typography';
import classNames from 'classnames';


const styles = theme => ({
    root: {
        margin: '0 auto',
        maxWidth: '1200px',
        width:'100%',
        [theme.breakpoints.down(1200)]: {
            padding:'0 10px',
        },
    },
    footerNav:{
        borderTop:'1px solid #e1e1e1',
        borderBottom:'1px solid #ebebeb',
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
            padding:'10px 0',
        },
    },
    logo:{
        '& img': {
            [theme.breakpoints.down('md')]: {
                margin: 'auto',
                width: '50%',
            },
        },
    },
    menu: {
        display:'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginLeft: '92px',
        [theme.breakpoints.down('md')]: {
            marginLeft: 0,
        },
        [theme.breakpoints.down('sm')]: {
            flexDirection:'column',
        }
    },
    menuItem: {
        textTransform: 'uppercase',
        color:'#92b7eb',
        textDecoration: 'none',
        padding: '22px 0',
        transition: 'color .3s ease-in',
        display:'inline-block',
        position:'relative',
        [theme.breakpoints.down('sm')]: {
           padding: [10, 0],
        },
        '&:after': {
            content: '""',
            position: 'absolute',
            bottom: '0px',
            height: '2px',
            width: '0px',
            left: '0',
            backgroundColor: '#1d2d36',
            transition: 'width .3s ease-in',
        },
        '&:hover': {
            color:'#1d2d36',
            transition: 'color .3s ease-in',
            '&:after': {
                content: '""',
                width: '100%',
                transition: 'width .3s ease-in',
            }
        },
    },
    social: {
        float:'right',
        [theme.breakpoints.down('md')]: {
            float:'none',
            textAlign: 'center',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: 10,
        },
    },
    socItem: {
        display:'inline-block',
        width:'30px',
        height:'30px',
        marginRight:'10px',
        '&:last-child': {
            marginRight:'0px',
        },

    },
    socTw: {
        background: `url(${SocLogo}) no-repeat 0 0`,
    },
    socVk: {
        background: `url(${SocLogo}) no-repeat -40px 0`,
    },
    socFb: {
        background: `url(${SocLogo}) no-repeat -80px 0`,
    },
    socGl: {
        background: `url(${SocLogo}) no-repeat -119px 0`,
    },
    socOk: {
        background: `url(${SocLogo}) no-repeat -159px 0`,
    },
    footerMenu: {
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start;',
        [theme.breakpoints.down('xs')]: {
            flexDirection:'column',
        },
    },
    footerMenuItem: {
        color:'#9299a2',
        lineHeight:'29px',
        textDecoration:'none',
        transition: 'color .3s ease-in',
        '& span': {
            fontSize: 'inherit',
            '@media (max-width: 768px)': {
                fontSize: 'large',
            },
        },
        '&:hover': {
            color:'#5b86e5',
            transition: 'color .3s ease-in',
        },
    },
    subFooter: {
        backgroundColor: '#1d2d36',
        color:'#9299a2',
        padding:'11px 0',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
        },
    },
    mobileVersion: {
        display:'block',
        textAlign:'right',
        color:'#9299a2',
        textDecoration:'underline',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
        },
    },
    menuHead:{
        textTransform: 'uppercase',
        margin: '20px 0',
    },
    bgFooterMenu: {
        background: `url(${BgFooter}) no-repeat`,
        paddingBottom:'50px',
        backgroundSize: 'cover',
    },
});
class Footer extends Component {
    render() {
        const {classes} = this.props;
        return (
            <footer>
                <div className={classes.footerNav}>
                    <Grid container spacing={0} className={classes.root} align={'center'}>
                        <Grid item xs={12} sm={12} md={2}>
                            <Link to="/" className={classes.logo}>
                                <img src={DefaultLogo} alt={'iMetr'}/>
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={12} md={7}>
                            <nav className={classes.menu}>
                                <Link to="/about" className={classes.menuItem}>
                                    <Typography type="caption">О портале</Typography>
                                </Link>
                                <Link to="/contacts" className={classes.menuItem}>
                                    <Typography type="caption">Контакты</Typography>
                                </Link>
                                <Link to="/" className={classes.menuItem}>
                                    <Typography type="caption">Реклама</Typography>
                                </Link>
                                <Link to="/faq" className={classes.menuItem}>
                                    <Typography type="caption">ПОДДЕРЖКА</Typography>
                                </Link>
                                <Link to="/" className={classes.menuItem}>
                                    <Typography type="caption">Карта сайта</Typography>
                                </Link>
                            </nav>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <div className={classes.social}>
                                <a href="#" className={classNames(classes.socItem,classes.socTw)}></a>
                                <a href="#" className={classNames(classes.socItem,classes.socVk)}></a>
                                <a href="#" className={classNames(classes.socItem,classes.socFb)}></a>
                                <a href="#" className={classNames(classes.socItem,classes.socGl)}></a>
                                <a href="#" className={classNames(classes.socItem,classes.socOk)}></a>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <div className={classes.bgFooterMenu}>
                <Grid container spacing={8} className={classes.root}>
                    <Grid item xs={6} sm={4}>
                        <nav className={classes.footerMenu}>
                            <Typography type="body1" className={classes.menuHead}>ПРОДАЖА</Typography>
                            <Link to="/kupit-1-komnatnuyu-kvartiru" className={classes.footerMenuItem}>
                                <Typography type="caption">Однокомнатные</Typography>
                             </Link>
                            <Link to="/kupit-komnatu" className={classes.footerMenuItem}>
                                <Typography type="caption">Комнаты</Typography>
                            </Link>
                            <Link to="/kupit-kvartiru-studiu" className={classes.footerMenuItem}>
                                <Typography type="caption">Студии</Typography>
                            </Link>
                            <Link to="/kupit-cottage" className={classes.footerMenuItem}>
                                <Typography type="caption">Коттеджи</Typography>
                            </Link>
                            <Link to="/kupit-dom" className={classes.footerMenuItem}>
                                <Typography type="caption">Дома</Typography>
                            </Link>
                        </nav>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <nav className={classes.footerMenu}>
                            <Typography type="body1" className={classes.menuHead}>АРЕНДА</Typography>
                            <Link to="/snyat-1-komnatnuyu-kvartiru" className={classes.footerMenuItem}>
                                <Typography type="caption">Однокомнатные</Typography>
                             </Link>
                            <Link to="/snyat-komnatu" className={classes.footerMenuItem}>
                                <Typography type="caption">Комнаты</Typography>
                            </Link>
                            <Link to="/snyat-kvartiru-studiu" className={classes.footerMenuItem}>
                                <Typography type="caption">Студии</Typography>
                            </Link>
                            <Link to="/snyat-cottage" className={classes.footerMenuItem}>
                                <Typography type="caption">Коттеджи</Typography>
                            </Link>
                            <Link to="/snyat-dom" className={classes.footerMenuItem}>
                                <Typography type="caption">Дома</Typography>
                            </Link>
                        </nav>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <nav className={classes.footerMenu}>
                            <Typography type="body1" className={classes.menuHead}>НОВОСТРОЙКИ</Typography>
                            <Link to="/novostrojki-studiu" className={classes.footerMenuItem}>
                                <Typography type="caption">Студии</Typography>
                            </Link>
                            <Link to="/novostrojki-1-komnatnuyu" className={classes.footerMenuItem}>
                                <Typography type="caption">Однокомнатные</Typography>
                            </Link>
                            <Link to="/novostrojki-2-komnatnuyu" className={classes.footerMenuItem}>
                                <Typography type="caption">Двухкомнатные</Typography>
                            </Link>
                            <Link to="/novostrojki-3-komnatnuyu" className={classes.footerMenuItem}>
                                <Typography type="caption">Трехкомнатные </Typography>
                            </Link>
                            <Link to="/novostrojki-mnogokomnatnuyu" className={classes.footerMenuItem}>
                                <Typography type="caption">Многокомнатные</Typography>
                            </Link>
                        </nav>
                    </Grid>
                    <Grid item xs={6} sm={3}>
                        {/*<nav className={classes.footerMenu}>*/}
                            {/*<Typography type="body1" className={classes.menuHead}>ГОРОДА</Typography>*/}
                            {/*<Link to="/" className={classes.footerMenuItem}>*/}
                                {/*<Typography type="caption">Минск</Typography>*/}
                            {/*</Link>*/}
                            {/*<Link to="/" className={classes.footerMenuItem}>*/}
                                {/*<Typography type="caption">Брест</Typography>*/}
                            {/*</Link>*/}
                            {/*<Link to="/" className={classes.footerMenuItem}>*/}
                                {/*<Typography type="caption">Витебск</Typography>*/}
                            {/*</Link>*/}
                            {/*<Link to="/" className={classes.footerMenuItem}>*/}
                                {/*<Typography type="caption">Гомель</Typography>*/}
                            {/*</Link>*/}
                            {/*<Link to="/" className={classes.footerMenuItem}>*/}
                                {/*<Typography type="caption">Гродно</Typography>*/}
                            {/*</Link>*/}
                            {/*<Link to="/" className={classes.footerMenuItem}>*/}
                                {/*<Typography type="caption">Могилев</Typography>*/}
                            {/*</Link>*/}
                        {/*</nav>*/}
                    </Grid>
                </Grid>
                </div>
                <div className={classes.subFooter}>
                    <Grid container spacing={8} className={classes.root}>
                        <Grid item xs={12} sm={6}>
                            <Typography type="caption">© 2017 iMetr.by</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}><Link to="/">
                            <Typography type="caption" className={classes.mobileVersion}>Мобильная версия</Typography>
                        </Link></Grid>
                    </Grid>
                </div>
            </footer>
        )
    };
}
Footer.propTypes = {
    children: PropTypes.node,
};

export default withStyles(styles)(Footer);