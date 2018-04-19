import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import {withWrapper} from "create-react-server/wrapper";
import {getOneWiki} from '../actions/wiki';
import WikiPage from '../components/WikiPage';

const mapStateToProps = (state) => ({
    oneTermin: state.common.wiki.oneTermin,
});

const mapDispatchToProps = (dispatch) => ({
    getOneWiki: (wikiId) => dispatch(getOneWiki(wikiId)),
});

class Wrap extends Component {
    static async getInitialProps({store, routeProps}) {
        if(routeProps){
            await store.dispatch(getOneWiki(routeProps.computedMatch.params.id));
        }
    };

    componentDidMount() {
        this.props.getOneWiki(this.props.match.params.id);
    }

    render() {
        return <WikiPage {...this.props} />
    }
}

Wrap = connect(mapStateToProps, mapDispatchToProps)(Wrap);

export default withWrapper(Wrap);