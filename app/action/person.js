import personServices from '../services/person';
import {actionBuilder} from 'focus-graph/actions/entity-actions-builder';

//---------- IDENTITY
const _loadIdentityAction = actionBuilder({names: ['personIdentity'], type:'load', service: personServices.loadPerson});
export const loadIdentityTypes = _loadIdentityAction.types;
export const loadIdentityAction = _loadIdentityAction.action;

const _saveIdentityAction = actionBuilder({names: ['personIdentity'], type:'save', service: personServices.updatePersonIdentity});
export const saveIdentityTypes = _saveIdentityAction.types;
export const saveIdentityAction = _saveIdentityAction.action;

//---------- BIOGRAPHY
const _loadBiographyAction = actionBuilder({names: ['personBiography'], type:'load', service: personServices.loadPerson});
export const loadBiographyTypes = _loadBiographyAction.types;
export const loadBiographyAction = _loadBiographyAction.action;

const _saveBiographyAction = actionBuilder({names: ['personBiography'], type:'save', service: personServices.updatePersonBiography});
export const saveBiographyTypes = _saveBiographyAction.types;
export const saveBiographyAction = _saveBiographyAction.action;

//---------- MOVIE LINKS
const _movieLinksAction = actionBuilder({names: ['movieLink'], type:'load', service: personServices.loadPersonMovies});
export const loadMovieLinksTypes = _movieLinksAction.types;
export const loadMovieLinksAction = _movieLinksAction.action;

//---------- FILMOGRAPY
const _loadFilmographyAction = actionBuilder({names: ['personFilmography'], type:'load', service: personServices.loadPerson});
export const loadFilmographyTypes = _loadFilmographyAction.types;
export const loadFilmographyAction = _loadFilmographyAction.action;
