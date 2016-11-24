import React, {PropTypes, PureComponent} from 'react';
import {compose} from 'redux';
import {connect as connectToState} from 'react-redux';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {buildFieldForLineSearch} from 'focus-search/store';

import Button from 'focus-components/button';

function PureMovieLine({textFor, ...props}) {
    return (
        <div key={props.movId} data-demo='movie-line'>
            <div className='level1'>{props.movId}</div>
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

class GlobalGroupActions extends PureComponent {
    constructor(props) {
        super(props);
        this._onClickAction = this._onClickAction.bind(this);
    }
    _onClickAction(evt) {
        console.log('actions globales', this.props);
    }
    render() {
        return (
            <Button label="Actions globales Movies" onClick={this._onClickAction} />
        );
    }
};

export default {
    lineIdentifierProperty: 'movId',
    LineComponent: props => (<MovieLine {...props} />),
    GlobalGroupActionsComponent: props => (<GlobalGroupActions {...props} />),
    //ActionsComponent: props => (<Button label={`click sur ${props.movId}`} />),
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
