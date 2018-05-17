
import React, {Component} from 'react';
import {withWrapper} from "create-react-server/wrapper";
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import {go} from '../actions'

import Main from '../components/Main';
import {getPopularObject} from '../actions';


const mapStateToProps = (state, props) => ({
    type: props.match.params.type,
    popular: state.common.object,
    subdomen: state.common.subdomen,
});

const mapDispatchToProps = (dispatch) => ({
    hideAlert: () => dispatch(removeAlert()),
    goAgency:() => dispatch(go(`/ListingAgency/AgencyPage`)),
    goDeveloper:() => dispatch(go(`/Developers/DeveloperPage`)),
    goRieltor:() => dispatch(go(`/Rieltors/RieltorsPage`)),
});

class Wrap extends Component {
    static async getInitialProps({location, query, params, store}) {
        await store.dispatch(getPopularObject());
    };
    componentDidMount() {
        this.props.getInitialProps();
    }

    render() {
        return <Main {...this.props} />
    }

}


Wrap = connect(mapStateToProps, mapDispatchToProps)(Wrap);


export default withWrapper(Wrap);

