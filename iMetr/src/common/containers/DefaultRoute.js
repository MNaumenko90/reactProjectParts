
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

import DefaultRoute from '../components/DefaultRoute';

import {removeAlert} from '../actions';
import {getCurrent} from '../../user/actions';

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.user.current,
    alert: state.common.alert,
    loader: state.common.loader,
});

const mapDispatchToProps = (dispatch) => ({
    hideAlert: () => dispatch(removeAlert()),
    getCurrentUser: () => dispatch(getCurrent()),
});

class Wrap extends Component {

    componentDidMount() {
        this.props.getCurrentUser();
    }

    render() {
        return <DefaultRoute {...this.props} />
    }

}
Wrap = connect(mapStateToProps, mapDispatchToProps)(Wrap);

export default withRouter(Wrap);
