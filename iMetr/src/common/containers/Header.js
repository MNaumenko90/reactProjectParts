
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

import Header from '../components/Header';

import {go} from '../actions';
import {logOut} from '../../user/actions/index'

const mapStateToProps = (state) => ({
    user: state.user.current,
});
const mapDispatchToProps = (dispatch) => ({
    go: page => dispatch(go(page)),
    logOut: page => dispatch(logOut()),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))