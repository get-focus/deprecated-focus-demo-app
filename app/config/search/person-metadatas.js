import React, {PropTypes, PureComponent} from 'react';
import {compose} from 'redux';
import {connect as connectToState} from 'react-redux';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {buildFieldForLineSearch} from 'focus-search/store';
import {withRouter} from 'react-router';

class PurePersonLine extends PureComponent {
    render() {
        const {perId, textFor, router} = this.props;
        const route = `persons/${perId}`;
        return (
            <div key={perId} data-demo='person-line' onClick={() => router.push(route)}>
                <div className='level1'>{textFor('fullName', {entityPath: 'personIdentityk'})}</div>
                <div className='level2'>{textFor('activity', {entityPath: 'personIdentityk'})}</div>
            </div>
        );
    }
};

const PersonLine = compose(
    connectToMetadata(['personLink']),
    connectToState(buildFieldForLineSearch({
        searchName: 'advancedSearch',
        codeId : 'perId',
        entityPath: 'personIdentityk',
        code: 'PERSON'
    })),
    connectToFieldHelpers()
)(withRouter(PurePersonLine));

export default {
    lineIdentifierProperty: 'perId',
    LineComponent: props => (<PersonLine {...props} />),
    sortDefaultValue: 'fullName',
    sortList : [
        'ACTIVITY',
        'FULL_NAME_SORT_ONLY',
        'BIRTH_DATE',
        'BIRTH_PLACE'
    ],
    groupList: [
        'FCT_PERSON_ACTIVITY',
        'FCT_PERSON_NAME',
        'FCT_PERSON_SEX'
    ]
};
