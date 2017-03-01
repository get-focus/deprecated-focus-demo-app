import {fetchBuilder} from 'focus-application/fetch/fetch-proxy';
import omit from 'lodash/omit';

const fetch = fetchBuilder({
    baseUrl: 'http://localhost:8080/persons',
    useCredentials: true
});

export default {
    loadPerson(id) {
        console.log(`[PERSON] call loadPerson(${id}) method`);
        return fetch({url: `${id}`, method: 'GET'}).then((data) => {data.perId = id; return data;});
    },
    loadPersonMovies(id) {
        console.log(`[PERSON] call loadPersonMovies(${id}) method`);
        return fetch({url: `${id}`, method: 'GET'}).then((data) => {
            if(data && data.movieLinks) {
                return data.movieLinks;
            }
            return [];
        });
    },
    updatePersonBiography({person}) {
        const personId = person.code;
        console.log(`[PERSON] call updatePersonBiography method. data=${JSON.stringify(person)}`);
        return fetch({url: `${personId}`, method: 'POST', data: omit(person, ['movieLinks'])});//, {isCORS: true});
    // return fetch(personUrl.update({urlData: {id: personId}, data: omit(person, ['movieLinks'])}), {isCORS: true});
    },
    updatePersonIdentity({person}) {
        const personId = person.code;
        console.log(`[PERSON] call updatePersonIdentity method. data=${JSON.stringify(person)}`);
        return fetch({url: `${personId}`, method: 'POST', data: omit(person, ['movieLinks'])});
        // return fetch(personUrl.update({urlData: {id: personId}, data: omit(person, ['movieLinks'])}), {isCORS: true});
    }
}
