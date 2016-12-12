import React, {PropTypes} from 'react';
import {connect as connectToStore} from 'react-redux';

import ConfirmWrapper from 'focus-application/confirm';
import Header from 'focus-application/header';
import {headerIsExpandedSelector} from 'focus-application/header/header-reducer';
import {expandHeader, unExpandHeader} from 'focus-application/header/header-actions';
import Layout from 'focus-application/layout';
import LoadingBar from 'focus-application/fetch';
import MessageCenter from 'focus-application/messages';
import ScrollTrigger from 'focus-application/layout/scroll-trigger';

import ContentActionsComponent from 'focus-components/header-actions';
import ConfirmationPopin from 'focus-components/confirmation-popin';
import SnackBar from 'focus-components/snackbar';

import Menu from '../menu';
import Footer from '../footer';
import DevTools from '../../../tools/dev-tools';

//connected components
const ConnectedScrollTrigger = connectToStore(headerIsExpandedSelector,{expandHeader, unExpandHeader})(ScrollTrigger);

//wrapped components
const AppConfirmComponent = props => <ConfirmWrapper {...props} ConfirmationModal={ConfirmationPopin}/>
const AppMessageCenter = props => <MessageCenter {...props} MessageComponent={SnackBar} />
const AppHeader = props => <Header {...props} ContentActionsComponent={ContentActionsComponent} />

const AppLayout = (props) => (
    <ConnectedScrollTrigger>
        <Layout AppHeader={AppHeader} Footer={Footer} LoadingBar={LoadingBar} ConfirmWrapper={AppConfirmComponent} Menu={Menu} MessageCenter={AppMessageCenter}>
            {props.children}
            {props.hasDevtools && <DevTools />}
        </Layout>
    </ConnectedScrollTrigger>
);

AppLayout.PropTypes = {
    hasDevtools: PropTypes.bool
}
AppLayout.defaultProps = {
    hasDevtools: true
}
export default AppLayout;
