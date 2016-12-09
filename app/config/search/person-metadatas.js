import React, {PropTypes} from 'react';
import {compose} from 'redux';
import {connect as connectToState} from 'react-redux';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {buildFieldForLineSearch} from 'focus-search/store';


function PurePersonLine({textFor, perId, ...props}) {
    return (
        <div key={perId} data-demo='person-line'>
            <div className='level1'>{textFor('fullName', {entityPath: 'person'})}</div>
        </div>
    );
};

const PersonLine = compose(
    connectToMetadata(['person']),
    connectToState(buildFieldForLineSearch({
        searchName: 'advancedSearch',
        codeId : 'perId',
        entityPath: 'person',
        code: 'PERSON'
    })),
    connectToFieldHelpers()
)(PurePersonLine);


export default {
    lineIdentifierProperty: 'perId',
    LineComponent: props => (<PersonLine {...props} />),
    sortDefaultValue: 'fullName',
    sortList : [
        'ACTIVITY',
        'BIOGRAPHY',
        'FULL_NAME_SORT_ONLY',
        'SEX',
        'BIRTH_DATE',
        'FULL_NAME',
        'BIRTH_PLACE'
    ],
    groupList: [
        'FCT_PERSON_ACTIVITY',
        'FCT_PERSON_NAME',
        'FCT_PERSON_SEX'
    ]
};
