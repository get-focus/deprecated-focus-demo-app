import React, {PropTypes, PureComponent} from 'react';

import compose from 'lodash/flowRight';
import {connect as connectToHeader} from 'focus-application/behaviours/header';
import ScrollspyContainer from 'focus-components/scrollspy-container';
import ButtonBack from '../../components/go-back-button';

import Caracteristics from './caracteristics';
import Casting from './casting';
import HeaderExpanded from './header-content-expanded';
import HeaderSummary from './header-content-summary';
import Overview from './overview';
import Posters from './posters';
import Synopsis from './synospis';
import Trailer from './trailer';


class MovieDetailView extends PureComponent {
    componentDidMount() {
        window.scrollTo(0, 0);
    };

    render() {
        const {id} = this.props;
        return (
            <ScrollspyContainer>
                <Caracteristics id={id} />
            </ScrollspyContainer>
        );
    }
};

MovieDetailView.displayName = 'MovieDetailView';
MovieDetailView.propTypes = {
    id: PropTypes.number.isRequired
};
export default compose(
    connectToHeader({
        ExpandedHeaderComponent: HeaderExpanded,
        SummaryHeaderComponent: HeaderSummary,
        LeftHeaderComponent: ButtonBack
    })
)(MovieDetailView);
