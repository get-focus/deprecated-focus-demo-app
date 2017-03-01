import {fetchBuilder} from 'focus-application/fetch/fetch-proxy';

const fetch = fetchBuilder({
    baseUrl: 'http://localhost:8080/movies',
    useCredentials: true
});

export default {
    loadMovieCasting(id) {
        return fetch({url: `${id}/casting`, method: 'GET'});
    },
    loadMovieCaracteristics(id) {
        return fetch({url: `${id}/caract`, method: 'GET'});
    },
    loadMovieSynopsis(id) {
        return fetch({url: `${id}/synopsis`, method: 'GET'});
    },
    loadMovieTrailer(id) {
        return fetch({url: `${id}/trailer`, method: 'GET'});
    },
    updateMovieCaracteristics({movieCaracteristics}) {
        return fetch({url: `${movieCaracteristics.movId}/caract`, method: 'PUT', data: movieCaracteristics});
    },
    updateMovieSynopsis({movieSynopsis}) {
        return fetch({url: `${movieSynopsis.movId}/synopsis`, method: 'PUT', data: movieSynopsis});
    },
    updateMovieTrailer({movieTrailer}) {
        return fetch({url: `${movieTrailer.movId}/trailer`, method: 'PUT', data: movieTrailer});
    }
}
