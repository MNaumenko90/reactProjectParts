import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';

import SectionSearch from '../components/Main/SectionSearch';
import {setSubdomen, goSubdomen} from '../actions';
import {setFilter} from '../../objects/actions/index';

const mapStateToProps = (state, props) =>({
    filter: state.object.filter,
    subdomen: state.common.subdomen
});

const mapDispatchToProps = (dispatch) => ({
    setFilter:(props) => dispatch(setFilter(props)),
    setSubdomen:(value) => dispatch(setSubdomen(value)),
    goSubdomen:(subdomein, path, filters) => dispatch(goSubdomen(subdomein, path, filters))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SectionSearch));
