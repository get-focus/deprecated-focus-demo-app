// //libraries
// import React, {PropTypes} from 'react';
// import i18next from 'i18next';
// import {navigate} from 'focus-core/history';
//
// // web components
// import Button from 'focus-components/button';
// import builtInComponents from 'focus-components/common/mixin/built-in-components';
// import definitionMixin from 'focus-components/common/mixin/definition';
// import storeBehaviour from 'focus-components/common/mixin/store-behaviour';
// import Panel from 'focus-components/panel';
//
// // actions & stores
// import {identityActions} from '../../../action/person';
// import personStore from '../../../stores/person';
//
// //custom components
// import Picture from '../components/picture';
//
// export default React.createClass({
//     displayName: 'PersonPreview',
//     propTypes: {
//         id: PropTypes.number.isRequired
//     },
//     mixins: [builtInComponents, definitionMixin, storeBehaviour],
//     definitionPath: 'person',
//     stores: [{store: personStore, properties: ['personIdentity', 'personBiography']}],
//
//     /** @inheritDoc */
//     getInitialState(){
//         return {};
//     },
//
//     /** @inheritDoc */
//     componentDidMount() {
//         const {id} = this.props;
//         identityActions.load(id);
//     },
//
//     onPopinClose() {
//         this.props.onPopinClose(navigate(`/persons/${this.props.id}`));
//     },
//
//     /** @inheritDoc */
//     render() {
//         const {id} = this.props;
//         const {code,fullName, photoHref} = this.state;
//         return (
//             <div data-demo='preview'>
//                 <div data-demo='preview-header'>
//                     <Picture url={photoHref} title={fullName} />
//                     <div>
//                         <h3>{this.textFor('fullName')}</h3>
//                         <h5>{this.textFor('activity')}</h5>
//                         <div>{this.textFor('shortBiography')}</div>
//                         <br/>
//                         <Button label='view.person.action.consult.sheet' handleOnClick={this.onPopinClose}/>
//                     </div>
//                 </div>
//                 <div data-demo='preview-content'>
//                     <Panel title='view.person.detail.identity'>
//                         {this.displayFor('fullName')}
//                         {this.displayFor('firstName')}
//                         {this.displayFor('birthDate')}
//                     </Panel>
//                     <Panel title='view.person.detail.lastmovies'>
//
//                     </Panel>
//                 </div>
//             </div>
//         );
//     }
// });
