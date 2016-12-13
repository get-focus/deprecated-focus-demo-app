import React, {PropTypes, PureComponent} from 'react';
import compose from 'lodash/flowRight';
import {connect as connectToSearch} from 'focus-search/behaviours/search';
import SearchBar from 'focus-search/components/searchbar';
import {unitSearchActions} from '../../../action/search';

const searchOptions = {
    searchName : 'advancedSearch',
    unitSearch : unitSearchActions
};

// search bar component
class SearchBarComponent extends PureComponent {
    render() {
        const {onChange, SearchBarProps: {scope, scopes, term, unitSearchDispatch: {queryAction, scopeAction}}} = this.props;
        return (
            <SearchBar
                onChange={onChange}
                queryAction={queryAction}
                scope={scope}
                scopeAction={scopeAction}
                scopes={scopes}
                term={term} />
        );
    };
};
SearchBarComponent.displayName = 'SearchBarComponent';
SearchBarComponent.propTypes = {
    onChange: PropTypes.func
}

// search bar component connected to search store
const ConnectedSearchBarComponent = compose(
    connectToSearch(searchOptions)
)(SearchBarComponent);
export default ConnectedSearchBarComponent;
