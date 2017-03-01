import {reducerBuilder} from 'focus-graph/reducers/reducer-builder';
import {
    pushNotificationTypes
} from '../action/common';


// Données initiales pour la state redux
const DEFAULT_DATA = {
    'uuid': 0,
    'sender': 'focus-demo',
    'type': 'focus-demo',
    'title': 'Ceci est un titre',
    'content': 'Ceci est le corps de la notification',
    'targetUrl': 'http://www.google.fr',
    'creationDate': undefined
};

const notification = reducerBuilder({
    name: 'notification', //put here the name of the action
    loadTypes: pushNotificationTypes,
    saveTypes: pushNotificationTypes,
    defaultData: DEFAULT_DATA
});

export default {
    notification
};
