import React, {PropTypes, PureComponent} from 'react';
import {connect as connectToStore} from 'react-redux';
import {connect as connectToForm } from 'focus-graph/behaviours/form';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {compose} from 'redux';
import {selectData} from 'focus-graph/store/create-store';
import i18next from 'i18next';


//custom components
import Picture from '../components/picture';

class PersonHeaderExpanded extends PureComponent {
    render() {
        const {data, textFor} = this.props;
        const {fullName, photoURL} = data;
        return (
            <div data-demo='header-content-expanded'>
                <Picture url={photoURL} title={fullName} />
                <div data-demo='header-content-expanded__infos'>
                    <div className="key-concept">{i18next.t('view.person.keyConcept.name')}</div>
                    <h3>{textFor('fullName', {entityPath: 'personLink'})}</h3>
                    <h5>{textFor('activity', {entityPath: 'personLink'})}</h5>
                    <div>{textFor('shortBiography', {entityPath: 'personLink'})}</div>
                </div>
            </div>
        );
    }
}

export default compose(
    connectToStore(
        selectData('personLink'), // same thing : (state) => state.dataset.person
    ),
    connectToMetadata(['personLink']),
    connectToForm({
        formKey: 'personLinkForm',
        entityPathArray: ['personLinkForm']
    }),
    connectToFieldHelpers()
)(PersonHeaderExpanded);
