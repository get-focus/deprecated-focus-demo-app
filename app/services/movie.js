import {fetchBuilder} from 'focus-application/fetch/fetch-proxy';
import omit from 'lodash/omit';

const fetch = fetchBuilder({
    baseUrl: 'http://localhost:8080/movies',
    useCredentials: true
});

export default {
    loadMovieCasting(id) {
        console.log(`[MOVIE] call loadCasting(${id}) method`);
        return fetch({url: `${id}`, method: 'GET'});
    },
    loadMovieCaracteristics(id) {
        console.log(`[MOVIE] call loadCaracteristics(${id}) method`);
        return fetch({url: `${id}/caract`, method: 'GET'}).then((data) => {data.movId = id; return data;});
    },
    loadMovieSynopsis(id) {
        console.log(`[MOVIE] call loadSynopsis(${id}) method`);
        return fetch({url: `${id}/synopsis`, method: 'GET'}).then((data) => {data.movId = id; return data;});
    },
    loadMovieTrailer(id) {
        console.log(`[MOVIE] call loadTrailer(${id}) method`);
        return fetch({url: `${id}/trailer`, method: 'GET'}).then((data) => {data.movId = id; return data;});
    },
    updateMovieCaracteristics({movieCaracteristics}) {
        const {movId} = movieCaracteristics;
        if(movieCaracteristics.keywords === '') {
            movieCaracteristics.keywords = undefined;
        }
        console.log(`[MOVIE] call updateMovieCaracteristics ${movId} method. data=${JSON.stringify(movieCaracteristics)}`);
        //return fetch({url: `${id}/caract`, method: 'POST'}).then((data) => {data.movId = id; return data;});
        return fetch(movieUrl.updateCaracteristics({urlData: {id: movId}, data: movieCaracteristics}), {isCORS: true}).then((data) => {data.movId = movId; return data;});
    },
    updateMovieSynopsis({movieSynopsis}) {
        const {movId} = movieSynopsis;
        console.log(`[MOVIE] call updateSynopsis ${movId} method. data=${JSON.stringify(movieSynopsis)}`);
        return fetch(movieUrl.updateSynopsis({urlData: {id: movId}, data: movieSynopsis}), {isCORS: true}).then((data) => {data.movId = movId; return data;});
    },
    updateMovieTrailer({movieTrailer}) {
        const {movId} = movieTrailer;
        console.log(`[MOVIE] call updateTrailer ${movId} method. data=${JSON.stringify(movieTrailer)}`);
        return fetch(movieUrl.updateTrailer({urlData: {id: movId}, data: movieTrailer}), {isCORS: true}).then((data) => {data.movId = movId; return data;});
    }
}
