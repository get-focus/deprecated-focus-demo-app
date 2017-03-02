//libraries
import React, {PropTypes, PureComponent} from 'react';
import {compose} from 'redux';
import {connect as connectToStore} from 'react-redux';
import {connect as connectToForm } from 'focus-graph/behaviours/form';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {selectData} from 'focus-graph/store/create-store';

//actions
import {loadTrailerAction} from '../../../action/movie';

// web components
import Panel from 'focus-components/panel';
import Button from 'focus-components/button';
import Modal from 'focus-components/modal';
import i18next from 'i18next';

import Trailer from './trailer';

class MovieOverview extends PureComponent {
    componentWillMount() {
        const {id, load} = this.props;
        load(id);
    };
    render() {
        const {data} = this.props;
        const {data : {trailerHref}} = this.props;
        const code = data.movId;
        const url = `http://www.allocine.fr/film/fichefilm_gen_cfilm=${code}.html`;
        return (
            <Panel title='view.movie.detail.overview' data-demo='overview' Buttons={null}>
                {trailerHref &&
                    <div>
                        <Button label={i18next.t('view.movie.action.watchTrailer')} type='button' handleOnClick={() => this.refs['modal-trailer'].toggleOpen()} />
                        {<Modal ref='modal-trailer'>
                            <Trailer url={trailerHref} />
                        </Modal>}
                    </div>
                }
                <br />
                <Button label={i18next.t('view.movie.action.consult.allocine')} type='button' handleOnClick={() => window.open(url,'_blank')} />
            </Panel>
        );
    }
}

MovieOverview.displayName = 'MovieOverview';

export default compose(
    connectToStore(selectData('movieTrailer')),
    connectToMetadata(['movieTrailer']),
    connectToForm({
        formKey: 'movieTrailerForm',
        entityPathArray: ['movieTrailer'],
        loadAction: loadTrailerAction
    }),
    connectToFieldHelpers()
)(MovieOverview);
