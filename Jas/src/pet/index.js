import React from 'react';
import PrivateRoute from '../common/containers/PrivateRoute'
import DefaultLayout from '../common/containers/DefaultRoute'

import Pet from './containers/Pet';


const routes = [
  <DefaultLayout key="Pet" path="/pet" component={Pet} hideHeader/>,
];


export default routes;
