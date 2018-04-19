import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import Pet from '../../components/Pet';
import {go} from '../../../common/actions';

const mapStateToProps = (state, props) => {
    return {
        user: state.user.current,
    }
};

const mapDispatchToProps = (dispatch) => ({
    goMain: () => dispatch(go('/')),
});



export default connect(mapStateToProps, mapDispatchToProps)(Pet);
