
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

import Footer from '../components/Footer';


const mapStateToProps = (state) => ({
    isAuthenticated: false,
});

export default connect(mapStateToProps)(Footer)