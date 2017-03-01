import commonServices from '../services/common';
import {actionBuilder} from 'focus-graph/actions/entity-actions-builder';


const _userLoginAction = actionBuilder({names: ['userLogin'], type:'load', service: commonServices.login});
export const userLoginTypes = _userLoginAction.types;
export const userLoginAction = _userLoginAction.action;

const _pushNotification = actionBuilder({names: ['notification'], type:'save', service: commonServices.pushNotification});
export const pushNotificationTypes = _pushNotification.types;
export const pushNotificationAction = _pushNotification.action;
