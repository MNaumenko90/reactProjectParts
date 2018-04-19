import React, {Component} from 'react';
import Button from 'material-ui/Button';
import {Link, NavLink} from 'react-router-dom';
import Grid from 'material-ui/Grid';
import DlgSign from './dlgSign';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import List from 'material-ui/List';
import DefaultLogo from './assets/images/logo_1.svg';
import MetrIcon from '../Icon';
import Typography from 'material-ui/Typography';
import classNames from 'classnames';
import IntegrationAutosuggest from './AutosuggestSearchComp';



class HeaderMobile extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const {classes} = this.props;
        return (
                <div className={classes.subHeader}>
                    <Grid container spacing={0} className={classes.root} align={'center'}>
                        <Grid item xs={2} sm={1}>
                            <Button onClick={this.toggleDrawer('left', true)} className={classes.buttonMenu}><MetrIcon>list_line</MetrIcon></Button>
                            <Drawer open={this.state.left} onRequestClose={this.toggleDrawer('left', false)}>
                                <div
                                    tabIndex={0}
                                    role="button"
                                    onClick={this.toggleDrawer('left', false)}
                                    onKeyDown={this.toggleDrawer('left', false)}
                                >
                                    <div className={classes.listMob}>
                                        <List>
                                            <Grid container spacing={8} className={classes.root}>
                                                <Grid item xs={12}>
                                                    <div className={this.props.isSearchOpen ? classes.animatedSearch : null}>
                                                        <Grid container spacing={0} className={classes.root}>
                                                            <Grid item xs={1}>
                                                                <MetrIcon className={classes.searchMob}>search</MetrIcon>
                                                            </Grid>
                                                            <Grid item xs={10}>
                                                                <IntegrationAutosuggest/>
                                                            </Grid>
                                                            <Grid item xs={1}>
                                                                <MetrIcon onClick={this.props.openSearchField} className={classes.closeSearch}>letter-x</MetrIcon>
                                                            </Grid>
                                                        </Grid>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                            <Divider />
                                            <nav className={classes.menuMob}>
                                                <Typography type="caption" component={"div"} className={classes.menuItemMob}>
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
                                            <Divider />
                                            <Button raised className={classNames(classes.button,classes.quidel)}>
                                                <Link to="/object/add/:term?/:location?/:type?/" className={classes.menuItem}>
                                                    + Добавить обьявление
                                                </Link>
                                            </Button>
                                        </List>
                                    </div>
                                </div>
                            </Drawer>
                        </Grid>
                        <Grid item xs={6} sm={8}>
                            <Link to="/" className={classes.logo}>
                                <img src={DefaultLogo} alt={'iMetr'}/>
                            </Link>
                        </Grid>
                        <Grid item xs={3} sm={2}className={classes.accountMobile}>

                            {this.props.user ?
                                <Link to="/user/logout" onClick={this.props.onClickLogout} type="caption" className={classes.linksHeader}>
                                    <MetrIcon className={classes.location}>user</MetrIcon>
                                    <Typography type="caption">Выйти</Typography>
                                </Link>
                                :
                                <Link to="/user/sign" onClick={this.props.onClickSign} type="caption" className={classes.linksHeader}>
                                    <MetrIcon className={classes.location}>user</MetrIcon>
                                    <Typography type="caption" component={"p"}>Вход</Typography>
                                </Link>
                            }


                            {this.props.user ? undefined :
                                <DlgSign
                                    onRequestClose={this.props.onCloseSignDlg}
                                    open={this.props.isSignOpen}
                                />
                            }
                        </Grid>
                        <Grid item xs={1}>
                            <Link to="/" className={classes.badgeFavoriteMob} type="caption">
                                <MetrIcon className={classes.heartBgr}>heart2</MetrIcon>
                                {/*<Typography type="caption" className={classes.linksHeader}>10</Typography>*/}
                            </Link>
                        </Grid>
                    </Grid>
                </div>
        )
    }
}

export default HeaderMobile;