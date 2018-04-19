import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withWrapper} from "create-react-server/wrapper";
import {PAGE_LIMIT} from '../constants';
import Wiki from '../components/Wiki';
import {getWebWikiList, setActiveWikiPage, getWebWikiCount} from '../actions/wiki';

const mapStateToProps = (state, props) => ({
    wikiList: state.common.wiki.wikiList,
    activePage: state.common.wiki.activePage,
    count: state.common.wiki.count,
    path: props.match.path,
});

const mapDispatchToProps = (dispatch) => ({
    getWebWikiList: (params) => dispatch(getWebWikiList(params)),
    getWebWikiCount: () => dispatch(getWebWikiCount()),
    setActiveWikiPage: (page) => dispatch(setActiveWikiPage(page)),
});

class Wrap extends Component {

    static async getInitialProps({location, query, params, store}) {

        let page = 1;

        if(location.search){
            const searchParams = decodeURIComponent(location.search.substring(1)).split('=');
            if (searchParams.indexOf('page') > -1) {
                let index = searchParams.indexOf('page') + 1;
                page = Number(searchParams[index]);
                await store.dispatch(setActiveWikiPage(page));
            }
        }
        await store.dispatch(getWebWikiList({ limit: PAGE_LIMIT, skip: ((page-1) * PAGE_LIMIT)  }));
        await store.dispatch(getWebWikiCount());
    };

    componentDidMount() {
        this.props.getWebWikiList({ limit: PAGE_LIMIT, skip: ((this.props.activePage-1) * PAGE_LIMIT)  });
    }

    render() {
        return <Wiki {...this.props} />
    }
}

Wrap = connect(mapStateToProps, mapDispatchToProps)(Wrap);

export default withWrapper(Wrap);