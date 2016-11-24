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
    LineComponent: props => (<PersonLine {...props} />),
    sortList : [
        'lala',
        'lolo',
        'lulu'
    ],
    groupList: [
        'lala',
        'lulu'
    ]
};
