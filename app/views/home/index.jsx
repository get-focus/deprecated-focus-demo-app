import React, {Component, PureComponent} from 'react';
import compose from 'lodash/flowRight';
import ConnectedAdvancedSearch from '../components/search/connected-advanced-search';
import SearchHeader from '../components/search/header';
import DemoTitle from '../components/demo-title';
import {connect as connectToHeader} from 'focus-application/behaviours/header';
import Panel from 'focus-components/panel';
import Modal from 'focus-components/modal';
import Button from 'focus-components/button';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpened: false
        }
        this._toggleModal = this._toggleModal.bind(this);
    };

    _toggleModal() {
        const {isModalOpened} = this.state;
        this.setState({
            isModalOpened: !isModalOpened
        });
    }

    render() {
        const {isModalOpened} = this.state;

        return (
            <div data-demo='home-view'>
                {`popin: ${isModalOpened}`}
                <Button label='Open modal' onClick={this._toggleModal} />
                <ConnectedAdvancedSearch />
                {isModalOpened &&
                    <Modal open={true} clickHandler={this._toggleModal}>
                        toto
                    </Modal>
                }
            </div>
        );
    }
};



const HomeExtended = compose(
    connectToHeader({
        ExpandedHeaderComponent: SearchHeader,
        SummaryHeaderComponent: SearchHeader,
        LeftHeaderComponent: DemoTitle
    })
)(Home);
export default HomeExtended;
