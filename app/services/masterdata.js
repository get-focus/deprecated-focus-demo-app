import {fetchBuilder} from 'focus-application/fetch/fetch-proxy';
//import masterdataUrl from '../config/server/masterdatas';

const fetch = fetchBuilder({
    baseUrl: 'http://localhost:8080/masterdata/',
    useCredentials: true
});

/*
const movieRoot = `${apiRoot}masterdata/`;

export default {
    loadGenders: builder(movieRoot + 'genders', 'GET'),
};
*/

export default {
    loadGenders() {
        // console.log(`[MASTERDATA] call loadGenders() method`);
        //return fetch(masterdataUrl.loadGenders(), {isCORS: true});
        return fetch({url: 'genders', method: 'GET'});
    }
}
