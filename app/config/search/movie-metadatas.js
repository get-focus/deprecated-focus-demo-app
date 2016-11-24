import React, {PropTypes} from 'react';
import {compose} from 'redux';
import {connect as connectToState} from 'react-redux';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {buildFieldForLineSearch} from 'focus-search/store';


function PureMovieLine({textFor, movId, ...props}) {
    return (
        <div key={movId} data-demo='movie-line'>
            <div className='level1'>{textFor('title', {entityPath: 'movie'})}</div>
            <div className='level2'>{textFor('movieType', {entityPath: 'movie'})}</div>
            <div className='level3'>{textFor('productionYear', {entityPath: 'movie'})}</div>
        </div>
    );
};

const MovieLine = compose(
    connectToMetadata(['movie']),
    connectToState(buildFieldForLineSearch({
        searchName: 'advancedSearch',
        codeId : 'movId',
        entityPath: 'movie',
        code: 'MOVIE'
    })),
    connectToFieldHelpers()
)(PureMovieLine);


export default {
    lineIdentifierProperty: 'movId',
    LineComponent: props => (<MovieLine {...props} />),
    actionsLine: [
        {label: 'Yo', icon: 'print', action: () => {console.log('action')}},
        {label: 'La', icon: 'print', action: () => {console.log('action')}}
    ],
    sortList : [
        'ouuuuaaa',
        'trrropo',
        'lalal'
    ],
    groupList: [
        'lala',
        'lulu',
        'lolo'
    ]
};
