import React, {PureComponent} from 'react';
import i18next from 'i18next';
import {connect as connectToStore} from 'react-redux';
import {connect as connectToForm } from 'focus-graph/behaviours/form';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {compose} from 'redux';
import {selectData} from 'focus-graph/store/create-store';

// components
import Panel from 'focus-components/panel';
import Button from 'focus-components/button';

//pourcentage de completude<br/>
// nombre de films<br/>
// nombre de réalisations<br/>

class PersonOverview extends PureComponent {
    render() {
        const code = this.props.id;
        const url = `http://www.allocine.fr/personne/fichepersonne_gen_cpersonne=${code}.html`;
        return (
            <Panel title='view.person.detail.overview' data-demo='overview' Buttons={null}>
                <Button label={i18next.t('view.person.action.consult.allocine')} type='button' handleOnClick={() => window.open(url,'_blank')} />
            </Panel>
        );
    }
}

PersonOverview.displayName = 'PersonOverview';

export default compose(
    connectToStore(selectData('personBiography')),
    connectToForm({
        formKey: 'personBiographyForm',
        entityPathArray: ['personBiography']
    }),
    connectToFieldHelpers()
)(PersonOverview);
