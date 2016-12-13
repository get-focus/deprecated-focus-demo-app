import React, {PureComponent} from 'react';
import compose from 'lodash/flowRight';
import ConnectedAdvancedSearch from '../components/search/connected-advanced-search';
import SearchHeader from '../components/search/header';
import DemoTitle from '../components/demo-title';
import {connect as connectToHeader} from 'focus-application/behaviours/header';
import Panel from 'focus-components/panel';


class Home extends PureComponent {
    render() {
        return (
            <div data-demo='home-view'>
                <ConnectedAdvancedSearch />
            </div>
        );
    }
};
const HomeExtended = compose(
    connectToHeader({
        ExpandedHeaderComponent: SearchHeader,
        SummaryHeaderComponent: SearchHeader,
        LeftHeaderComponent: DemoTitle
    })
)(Home);
export default HomeExtended;
