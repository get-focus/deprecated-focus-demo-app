import React, {PropTypes, PureComponent} from 'react';
import {compose} from 'redux';
import {connect as connectToState} from 'react-redux';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {buildFieldForLineSearch} from 'focus-search/store';
import {withRouter} from 'react-router';
import Button from 'focus-components/button';

class PureMovieLine extends PureComponent {
    render() {
        const {movId, textFor, router} = this.props;
        const route = `movies/${movId}`;
        return (
            <div key={movId} data-demo='movie-line' onClick={() => router.push(route)}>
                <div className='level1'>{textFor('title', {entityPath: 'movieCaracteristics'})}</div>
                <div className='level2'>{textFor('movieType', {entityPath: 'movieCaracteristics'})}</div>
                <div className='level3'>{textFor('productionYear', {entityPath: 'movieCaracteristics'})}</div>
            </div>
        );
    }
}

const MovieLine = compose(
    connectToMetadata(['movieCaracteristics']),
    connectToState(buildFieldForLineSearch({
        searchName: 'advancedSearch',
        codeId: 'movId',
        entityPath: 'movieCaracteristics',
        code: 'MOVIE'
    })),
    connectToFieldHelpers()
)(withRouter(PureMovieLine));

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
        {label: 'Yo', icon: 'print', action: props => console.log(props) },
        {label: 'La', icon: 'print', action: props => props.toggleModal() }
    ],
    sortList : [
        'TITLE_SORT_ONLY',
        'PRODUCTION_YEAR',
        'RUNTIME',
        'PRESS_RATING',
        'USER_RATING'
    ],
    groupList: [
        'FCT_MOVIE_TYPE',
        'FCT_MOVIE_TITLE',
        'FCT_MOVIE_YEAR'
    ]
};
