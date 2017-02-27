import React, {PropTypes, PureComponent} from 'react';
import i18next from 'i18next';
import {connect as connectToStore} from 'react-redux';
import {connect as connectToForm } from 'focus-graph/behaviours/form';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {compose} from 'redux';
import {selectData} from 'focus-graph/store/create-store';

//actions
import {loadBiographyAction, saveBiographyAction} from '../../../action/person';

// web components
import Panel from 'focus-components/panel';
import Form from 'focus-components/form';

class PersonBiography extends PureComponent {
    componentWillMount() {
        const {id, load} = this.props;
        load(id);
    }

    render() {
        const {editing, fieldFor, toggleEdit, save, getUserInput, loading, saving, selectFor, renderActions} = this.props;
        return (
            <Form editing={editing}>
                <Panel title='view.person.detail.biography'>
                    {fieldFor('biography')}
                    {fieldFor('shortBiography')}
                </Panel>
            </Form>
        );
    }
};
PersonBiography.displayName = 'PersonBiography';
PersonBiography.propTypes = {
    id: PropTypes.number.isRequired
};
export default compose(
    connectToMetadata(['personBiography']),
    connectToForm({
        formKey: 'personBiographyForm',
        entityPathArray: ['personBiography'],
        loadAction: loadBiographyAction,
        saveAction: saveBiographyAction
    }),
    connectToFieldHelpers()
)(PersonBiography);
