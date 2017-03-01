// libraries
import React, {PropTypes, PureComponent} from 'react';

import compose from 'lodash/flowRight';
import {connect as connectToHeader} from 'focus-application/behaviours/header';
// web components
import ScrollspyContainer from 'focus-components/scrollspy-container';
import ButtonBack from 'focus-components/button-back';

//views
import Biography from './biography';
import HeaderExpanded from './header-content-expanded';
import HeaderSummary from './header-content-summary';
import Identity from './identity';
import Movies from './movies';
import Overview from './overview';

class PersonDetailView extends PureComponent {
    /** @inheritDoc */
    componentDidMount() {
        window.scrollTo(0, 0);
    };

    /** @inheritDoc */
    render() {
        const {id} = this.props;
        return (
            <ScrollspyContainer>
                {/* Bloc header dupliqué juste pour print*/}
                <div data-demo='print'>
                    <HeaderExpanded id={id} />
                </div>
                <div data-demo='detail-overview'>
                    <Overview id={id} />
                </div>
                <Identity id={id} />
                <Biography id={id} />
                <Movies id={id} />
            </ScrollspyContainer>
        );
    }
}

PersonDetailView.displayName = 'PersonDetailView';
PersonDetailView.propTypes = {
    id: PropTypes.number.isRequired
};

export default compose(
    connectToHeader({
        ExpandedHeaderComponent: HeaderExpanded,
        SummaryHeaderComponent: HeaderSummary,
        LeftHeaderComponent: ButtonBack
    })
)(PersonDetailView);
