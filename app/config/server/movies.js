import builder from 'focus-core/util/url/builder';
import {apiRoot} from './index';

const movieRoot = `${apiRoot}movies/`;

export default {
    create: builder(movieRoot, 'POST'),
    loadCaracteristics: builder(movieRoot + '${id}/caract', 'GET'),
    loadCasting: builder(movieRoot + '${id}/casting', 'GET'),
    loadSynopsis: builder(movieRoot + '${id}/synopsis', 'GET'),
    loadTrailer: builder(movieRoot + '${id}/trailer', 'GET'),
    search: builder(movieRoot + 'search?listState.skip=${skip}&listState.sortDesc=${sortDesc}&listState.top=${top}', 'POST'),
    update: builder(movieRoot + '${id}', 'PUT')
};
