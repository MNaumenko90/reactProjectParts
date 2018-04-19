/**
 * Created by aleksandr on 7/19/17.
 * moonion.com
 */
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

import FormEdit from '../../components/Pet/FormEdit';
import {savePet, addError, resetErrors, rmError} from '../../actions/index';

const mapStateToProps = (state) => {
    return {
        user: state.user.current,
        edit: state.pet.edit,
        errors: state.pet.errors,
        config: state.pet.config,
    }
};

const mapDispatchToProps = (dispatch) => ({
    savePet: (data) => dispatch(savePet(data)),

    addError: (error) => dispatch(addError(error)),
    rmError: (error) => dispatch(rmError(error)),
    resetErrors: (propery) => dispatch(resetErrors(propery)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FormEdit))