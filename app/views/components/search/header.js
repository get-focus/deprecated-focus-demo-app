import React, {PropTypes, PureComponent} from 'react';
import i18next from 'i18next';
import ConnectedSearchBarComponent from './connected-search-bar';
import {withRouter} from 'react-router';


export class SearchHeaderWithRouter extends PureComponent {
    constructor(props){
        super(props);
        this._handleOnChange = this._handleOnChange.bind(this);
    }
    _handleOnChange() {
        const {router} = this.props;
        if(router) {
            router.push('/search/advanced');
        }
    }
    render() {
        const {router, ...otherProps} = this.props;
        return <SearchHeader onChange={this._handleOnChange} {...otherProps} />
    }
}
SearchHeaderWithRouter.displayName = 'SearchHeaderWithRouter';
export const SearchHeaderWithRedirect = withRouter(SearchHeaderWithRouter);

class SearchHeader extends PureComponent {
    render() {
        const {hasTitle, onChange} = this.props;
        return (
            <div data-demo='search-header'>
                {hasTitle && <h1>{i18next.t('search.cartridge.title')}</h1>}
                <ConnectedSearchBarComponent onChange={onChange} />
            </div>
        );
    };
};
SearchHeader.displayName = 'SearchHeader';
SearchHeader.propTypes = {
    hasTitle: PropTypes.bool,
    onChange: PropTypes.func
};
SearchHeader.defaultProps = {
    hasTitle: true
};
export default SearchHeader;
