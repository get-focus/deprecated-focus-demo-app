import React, {PropTypes, PureComponent} from 'react';
import i18next from 'i18next';
import ConnectedSearchBarComponent from './connected-search-bar';
import {withRouter} from 'react-router';

export class SearchHeaderWithRouter extends PureComponent {
    render() {
        const {router} = this.props;
        return <SearchHeader onChange={() => router.push('/search/advanced')} />
    }
}
SearchHeaderWithRouter.displayName = 'SearchHeaderWithRedirect';
export const SearchHeaderWithRedirect = withRouter(SearchHeaderWithRouter);


class SearchHeader extends PureComponent {
    render() {
        const {onChange} = this.props;
        return (
            <div data-demo='search-header'>
                <h1>{i18next.t('search.cartridge.title')}</h1>
                <ConnectedSearchBarComponent onChange={onChange} />
            </div>
        );
    }
};
SearchHeader.displayName = 'SearchHeader';
SearchHeader.propTypes = {
    onChange: PropTypes.func
}
export default SearchHeader;
