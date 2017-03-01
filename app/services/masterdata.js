import {fetchBuilder} from 'focus-application/fetch/fetch-proxy';

const fetch = fetchBuilder({
    baseUrl: 'http://localhost:8080/masterdata/',
    useCredentials: true
});

export default {
    loadGenders() {
        return fetch({url: `genders`, method: 'GET'});
    }
}
