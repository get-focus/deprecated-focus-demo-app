import builder from 'focus-core/util/url/builder';
import {apiRoot} from './index';

const movieUrlRoot = `${apiRoot}movies`;
const movieIdVar = '${id}';
const skipParam = '${skip}';
const sortFieldNameParam = '${sortFieldName}';
const sortDescParam = '${sortDesc}';
const topParam = '${top}';

export default {
    //create: builder(movieUrlRoot, 'POST'),
    loadCaracteristics: builder(`${movieUrlRoot}/${movieIdVar}/caract`, 'GET'),
    loadCasting: builder(`${movieUrlRoot}/${movieIdVar}/casting`, 'GET'),
    loadSynopsis: builder(`${movieUrlRoot}/${movieIdVar}/synopsis`, 'GET'),
    loadTrailer: builder(`${movieUrlRoot}/${movieIdVar}/trailer`, 'GET'),
    search: builder(`${movieUrlRoot}/search?listState.skip=${skipParam}&listState.sortFieldName=${sortFieldNameParam}&listState.sortDesc=${sortDescParam}&listState.top=${topParam}`, 'POST'),
    updateCaracteristics: builder(`${movieUrlRoot}/${movieIdVar}/caract`, 'PUT'),
    updateSynopsis: builder(`${movieUrlRoot}/${movieIdVar}/synopsis`, 'PUT'),
    updateTrailer: builder(`${movieUrlRoot}/${movieIdVar}/trailer`, 'PUT')
};
