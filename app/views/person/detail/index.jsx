// libraries
import React, {PropTypes, PureComponent} from 'react';

import compose from 'lodash/flowRight';
import {connect as connectToHeader} from 'focus-application/behaviours/header';
// web components
import ScrollspyContainer from 'focus-components/scrollspy-container';
import ButtonBack from '../../components/go-back-button';

//views
import HeaderExpanded from './header-content-expanded';
import HeaderSummary from './header-content-summary';
import Biography from './biography';
import Identity from './identity';
import Movies from './movies';
import Overview from './overview';

class PersonDetailView extends PureComponent {
    /** @inheritDoc */
    componentWillMount() {
        //setHeader(cartridgeConf);
    };
    /** @inheritDoc */
    componentDidMount() {
        window.scrollTo(0, 0);
    };

    /** @inheritDoc */
    render() {
        const {id} = this.props;
        return (
            <ScrollspyContainer>
                <div data-demo='print-page-breaker'>
                    {/* Bloc header dupliqué juste pour print*/}
                    <div data-demo='print'>
                        <HeaderExpanded hasLoad={false}/>
                    </div>
                    <div data-demo='detail-overview'>
                        <Overview hasLoad={false} hasForm={false} />
                    </div>
                    <Identity id={id} />
                </div>
                <div data-demo='print-page-breaker'>
                    <Biography id={id} />
                </div>
                <Movies id={id} />
            </ScrollspyContainer>
        );
    };
};

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
