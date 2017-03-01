import React, {PropTypes, PureComponent} from 'react';
import i18next from 'i18next';
import {connect as connectToStore} from 'react-redux';
import {connect as connectToForm } from 'focus-graph/behaviours/form';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {compose} from 'redux';
import {selectData} from 'focus-graph/store/create-store';

//custom components
import Picture from '../components/picture';

class PersonHeaderExpanded extends PureComponent {
    render() {
        const {data, textFor} = this.props;
        //essai
        const {fullName, photoURL} = data;
        return (
            <div data-demo='header-content-expanded'>
                <Picture url={photoURL} title={fullName} />
                <div data-demo='header-content-expanded__infos'>
                    <div className="key-concept">{i18next.t('view.person.keyConcept.name')}</div>
                    <h3>{textFor('fullName', {entityPath: 'personIdentity'})}</h3>
                    <h5>{textFor('activity', {entityPath: 'personIdentity'})}</h5>
                    <div>{textFor('shortBiography', {entityPath: 'personBiography'})}</div>
                </div>
            </div>
        );
    }
}

PersonHeaderExpanded.displayName = 'PersonHeaderExpanded';

export default compose(
    connectToStore(selectData('personBiography', 'personIdentity')),
    connectToMetadata(['personBiography', 'personIdentity']),
    connectToForm({
        formKey: 'personLinkForm',
        entityPathArray: ['personBiography', 'personIdentity']
    }),
    connectToFieldHelpers()
)(PersonHeaderExpanded);
