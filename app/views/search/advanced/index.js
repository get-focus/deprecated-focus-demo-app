import React, {PureComponent} from 'react';
import compose from 'lodash/flowRight';
import ConnectedAdvancedSearch from '../../components/search/connected-advanced-search';
import SearchHeader from '../../components/search/header';
import {connect as connectToHeader} from 'focus-application/behaviours/header';
import DemoTitle from '../../components/demo-title';


class AdvancedSearchView extends PureComponent {
    render() {
        return (
            <div data-demo='advanced-search-view'>
                <ConnectedAdvancedSearch />
            </div>
        )
    }
}
const AdvancedSearchViewExtended = compose(
    connectToHeader({
        ExpandedHeaderComponent: SearchHeader,
        SummaryHeaderComponent: SearchHeader
    })
)(AdvancedSearchView);
export default AdvancedSearchViewExtended;
