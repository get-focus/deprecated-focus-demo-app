//libraries
import React, {PropTypes, PureComponent} from 'react';
import {connect as connectToForm } from 'focus-graph/behaviours/form';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {compose} from 'redux';

//actions
import {loadSynopsisAction, saveSynopsisAction} from '../../../action/movie';

// web components
import Form from 'focus-components/form';
import Panel from 'focus-components/panel';

class MovieSynopsis extends PureComponent {
    /** @inheritDoc */
    componentWillMount() {
        const {id, load} = this.props;
        load(id);
    };
    /** @inheritDoc */
    render() {
        const {editing, fieldFor, toggleEdit, save, getUserInput, loading, saving, selectFor, renderActions} = this.props;
        return (
            <Form editing={editing}>
                <Panel title='view.movie.detail.synopsis'>
                    {fieldFor('synopsis', {entityPath: 'movieSynopsis'})}
                    {fieldFor('shortSynopsis', {entityPath: 'movieSynopsis'})}
                </Panel>
            </Form>
        );
    };
};

MovieSynopsis.displayName = 'MovieSynopsis';
MovieSynopsis.propTypes = {
    id: PropTypes.number.isRequired
};
export default compose(
    connectToMetadata(['movieSynopsis']),
    connectToForm({
        formKey: 'movieSynopsisForm',
        entityPathArray: ['movieSynopsis'],
        loadAction: loadSynopsisAction,
        saveAction: saveSynopsisAction
    }),
    connectToFieldHelpers()
)(MovieSynopsis);
