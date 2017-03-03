import {fetchBuilder} from 'focus-application/fetch/fetch-proxy';
import omit from 'lodash/omit';

const fetch = fetchBuilder({
    baseUrl: 'http://localhost:8080/persons',
    useCredentials: true
});

export default {
    loadPerson(id) {
        return fetch({url: `${id}`, method: 'GET'});
    },
    loadPersonBiography(id) {
        return fetch({url: `${id}/biography`, method: 'GET'});
    },
    loadPersonIdentity(id) {
        return fetch({url: `${id}/identity`, method: 'GET'});
    },
    loadPersonMovies(id) {
        return fetch({url: `${id}`, method: 'GET'});
    },
    updatePersonBiography({person}) {
        const personId = person.code;
        return fetch({url: `${personId}`, method: 'POST', data: omit(person, ['movieLinks'])});
    },
    updatePersonIdentity({person}) {
        const personId = person.code;
        return fetch({url: `${personId}`, method: 'POST', data: omit(person, ['movieLinks'])});
    }
}
