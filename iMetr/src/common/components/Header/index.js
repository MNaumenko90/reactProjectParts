import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Hidden from 'material-ui/Hidden';

//components
import HeaderDesctop from './HeaderDesctop';
import HeaderMobile from './HeaderMobile';


const styles = theme => ({
    button: {
        textTransform: 'none',
        display: 'block',
        border: '1px solid #b0b5b8',
        background: 'none',
        position: 'relative',
        zIndex: 1,
        boxShadow:'none',
        float: 'right',
        borderRadius: 3,
        padding:0,
        [theme.breakpoints.down('sm')]: {
            float: 'none',
            margin:'0 auto',
        },
        '& a': {
            fontSize: '16px',
            fontWeight: '300',
            color: '#1b2833',
            letterSpacing: '0.8px',
            textDecoration:'none',
            padding: '10px 16px',
            display: 'block',
        },
    },
    quidel: {
        background: '#b0b5b8',
        overflow: 'hidden',
        transition: 'color 0.3s',
        transitionTimingFunction: 'cubic-bezier(0.75, 0, 0.125, 1)',
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
    root: theme.root,
    subHeader: {
        borderBottom: '1px solid #e1e1e1',
        [theme.breakpoints.down('sm')]: {
            padding:'10px 0',
        },
        [theme.breakpoints.down('sm')]: {
            background:'#e9eeee',
        },
    },
    accountMobile: {
        textAlign: 'center',
        '& > a': {
            verticalAlign:'middle',
            marginRight:'10px',
            color:'#1b2833',
        },
        '& span': {
            verticalAlign:'middle',
            marginRight:'10px',
            color:'#1b2833',
        },
    },
    badgeFavoriteMob: {
        color:'#1b2833',
    },
    appEdit: {
        backgroundColor: '#1d2d36',
        boxShadow:'none',
        padding:'3px 0',
    },
    list: {
        width: 250,
    },
    listFull: {
        width: 'auto',
    },
    citySelect: {
        cursor:'pointer',
        position:'relative',
        paddingRight:15,
        '&:after': {
            position:'absolute',
            content:'"⌄"',
            display:'block',
            top:'-2px',
            right:0,
            zIndex:10,
            color: '#fff',
        },

    },
    linksHeader: {
        color:'#fff',
        outline:'none',
        textDecoration:'underline',
        '& p': {
            display:'inline-block',
            textDecoration:'underline',
        },
    },
    menu: {
        '& > div': {
        display:'flex',
        justifyContent: 'space-around',
        borderLeft:'1px solid #eee',
        alignItems: 'center',
        marginLeft:'20px',
        '& a': {
            textTransform: 'uppercase',
            color:'#1d2d36',
            textDecoration: 'none',
            padding: '22px 0',
            fontSize:'13px',
            transition: 'color .3s ease-in',
            display:'inline-block',
            position:'relative',
            '&:after': {
                content: '""',
                position: 'absolute',
                //left: '20px',
                bottom: '0px',
                height: '2px',
                width: '0px',
                left: '0',
                backgroundColor: '#92b7eb',
                transition: 'width .3s ease-in',
            },
            '&:hover': {
                color:'#92b7eb',
                transition: 'color .3s ease-in',
                '&:after': {
                    content: '""',
                    width: '100%',
                    transition: 'width .3s ease-in',
                }
            },
        },
        '& a.active': {
            color:'#92b7eb',
            transition: 'color .3s ease-in',
            '&:after': {
                content: '""',
                width: '100%',
                transition: 'width .3s ease-in',
            }
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection:'column',
            marginLeft:'0px',
        },
        },
    },
    badgeFavorite: {
        display: 'inline-block',
        color: '#fff',
        '& > span:before': {
            textDecoration:'none',
        }
    },
    account: {
        borderLeft: '1px solid #151f24',
        borderRight: '1px solid #151f24',
        textAlign: 'center',
        '& > span': {
            verticalAlign:'middle',
            marginRight:'10px',
            cursor:'pointer',
        },
        [theme.breakpoints.down('sm')]: {
            borderLeft: 'none',
            borderRight: 'none',
        },
    },
    heartBgr: {
        marginRight:'10px',
        display:'inline-block',
    },
    location: {
        marginRight:'10px',
        display:'inline-block',
        color:'#fff',

    },
    search: {
        color:'#fff',
        float:'right',
        cursor:'pointer',
        [theme.breakpoints.down('sm')]: {
            float:'none',
        },
    },
    closeSearch: {
        color:'#fff',
        float:'right',
        cursor:'pointer',
        marginTop:5,
    },
    searchActive: {
        color: '#ffffff',
        opacity: 0.3,
        float:'right',
        marginTop:5,
    },
    animatedSearch: {
        opacity: '1 !important',
        transition: 'all 2s ease-out',
    },
    animatedSearch2: {
        opacity: 0,
        transition: 'all 2s ease-out',
        border: '2px solid red'
    },
    buttonMenu: {
        minWidth:'auto',
    },
    listMob: {
        width: 250,
    },
    menuMob: {
        display:'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom:'10px',
        flexDirection:'column',
    },
    menuItemMob: {
        '& a': {
        textTransform: 'uppercase',
        color:'#1d2d36',
        textDecoration: 'none',
        padding: '22px 0',
        fontSize:'13px',
        transition: 'color .3s ease-in',
        display:'block',
        textAlign:'center',
        position:'relative',
        '&:after': {
            content: '""',
            position: 'absolute',
            left: '20px',
            bottom: '0px',
            height: '2px',
            width: '0px',
            backgroundColor: '#92b7eb',
            transition: 'width .3s ease-in',
        },
        '&:hover': {
            color:'#92b7eb',
            transition: 'color .3s ease-in',
            '&:after': {
                content: '""',
                width: '100%',
                transition: 'width .3s ease-in',
            }
        },
        },
    },
    searchMob: {
        color:'#000',
        float:'right',
    },
});


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSignOpen: false,
            isSearchOpen: false,
        };
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    onClickSign = (e)=>{
        let {width} = this.props;
        //if mobile
        if(['xs'].indexOf(width)>=0)
            return true;
        e.preventDefault();
        this.setState({ isSignOpen: true});
        return false;
    };

    onCloseSignDlg = (e)=>{
        this.setState({ isSignOpen: false});
    };

    onClickLogout = (e)=>{
        e.preventDefault();
        this.props.logOut();
        return false;
    };

    openSearchField =() => {
        this.setState({
            isSearchOpen: !this.state.isSearchOpen,
        });
    };


    render() {
        const {classes, user} = this.props;
        return (
            <div>
                <Hidden smUp initialWidth="lg">
                    <HeaderMobile
                        user={user}
                        isSearchOpen={this.state.isSearchOpen}
                        isSignOpen={this.state.isSignOpen}
                        openSearchField={this.openSearchField}
                        onClickSign={this.onClickSign}
                        onCloseSignDlg={this.onCloseSignDlg}
                        onClickLogout={this.onClickLogout}
                        classes={classes}/>
                </Hidden>
                <Hidden xsDown initialWidth="lg">
                    <HeaderDesctop
                        user={user}
                        isSearchOpen={this.state.isSearchOpen}
                        isSignOpen={this.state.isSignOpen}
                        openSearchField={this.openSearchField}
                        onClickSign={this.onClickSign}
                        onCloseSignDlg={this.onCloseSignDlg}
                        onClickLogout={this.onClickLogout}
                        classes={classes} />
                </Hidden>
            </div>

        )
    }
}

Header.propTypes = {
    children: PropTypes.node,
};

export default withStyles(styles)(Header);