import {reducerBuilder} from 'focus-graph/reducers/reducer-builder';
import {
    loadBiographyTypes,
    saveBiographyTypes,
    loadIdentityTypes,
    saveIdentityTypes,
    loadMovieLinksTypes,
    loadFilmographyTypes,
    loadLinkTypes
} from '../action/person';

// Données initiales pour la state redux
const DEFAULT_DATA = {};

export const personIdentity = reducerBuilder({
    name: 'personIdentity', //put here the name of the action
    loadTypes: loadIdentityTypes,
    saveTypes: saveIdentityTypes,
    defaultData: DEFAULT_DATA
});

export const personBiography = reducerBuilder({
    name: 'personBiography', //put here the name of the action
    loadTypes: loadBiographyTypes,
    saveTypes: saveBiographyTypes,
    defaultData: DEFAULT_DATA
});

export const personFilmography = reducerBuilder({
    name: 'personFilmography',
    loadTypes: loadFilmographyTypes,
    defaultData: DEFAULT_DATA
});

export const personLink = reducerBuilder({
    name: 'personLink',
    loadTypes: loadLinkTypes,
    defaultData: DEFAULT_DATA
});

//TODO : Ajouter les cas de chargement et d'erreur.
export const movieLink = (state = DEFAULT_DATA, action) => {
    switch(action.type) {
        case loadMovieLinksTypes.RESPONSE_LOAD_MOVIELINK:
            return { ...state, movieLink: action.payload };
        default:
            return state;
    }
};

export default {
    personIdentity,
    personBiography,
    personFilmography
};
