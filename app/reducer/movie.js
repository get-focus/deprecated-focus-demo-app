import {reducerBuilder} from 'focus-graph/reducers/reducer-builder';
// import {combineReducers} from 'redux';
import {
    loadCaracteristicsTypes,
    saveCaracteristicsTypes,
    loadCastingTypes,
    loadTrailerTypes,
    loadSynopsisTypes,
    saveSynopsisTypes
} from '../action/movie';


// Données initiales pour la state redux
const DEFAULT_DATA = {};

export const caracteristics = reducerBuilder({
    name: 'movieCaracteristics', //put here the name of the action
    loadTypes: loadCaracteristicsTypes,
    saveTypes: saveCaracteristicsTypes,
    defaultData: DEFAULT_DATA
    // defaultData: {
    //     'title': 'Unfinished Business',
    //     'originalTitle': 'Unfinished Business',
    //     'keywords': '',
    //     'runtime': 5640,
    //     'movieType': 'Long-métrage',
    //     'productionYear': 1941
    // }
});

export const synopsis = reducerBuilder({
    name: 'movieSynopsis', //put here the name of the action
    loadTypes: loadSynopsisTypes,
    saveTypes: saveSynopsisTypes,
    defaultData: DEFAULT_DATA
});

export const trailer = reducerBuilder({
    name: 'movieTrailer', //put here the name of the action
    loadTypes: loadTrailerTypes,
    saveTypes: loadTrailerTypes, //to correct with issue https://github.com/get-focus/focus-graph/issues/59
    defaultData: DEFAULT_DATA
});

export const casting = reducerBuilder({
    name: 'moviePeopleCasting', //put here the name of the action
    loadTypes: loadCastingTypes,
    saveTypes: loadCastingTypes, //to correct with issue https://github.com/get-focus/focus-graph/issues/59
    defaultData: DEFAULT_DATA
});
