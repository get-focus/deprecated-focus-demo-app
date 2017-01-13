// import fetch from 'focus-core/network/fetch';
import masterdataUrl from '../config/server/masterdatas';
import focusFetch from 'focus-application/fetch/fetch-proxy'

export default {
    loadGenders() {
        // console.log(`[MASTERDATA] call loadGenders() method`);
        return focusFetch({url: "http://localhost:8080/masterdata/genders", method: 'GET'});
    }
}
