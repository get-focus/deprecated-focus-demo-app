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

class PersonHeaderSummary extends PureComponent {
    render() {
        const {data, textFor} = this.props;
        const {fullName, photoHref} = data;
        return (
            <div data-demo='header-content-summary'>
                <div className="key-concept">{i18next.t('view.person.keyConcept.name')}</div>
                <Picture url={photoHref} title={fullName} />
                <h4>{textFor('fullName', {entityPath: 'personIdentity'})}</h4>
            </div>
        );
    }
}

PersonHeaderSummary.displayName = 'PersonHeaderSummary';

export default compose(
    connectToStore(selectData('personIdentity')),
    connectToMetadata(['personIdentity']),
    connectToForm({
        formKey: 'personHeaderSummaryForm',
        entityPathArray: ['personIdentity']
    }),
    connectToFieldHelpers()
)(PersonHeaderSummary);
