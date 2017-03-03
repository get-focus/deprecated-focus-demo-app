import builder from 'focus-core/util/url/builder';
import {apiRoot} from './index';

const personRoot = `${apiRoot}persons/`;
const personUrlRoot = `${apiRoot}persons`;
const skipParam = '${skip}';
const sortFieldNameParam = '${sortFieldName}';
const sortDescParam = '${sortDesc}';
const topParam = '${top}';

export default {
    create: builder(personRoot, 'POST'),
    load: builder(personRoot + '${id}', 'GET'),
    search: builder(`${personUrlRoot}/search?listState.skip=${skipParam}&listState.sortFieldName=${sortFieldNameParam}&listState.sortDesc=${sortDescParam}&listState.top=${topParam}`, 'POST'),
    update: builder(personRoot + '${id}', 'PUT')
};
