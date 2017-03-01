//libraries
import React, {PropTypes, PureComponent} from 'react';
import {connect as connectToForm } from 'focus-graph/behaviours/form';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {compose} from 'redux';

//actions
import {loadTrailerAction} from '../../../action/movie';
import {saveTrailerAction} from '../../../action/movie';

// web components
import Panel from 'focus-components/panel';

import Trailer from '../components/trailer';

class MovieTrailer extends PureComponent {
    /** @inheritDoc */
    componentWillMount() {
        const {id, load} = this.props;
        load(id);
    };
    /** @inheritDoc */
    render() {
        const {editing, fieldFor, toggleEdit, save, getUserInput, loading, saving, selectFor, renderActions} = this.props;
        const panelProps = {editing, loading, save, saving, toggleEdit, getUserInput};
        const {data} = this.props;
        //pourcentage
        //const trailerHref = data.trailerHref;
        return (
            <Panel title='view.movie.detail.trailer' {...panelProps}>
                {fieldFor('trailerName', {entityPath: 'movieTrailer'})}
                {fieldFor('trailerHref', {entityPath: 'movieTrailer'})}
                <br/>
                {/** TODO <Trailer url={trailerHref} />*/}
            </Panel>
        );
    };
};

MovieTrailer.displayName = 'MovieTrailer';
MovieTrailer.propTypes = {
    id: PropTypes.number.isRequired
};
export default compose(
    connectToMetadata(['movieTrailer']),
    connectToForm({
        formKey: 'movieTrailerForm',
        entityPathArray: ['movieTrailer'],
        loadAction: loadTrailerAction,
        saveAction: saveTrailerAction
    }),
    connectToFieldHelpers()
)(MovieTrailer);
