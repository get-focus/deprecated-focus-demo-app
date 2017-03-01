//libraries
import React, {PropTypes, PureComponent} from 'react';

//web components
import PersonCard from './person-card';
import {component as Modal} from 'focus-components/modal';
import PersonPreview from '../../person/preview';

class PersonCardList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            personCodePreview: null
        };
    }

    _closePopin(cb){
        this.setState({personCodePreview: null}, () => {
            cb && cb();
        });
    }

    render() {
        const {persons} = this.props;
        const {personCodePreview} = this.state;
        return (
            <div data-demo='concept-card-list'>
                {persons &&
                    persons.map(person =>
                        <PersonCard key={`person-card-${person.code}`} person={person} onClickPreview={personId => this.setState({personCodePreview: personId})} />
                    )
                }
                {personCodePreview &&
                    <Modal open={true} onPopinClose={this._closePopin} type='from-right'>
                        <PersonPreview id={personCodePreview} onPopinClose={this._closePopin}/>
                    </Modal>
                }
            </div>
        );
    }
}

PersonCardList.displayName = 'PersonCardList';
PersonCardList.propTypes = {
    persons: PropTypes.array
};
PersonCardList.defaultProps = {
    persons: [],
};

export default PersonCardList;
