import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Dialog, { DialogTitle, DialogContent } from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Tabs, {Tab} from 'material-ui/Tabs';
import {FormGroup, FormControlLabel} from 'material-ui/Form';
import Divider from 'material-ui/Divider';
import FormSignIn from '../../../user/containers/Sign/FormSignIn';
import FormSignUp from '../../../user/containers/Sign/FormSignUp';
import {Link} from 'react-router-dom';
import Typography from 'material-ui/Typography';

import SocialImg from './assets/images/socImg.png';


const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: '10px 45px'
    },
    btnClose: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    label: {
        color: '#519be2',
    },
    socialBox: {
        textAlign: 'center',
        marginTop:26,
        '& > span': {
            color: '#9299a2',
            position:'relative',
            display:'block',
            marginBottom:20,
            '&:before': {
                position:'absolute',
                content:'""',
                display:'block',
                top:'50%',
                left:0,
                height:1,
                width:235,
                background:'#e1e1e1',
                zIndex:2,
            },
            '&:after': {
                position:'absolute',
                content:'""',
                display:'block',
                top:'50%',
                right:0,
                height:1,
                width:235,
                background:'#e1e1e1',
                zIndex:2,
            },
        },
        '& > div':{
            textAlign: 'center',
            '& > a': {
                display:'inline-block',
                height:44,
                width:44,
                marginRight:10,
            },
        },
    },
    vk: {
        background: `url(${SocialImg}) no-repeat 0 0`,
    },
    fb: {
        background: `url(${SocialImg}) no-repeat -54px 0`,
    },
    gl: {
        background: `url(${SocialImg}) no-repeat -108px 0`,
    },
    ok: {
        background: `url(${SocialImg}) no-repeat -162px 0`,
    },
    mr: {
        background: `url(${SocialImg}) no-repeat -216px 0`,
    },
});


class DlgSign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: props.activeTab || 'in',
        };
    }

    handleChangeTab = (event, value) => {
        this.setState({activeTab: value});
    };

    handleRequestClose = () => {
        this.props.onRequestClose();
    };

    render() {
        const { classes, ...other } = this.props;
        return (
            <Dialog className={classes.root} onRequestClose={this.handleRequestClose} {...other}>
                <DialogTitle>
                    <Tabs value={this.state.activeTab}
                          onChange={this.handleChangeTab}>
                        <Tab label="Вход" value="in" classes={{
                            label: classes.label,
                        }} />
                        <Tab label="Регистрация" value="up" classes={{
                            label: classes.label,
                        }} />
                    </Tabs>
                    <Divider light />
                    <IconButton
                        className={classes.btnClose}
                        onClick={this.handleRequestClose}
                    >
                        <Icon>close</Icon>
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                {this.state.activeTab === 'in' && <FormSignIn/>}
                {this.state.activeTab === 'up' && ( <FormSignUp/> )}
                <div className={classes.socialBox}>
                    <Typography type="caption">или</Typography>
                    <div>
                        <Link to='/'className={classes.vk}></Link>
                        <Link to='/' className={classes.fb}></Link>
                        <Link to='/' className={classes.gl}></Link>
                        <Link to='/' className={classes.ok}></Link>
                        <Link to='/' className={classes.mr}></Link>
                    </div>
                </div>
                </DialogContent>
            </Dialog>);
    }
}

export default withStyles(styles)(DlgSign);