import React, {PureComponent} from 'react';
import compose from 'lodash/flowRight';
import {SearchHeaderWithRedirect} from '../components/search/header';
import DemoTitle from '../components/demo-title';
import {connect as connectToHeader} from 'focus-application/behaviours/header';

class Home extends PureComponent {
    render() {
        const {confirm} = this.props;
        return (
            <div data-demo='home-view'>
                <h2>Bienvenue sur la démo de Focus</h2>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
                <div>test</div>
            </div>
        );
    }
};
const HomeExtended = compose(
    connectToHeader({
        ExpandedHeaderComponent: () => <SearchHeaderWithRedirect />,
        SummaryHeaderComponent: () => <SearchHeaderWithRedirect hasTitle={false} />,
        LeftHeaderComponent: DemoTitle
        //triggerScrollPosition: 0
}),
)(Home);
export default HomeExtended;
