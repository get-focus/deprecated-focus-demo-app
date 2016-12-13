import React, {PureComponent} from 'react';
import compose from 'lodash/flowRight';
import ConnectedAdvancedSearch from '../components/search/connected-advanced-search';
import {SearchHeaderWithRedirect} from '../components/search/header';
import DemoTitle from '../components/demo-title';
import {connect as connectToHeader} from 'focus-application/behaviours/header';
import {connect as connectToMessages} from 'focus-application/behaviours/messages';


class Home extends PureComponent {
    render() {
        return (
            <div data-demo='home-view'>
                <h2>Bienvenue sur la démo de Focus</h2>
            </div>
        );
    }
};

const HomeExtended = compose(
    connectToHeader({
        ExpandedHeaderComponent: SearchHeaderWithRedirect,
        SummaryHeaderComponent: SearchHeaderWithRedirect,
        LeftHeaderComponent: DemoTitle
    })
)(Home);
export default HomeExtended;
