import builder from 'focus-core/util/url/builder';
import {apiRoot} from './index';

const movieUrlRoot = `${apiRoot}movies`;
const movieIdVar = '${id}';
const skipSearchParam = '${skip}';
const skipSortParam = '${sortDesc}';
const skipTopParam = '${top}';

export default {
    //create: builder(movieUrlRoot, 'POST'),
    loadCaracteristics: builder(`${movieUrlRoot}/${movieIdVar}/caract`, 'GET'),
    loadCasting: builder(`${movieUrlRoot}/${movieIdVar}/casting`, 'GET'),
    loadSynopsis: builder(`${movieUrlRoot}/${movieIdVar}/synopsis`, 'GET'),
    loadTrailer: builder(`${movieUrlRoot}/${movieIdVar}/trailer`, 'GET'),
    search: builder(`${movieUrlRoot}/search?listState.skip=${skipSearchParam}&listState.sortDesc=${skipSearchParam}&listState.top=${skipTopParam}`, 'POST'),
    updateCaracteristics: builder(`${movieUrlRoot}/${movieIdVar}/caract`, 'PUT'),
    updateSynopsis: builder(`${movieUrlRoot}/${movieIdVar}/synopsis`, 'PUT'),
    updateTrailer: builder(`${movieUrlRoot}/${movieIdVar}/trailer`, 'PUT')
};
