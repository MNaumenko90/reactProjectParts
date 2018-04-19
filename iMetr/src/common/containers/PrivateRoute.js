import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

import PrivateRoute from '../components/PrivateRoute';


const mapStateToProps = (state) => ({
    isAuthenticated: !!state.user.current
});

export default withRouter(connect(mapStateToProps)(PrivateRoute))

