//libraries
import React, {PropTypes, PureComponent} from 'react';
import {connect as connectToForm } from 'focus-graph/behaviours/form';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {compose} from 'redux';

//actions
import {loadTrailerAction} from '../../../action/movie';

// web components
import Panel from 'focus-components/panel';

class MovieTrailer extends PureComponent {
    /** @inheritDoc */
    componentWillMount() {
        const {id, load} = this.props;
        load(id);
    };
    /** @inheritDoc */
    render() {
        const {fieldFor, loading} = this.props;
        return (
            <Panel title='view.movie.detail.trailer'>
                {fieldFor('trailerName', {entityPath: 'movieTrailer'})}
                {fieldFor('trailerHRef', {entityPath: 'movieTrailer'})}
                <br/>
                {/** TODO <Trailer url={trailerHRef} />*/}
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
        nonValidatedFields: ['movie.actors', 'movie.writers', 'movie.camera', 'movie.producers', 'movie.directors']
    }),
    connectToFieldHelpers()
)(MovieTrailer);
