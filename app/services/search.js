import fetch from 'focus-core/network/fetch';
import lowerCase from 'lodash/lowerCase';
import {get} from 'lodash';
import {parseForVertigo} from 'focus-search/store';

import commonUrl from '../config/server/common';
import moviesUrl from '../config/server/movies';
import personsUrl from '../config/server/persons';

export default {

    /**
    * Target search service call.
    * (This should the target : search service should be written this way.)
    *
    * @param  {object} config search call configuration.
    * @param  {string} scope  scope search
    * @return {object}        search response
    */
    search(config) {
        const scope = get(config, 'query.scope', 'all');
        const configVertigo = parseForVertigo(config);
        const sortFieldName = get(configVertigo, 'urlData.sortFieldName');
        switch (scope) {
            case 'movie':
                if(!sortFieldName) {
                    configVertigo.urlData.sortFieldName = 'TITLE';
                }
                console.log(`[SEARCH MOVIE] config: ${JSON.stringify(configVertigo)}`);
                return fetch(moviesUrl.search(configVertigo));
            case 'person':
                if(!sortFieldName) {
                    configVertigo.urlData.sortFieldName = 'FULL_NAME';
                }
                console.log(`[SEARCH PERSON] config: ${JSON.stringify(configVertigo)}`);
                return fetch(personsUrl.search(configVertigo));
            default:
                console.log(`[SEARCH ALL] config: ${JSON.stringify(configVertigo)}`);
                return fetch(commonUrl.search(configVertigo));
        }
    },

    // /**
    // * Search with scope.
    // * @param  {Object} AdvancedSearch config that launches the call of this service
    // * @return {Promise}
    // */
    // scoped(config) {
    //     const {criteria} = config.data;
    //     const {scope} = criteria;
    //     return this._search(config, scope);
    // },
    // /**
    // * Search without scope.
    // * @param  {Object} AdvancedSearch config that launches the call of this service
    // * @return {Promise}
    // */
    // unscoped(config) {
    //     return this._search(config);
    // }
};
