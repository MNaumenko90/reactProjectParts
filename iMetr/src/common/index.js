/**
 * Created by aleksandr on 7/19/17.
 * moonion.com
 */

import React from 'react';


import PrivateRoute from './containers/PrivateRoute'
import DefaultLayout from './containers/DefaultRoute'

import NoMatch from './components/NoMatch';
import Main from './containers/Main';
import About from './components/About';
import Contacts from './components/Contacts';
import Faq from './components/Faq';
import ListingAgency from './components/ListingAgency';
import Rieltors from './components/Rieltors';
import Developers from './components/Developers';
import AgencyPage from './components/AgencyPage';
import DeveloperPage from './components/DeveloperPage';
import RieltorsPage from './components/RieltorsPage';
import Wiki from './containers/Wiki';
import WikiPage from './containers/WikiPage';
import Notariat from './components/Notariat';
import NotariatPage from './components/NotariatPage';
import NotariusPage from './components/NotariusPage';
import Zhes from './components/Zhes';
import ZhesPage from './components/ZhesPage';
import BrtiPage from './components/BrtiPage';
import Brti from './components/Brti'

const routes = [
    <DefaultLayout key="wikiPage" path="/wiki/:id" exact={true} component={WikiPage}/>,
    <DefaultLayout key="wiki" path="/wiki" exact={true} component={Wiki}/>,
    <DefaultLayout key="notariat" path="/Notariat" exact={true} component={Notariat}/>,
    <DefaultLayout key="notariatPage" path="/notariatPage" exact={true} component={NotariatPage}/>,
    <DefaultLayout key="notariusPage" path="/notariusPage" exact={true} component={NotariusPage}/>,
    <DefaultLayout key="zhes" path="/Zhes" exact={true} component={Zhes}/>,
    <DefaultLayout key="zhesPage" path="/zhesPage" exact={true} component={ZhesPage}/>,
    <DefaultLayout key="BrtiPage" path="/BrtiPage" exact={true} component={BrtiPage}/>,
    <DefaultLayout key="Brti" path="/Brti" exact={true} component={Brti}/>,
    <DefaultLayout key="RieltorsPage" path="/Rieltors/RieltorsPage" exact={true} component={RieltorsPage}/>,
    <DefaultLayout key="DeveloperPage" path="/Developers/DeveloperPage" exact={true} component={DeveloperPage}/>,
    <DefaultLayout key="AgencyPage" path="/ListingAgency/AgencyPage" exact={true} component={AgencyPage}/>,
    <DefaultLayout key="ListingAgency" path="/ListingAgency" exact={true} component={ListingAgency}/>,
    <DefaultLayout key="Rieltors" path="/Rieltors" exact={true} component={Rieltors}/>,
    <DefaultLayout key="Developers" path="/Developers" exact={true} component={Developers}/>,
    <DefaultLayout key="about" path="/about" exact={true} component={About}/>,
    <DefaultLayout key="contacts" path="/contacts" exact={true} component={Contacts}/>,
    <DefaultLayout key="faq" path="/faq" exact={true} component={Faq}/>,
    <DefaultLayout key="2" path="/" exact={true} component={Main}/>,
    <DefaultLayout key="20" component={NoMatch}/>
];

export default routes;