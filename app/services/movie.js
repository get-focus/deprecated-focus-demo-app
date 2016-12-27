import {fetchAsync} from './fetch';
import movieUrl from '../config/server/movies';

export default {
    loadMovieCasting(id) {
        console.log(`[MOVIE] call loadCasting(${id}) method`);
        return fetch(movieUrl.loadCasting({urlData: {id}}), {isCORS: true});
    },
//---------------------------------------------------------------------------------------------------------------------------------------------------------
    loadMovieCaracteristics(id) {
        console.log(`[MOVIE] call loadCaracteristics(${id}) method`);
        return fetchAsync({url: `http://localhost:8080/movies/${id}/caract`, method: 'GET'}).then((data) => {data.movId = id; return data;});
        //return fetch(movieUrl.loadCaracteristics({urlData: {id}}), {isCORS: true}).then((data) => {data.movId = id; return data;});
    },
//------------------------------------------------------------------------------------------------------------------------------------------------------
    loadMovieSynopsis(id) {
        console.log(`[MOVIE] call loadSynopsis(${id}) method`);
        return fetch(movieUrl.loadSynopsis({urlData: {id}}), {isCORS: true}).then((data) => {data.movId = id; return data;});
    },
    loadMovieTrailer(id) {
        console.log(`[MOVIE] call loadTrailer(${id}) method`);
        return fetch(movieUrl.loadTrailer({urlData: {id}}), {isCORS: true}).then((data) => {data.movId = id; return data;});
    },
    updateMovieCaracteristics(data) {
        const {movieCaracteristics} = data
        const {movId} = movieCaracteristics;
        if(movieCaracteristics.keywords === '') {
            movieCaracteristics.keywords = undefined;
        }
        console.log(data)
        console.log(`[MOVIE] call updateMovieCaracteristics ${movId} method. data=${JSON.stringify(movieCaracteristics)}`);
        return fetchAsync({url: `http://localhost:8080/movies/${movId}/caract`, method: 'PUT', data: movieCaracteristics}).then((data) => {data.movId = movId; return data;});
        //return fetch(movieUrl.updateCaracteristics({urlData: {id: movId}, data: movieCaracteristics}), {isCORS: true}).then((data) => {data.movId = movId; return data;});
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
