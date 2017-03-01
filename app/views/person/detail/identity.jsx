//librairies
import React, {PropTypes, PureComponent} from 'react';
import {connect as connectToForm } from 'focus-graph/behaviours/form';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {connect as connectToMasterData} from 'focus-graph/behaviours/master-data';
import {compose} from 'redux';

//actions
import {loadIdentityAction, saveIdentityAction} from '../../../action/person';

// web components
import Panel from 'focus-components/panel';

class PersonIdentity extends PureComponent {
    componentWillMount() {
        const {id, load, loadMasterData} = this.props;
        load(id);
        loadMasterData();
    }

    render() {
        console.log('Props', this.props);
        console.log('State', this.state);

        const {fieldFor, selectFor, ...otherProps} = this.props;
        return (
            <Panel title='view.person.detail.identity' {...otherProps}>
                {fieldFor('fullName')}
                {fieldFor('firstName')}
                {selectFor('sex', {masterDatum: 'genders'})}
                {fieldFor('birthDate')}
                {fieldFor('birthPlace')}
                {fieldFor('activity')}
            </Panel>
        );
    }
}

PersonIdentity.displayName = 'PersonIdentity';
PersonIdentity.propTypes = {
    id: PropTypes.number.isRequired
};

export default compose(
    connectToMetadata(['personIdentity']),
    connectToMasterData(['genders']),
    connectToForm({
        formKey: 'personIdentityForm',
        entityPathArray: ['personIdentity'],
        loadAction: loadIdentityAction,
        saveAction: saveIdentityAction
    }),
    connectToFieldHelpers()
)(PersonIdentity);
