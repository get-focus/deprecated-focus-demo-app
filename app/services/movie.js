import fetch from 'focus-core/network/fetch';
import movieUrl from '../config/server/movies';

export default {
    loadMovieCasting(id) {
        console.log(`[MOVIE] call loadCasting(${id}) method`);
        return fetch(movieUrl.loadCasting({urlData: {id}}), {isCORS: true});
    },
    loadMovieCaracteristics(id) {
        console.log(`[MOVIE] call loadCaracteristics(${id}) method`);
        return fetch(movieUrl.loadCaracteristics({urlData: {id}}), {isCORS: true});
    },
    loadMovieSynopsis(id) {
        console.log(`[MOVIE] call loadSynopsis(${id}) method`);
        return fetch(movieUrl.loadSynopsis({urlData: {id}}), {isCORS: true});
    },
    loadMovieTrailer(id) {
        console.log(`[MOVIE] call loadTrailer(${id}) method`);
        return fetch(movieUrl.loadTrailer({urlData: {id}}), {isCORS: true});
    },
    updateMovieCaracteristics({movie}) {
        const movieId = movie.code;
        const newData = omit(movie, ['actors', 'camera', 'directors', 'producers', 'writers']);
        console.log(`[MOVIE] call updateMovieCaracteristics ${movieId} method. data=${JSON.stringify(newData)}`);
        // return fetch(movieUrl.update({urlData: {id: movieId}, data: newData}), {isCORS: true});
    },
    updateMovieSynopsis({movie}) {
        const movieId = movie.id;
        const newData = omit(movie, ['actors', 'camera', 'directors', 'producers', 'writers']);
        console.log(`[MOVIE] call updateMovieSynopsis method. data=${JSON.stringify(newData)}`);
        // return fetch(movieUrl.update({urlData: {id: movieId}, data: newData}), {isCORS: true});
    }
}
