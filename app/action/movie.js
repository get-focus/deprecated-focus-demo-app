import movieServices from '../services/movie';
import {actionBuilder} from 'focus-graph/actions/entity-actions-builder';

//---------- CARACTERISTICS
const _loadCaracteristicsAction = actionBuilder({names: ['movie.movieCaracteristics'], type:'load', service: movieServices.loadMovieCaracteristics});
export const loadCaracteristicsTypes = _loadCaracteristicsAction.types;
export const loadCaracteristicsAction = _loadCaracteristicsAction.action;

const _saveCaracteristicsAction = actionBuilder({names: ['movie.movieCaracteristics'], type:'save', service: movieServices.updateMovieCaracteristics});
export const saveCaracteristicsTypes = _saveCaracteristicsAction.types;
export const saveCaracteristicsAction = _saveCaracteristicsAction.action;

//---------- SYNOPSIS
const _loadSynopsisAction = actionBuilder({names: ['movie.movieSynopsis'], type:'load', service: movieServices.loadMovieSynopsis});
export const loadSynopsisTypes = _loadSynopsisAction.types;
export const loadSynopsisAction = _loadSynopsisAction.action;

const _saveSynopsisAction = actionBuilder({names: ['movie.movieSynopsis'], type:'save', service: movieServices.updateMovieSynopsis});
export const saveSynopsisTypes = _saveSynopsisAction.types;
export const saveSynopsisAction = _saveSynopsisAction.action;

//---------- SYNOPSIS
const _loadTrailerAction = actionBuilder({names: ['movie.movieTrailer'], type:'load', service: movieServices.loadMovieTrailer});
export const loadTrailerTypes = _loadTrailerAction.types;
export const loadTrailerAction = _loadTrailerAction.action;

//---------- CASTING
const _loadCastingAction = actionBuilder({names: ['movie.moviePeople'], type:'load', service: movieServices.loadMovieCasting});
export const loadCastingTypes = _loadCastingAction.types;
export const loadCastingAction = _loadCastingAction.action;


// export const castingActions = {
//     loadPeople: actionBuilder({
//         node: 'movieCasting',
//         service: movieServices.loadMovieCasting,
//         shouldDumpStoreOnActionCall: true,
//         status: 'loaded'
//     })
// }
