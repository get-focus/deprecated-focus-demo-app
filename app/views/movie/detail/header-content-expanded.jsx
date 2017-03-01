import React, {PureComponent} from 'react';
import i18next from 'i18next';
import {connect as connectToStore} from 'react-redux';
import {connect as connectToForm } from 'focus-graph/behaviours/form';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {compose} from 'redux';
import {selectData} from 'focus-graph/store/create-store';

//custom components
import Poster from '../components/poster';

class MovieHeaderExpanded extends PureComponent {
    render() {
        const {data, textFor} = this.props;
        //essaiMovie
        const {title, poster, trailerHref} = data;
        return (
            <div data-demo='header-content-expanded'>
                <Poster poster={poster} title={title} hasZoom={true} />
                <div data-demo='header-content-expanded__infos'>
                    <div className="key-concept">{i18next.t('view.movie.keyConcept.name')}</div>
                    <h3>{textFor('title', {entityPath: 'movieCaracteristics'})}</h3>
                    <h5>{textFor('movieType', {entityPath: 'movieCaracteristics'})}</h5>
                    <h6>{textFor('productionYear', {entityPath: 'movieCaracteristics'})}</h6>
                    <div>{textFor('shortSynopsis', {entityPath: 'movieSynopsis'})}</div>
                </div>
            </div>
        );
    }
}

MovieHeaderExpanded.displayName = 'MovieHeaderExpanded';

export default compose(
    connectToStore(selectData('movieCaracteristics', 'movieSynopsis')), // same thing : (state) => state.dataset.movie
    connectToMetadata(['movieCaracteristics', 'movieSynopsis']),
    connectToForm({
        formKey: 'movieHeaderExpandedForm',
        entityPathArray: ['movieCaracteristics', 'movieSynopsis']
    }), // to map fields with values
    connectToFieldHelpers()
)(MovieHeaderExpanded);
