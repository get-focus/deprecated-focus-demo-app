import React, {PropTypes, PureComponent} from 'react';
import {connect as connectToForm } from 'focus-graph/behaviours/form';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {compose} from 'redux';
import Form from 'focus-components/form';
import Panel from 'focus-components/panel';

import {loadCaracteristicsAction, saveCaracteristicsAction} from '../../../action/movie';

class MovieCaracteristics extends PureComponent {
    /** @inheritDoc */
    componentWillMount() {
        const {id, load} = this.props;
        load(id);
    }
    /** @inheritDoc */
    render() {
        const {editing, fieldFor, toggleEdit, save, getUserInput, loading, saving, selectFor, renderActions} = this.props;
        const panelProps = {editing, loading, save, saving, toggleEdit, getUserInput};
        return (
            <Panel title='view.movie.detail.caracteristics' {...panelProps}>
                {fieldFor('title', {entityPath: 'movieCaracteristics'})}
                {fieldFor('originalTitle', {entityPath: 'movieCaracteristics'})}
                {fieldFor('keywords', {entityPath: 'movieCaracteristics'})}
                {fieldFor('runtime', {entityPath: 'movieCaracteristics'})}
                {fieldFor('movieType', {entityPath: 'movieCaracteristics'})}
                {fieldFor('productionYear', {entityPath: 'movieCaracteristics'})}
            </Panel>
        );
    }
};
MovieCaracteristics.displayName = 'MovieCaracteristics';
MovieCaracteristics.propTypes = {
    id: PropTypes.number.isRequired
};
export default compose(
    connectToMetadata(['movieCaracteristics']),
    connectToForm({
        formKey: 'movieCaracteristicsForm',
        entityPathArray: ['movieCaracteristics'],
        loadAction: loadCaracteristicsAction,
        saveAction: saveCaracteristicsAction
    }),
    connectToFieldHelpers()
)(MovieCaracteristics);
