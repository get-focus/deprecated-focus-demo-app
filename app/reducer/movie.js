import {reducerBuilder} from 'focus-graph/reducers/reducer-builder';
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

const movieCaracteristics = reducerBuilder({
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

const movieCasting = reducerBuilder({
    name: 'movieCasting', //put here the name of the action
    loadTypes: loadCastingTypes,
    defaultData: DEFAULT_DATA
});

const movieSynopsis = reducerBuilder({
    name: 'movieSynopsis', //put here the name of the action
    loadTypes: loadSynopsisTypes,
    saveTypes: saveSynopsisTypes,
    defaultData: DEFAULT_DATA
});

const movieTrailer = reducerBuilder({
    name: 'movieTrailer', //put here the name of the action
    loadTypes: loadTrailerTypes,
    defaultData: DEFAULT_DATA
});

export default {
    movieCasting,
    movieCaracteristics,
    movieSynopsis,
    movieTrailer
}
