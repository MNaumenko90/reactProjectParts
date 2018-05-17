import React from 'react';
import {routerReducer, routerMiddleware, ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';

import {WrapperProvider} from "create-react-server/wrapper";
import {Route, Switch, Link, Redirect} from 'react-router-dom';

import T from 't-js';

import NoMatch from './common/components/NoMatch';

import theme from './theme';

import ScrollToTop from './common/components/ScrollToTop';

import NewsRouters from './news';
import CommonRouters from './common';
import UserRouters from './user';
import ObjectRouters from './objects';

const isBrowser = (typeof window !== 'undefined');

T.lang('ru');

export default ({state, props, req}, history) => {

    const Theme = theme();

    return (
        <Theme>
            <WrapperProvider initialProps={props}>
                <ScrollToTop>
                    <Switch>
                        {NewsRouters}
                        {UserRouters}
                        {ObjectRouters}
                        {CommonRouters}
                        <Route path='*' exact={true} component={NoMatch} />
                        <Redirect strict from="*/" to="*" />
                    </Switch>
                </ScrollToTop>
            </WrapperProvider>
        </Theme>
    );

};