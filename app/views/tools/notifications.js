import React, {PureComponent} from 'react';
import compose from 'lodash/flowRight';
import i18next from 'i18next';
import {connect as connectToHeader} from 'focus-application/behaviours/header';
import {connect as connectToFieldHelpers} from 'focus-graph/behaviours/field';
import {connect as connectToMetadata} from 'focus-graph/behaviours/metadata';
import {connect as connectToForm } from 'focus-graph/behaviours/form';
import Button from 'focus-components/button';
import Panel from 'focus-components/panel';

import {pushNotificationAction} from '../../action/common';
import DemoTitle from '../components/demo-title';


class NotificationPanel extends PureComponent {
    constructor(props) {
        super(props);
        this._renderButtons = this._renderButtons.bind(this);
    }
    componentDidMount(){
        const {toggleEdit} = this.props;
        toggleEdit(true);
    }
    _renderButtons() {
        const {getUserInput, save} = this.props;
        return <Button label='tools.notifications.panel.button.push' icon='notifications_none' shape={null} onClick={save} />
    }
    render() {
        const {editing, fieldFor, save, saving, getUserInput} = this.props;
        const panelProps = {buttonsPosition: 'bottom', editing, save, saving, getUserInput};
        return (
            <Panel title='tools.notifications.panel.title' {...panelProps} Buttons={this._renderButtons}>
                {fieldFor('title')}
                {fieldFor('sender')}
                {fieldFor('type')}
                {fieldFor('content')}
                {fieldFor('targetUrl')}
            </Panel>
        );
    }
}
NotificationPanel.displayName = 'NotificationPanel';

const ConnectedNotificationPanel = compose(
    connectToMetadata(['notification']),
    connectToForm({
        formKey: 'notificationForm',
        entityPathArray: ['notification'],
        saveAction: pushNotificationAction,
        nonValidatedFields: ['notification.uuid']
    }),
    connectToFieldHelpers(),
    connectToHeader({
        ExpandedHeaderComponent: () => <h1>{i18next.t('notifications')}</h1>,
        SummaryHeaderComponent: () => <h1>{i18next.t('notifications')}</h1>,
        LeftHeaderComponent: DemoTitle
    })
)(NotificationPanel);


class NotificationView extends PureComponent {
    render() {
        const {fieldFor} = this.props;
        return (
            <div>
                <h2>{i18next.t('tools.notifications.subtitle')}</h2>
                <p>{i18next.t('tools.notifications.text')}</p>
                <ConnectedNotificationPanel />
            </div>
        );
    }
}
NotificationView.displayName = 'NotificationView';
export default NotificationView;
