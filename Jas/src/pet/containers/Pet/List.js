import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

import List from '../../components/Pet/List';
import {getPetsList, editStartPet, deletePet, resetErrors} from '../../actions/index';
import {go} from '../../../common/actions';

const mapStateToProps = (state) => {
    return {
        user: state.user.current,
        codeconf: state.user.codeconf,
        petlist: state.pet.list,
        edit: state.pet.edit,
    }
};

const mapDispatchToProps = (dispatch) => ({
    goMain: () => dispatch(go('/license-cost')),

    getPetsList: () => dispatch(getPetsList()),
    editStartPet: (data) => dispatch(editStartPet(data)),
    deletePet: (objectId) => dispatch(deletePet(objectId)),
    resetPetErrors: () => dispatch(resetErrors()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List))