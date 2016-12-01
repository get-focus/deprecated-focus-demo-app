import {combineReducers} from 'redux';
//import ranking from './ranking';
//import { identity, biography as person, movieLink } from './person' //TODO : remove as person when pierr will correct the bug
import {
    caracteristics as movieCaracteristics,
    casting as movieCasting,
    synopsis as movieSynopsis,
    trailer as movieTrailer
} from './movie';

// export const personMovieLinksSelector = state => state.dataset.movieLink;
// export const rankingSelector = state => state.dataset.ranking;

export default combineReducers({
    movieCaracteristics,
    movieCasting,
    movieSynopsis,
    movieTrailer
});
