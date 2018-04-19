import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import {Link, NavLink} from 'react-router-dom';
import Grid from 'material-ui/Grid';
import DlgSign from './dlgSign';
import Drawer from 'material-ui/Drawer';
import DefaultLogo from './assets/images/logo_1.svg';
import MetrIcon from '../Icon';
import Typography from 'material-ui/Typography';
import classNames from 'classnames';
import CityDropComp from './CityDrop';
import IntegrationAutosuggest from './AutosuggestSearchComp';

class HeaderDesctop extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const {classes} = this.props;
        return (
            <div>
                <AppBar position="static" className={classes.appEdit}>
                    {!this.props.isSearchOpen ?
                        <Grid container spacing={8} className={classes.root}>
                            <Grid item xs={10} sm={6} md={7} lg={8}>
                                {/*<div onClick={this.toggleDrawer('top', true)}>*/}
                                    {/*<MetrIcon className={classes.location}>location</MetrIcon>*/}
                                    {/*<Typography type="caption" className={classNames(classes.linksHeader,classes.citySelect)}>Гродно</Typography>*/}
                                {/*</div>*/}
                                <Drawer anchor="top" open={this.state.top} onRequestClose={this.toggleDrawer('top', false)}>
                                    <div tabIndex={0} role="button" onClick={this.toggleDrawer('top', true)}>
                                        <CityDropComp/>
                                    </div>
                                </Drawer>
                            </Grid>
                            <Grid item xs={2} sm={1} md={1} lg={1}>
                                <Link to="/" className={classes.badgeFavorite} type="caption">
                                    <MetrIcon className={classes.heartBgr}>heart2</MetrIcon>
                                    <Typography type="caption" className={classes.linksHeader}>10</Typography>
                                </Link>
                            </Grid>
                            <Grid item xs={11} sm={4} md={3} lg={2} className={classes.account}>

                                {this.props.user ?
                                    <span onClick={this.props.onClickLogout} type="caption" className={classes.linksHeader}>
                                    <MetrIcon className={classes.location}>user</MetrIcon>
                                    <Typography type="caption">{this.props.user.username}</Typography>
                                </span>
                                    :
                                    <span onClick={this.props.onClickSign} type="caption" className={classes.linksHeader}>
                                    <MetrIcon className={classes.location}>user</MetrIcon>
                                    <Typography type="caption" component={"p"}>Вход и регистрация</Typography>
                                </span>
                                }
                                {this.props.user ? undefined :
                                    <DlgSign
                                        onRequestClose={this.props.onCloseSignDlg}
                                        open={this.props.isSignOpen}
                                    />
                                }
                            </Grid>
                            {/*<Grid item xs={1} sm={1} md={1} lg={1}>*/}
                                {/*<MetrIcon onClick={this.props.openSearchField} className={classes.search}>search</MetrIcon>*/}
                            {/*</Grid>*/}
                        </Grid>
                        :
                        <div className={this.props.isSearchOpen ? classes.animatedSearch : null}>
                            {/*<Grid container spacing={0} className={classes.root}>*/}
                                {/*<Grid item xs={1}>*/}
                                    {/*<MetrIcon className={classes.searchActive}>search</MetrIcon>*/}
                                {/*</Grid>*/}
                                {/*<Grid item xs={10}>*/}
                                    {/*<IntegrationAutosuggest/>*/}
                                {/*</Grid>*/}
                                {/*<Grid item xs={1}>*/}
                                    {/*<MetrIcon onClick={this.props.openSearchField} className={classes.closeSearch}>letter-x</MetrIcon>*/}
                                {/*</Grid>*/}
                            {/*</Grid>*/}
                        </div>
                    }
                </AppBar>



                <div className={classes.subHeader}>
                    <Grid container spacing={0} className={classes.root} align={'center'}>
                        <Grid item xs={12} sm={2}>
                            <Link to="/" className={classes.logo}>
                                <img src={DefaultLogo} alt={'iMetr'}/>
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={7} md={7}>
                            <nav className={classes.menu}>
                                <Typography type="caption" component={"div"}>
                                    <NavLink to="/snyat" activeClassName="active">
                                        Аренда
                                    </NavLink>
                                    <NavLink to="/kupit" activeClassName="active">
                                        Продажа
                                    </NavLink>
                                    <NavLink to="/novostroyki" activeClassName="active">
                                        Новостройки
                                    </NavLink>
                                    <NavLink to="/commercial" activeClassName="active">
                                        Коммерческая
                                    </NavLink>
                                    <NavLink to="/posutochno" activeClassName="active">
                                        Посуточно
                                    </NavLink>
                                </Typography>
                            </nav>
                        </Grid>

                        <Grid item xs={12} sm={3}>
                            <Button raised className={classNames(classes.button,classes.quidel)}>
                                <Link to="/object/add" className={classes.menuItem}>
                                    + Добавить обьявление
                                </Link>
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default HeaderDesctop;