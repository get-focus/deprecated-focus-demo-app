import React, {Component} from 'react';

//import {navigate} from 'focus-core/history';
import Menu from 'focus-components/menu';
import {component as Modal} from 'focus-components/modal';
//import {quickSearchStore} from 'focus-core/search/built-in-store';
//import dispatcher from 'focus-core/dispatcher';cd
//


//custom web component
//import QuickSearchView from '../search/quick';

const menus = [
    { icon: 'home', label: 'menu.home', route: '/' }, // route: 'home'
    { icon: 'search', label: 'menu.search', handleOnClick: () => { /*this._onQuickSearchModalToggle()*/ }},
    { icon: 'settings', label: 'menu.admin', route: '/admin/masterdata', subMenus: [
        { icon: 'settings', label: 'menu.admin', route: '/admin/masterdata'}
    ]},
    { icon: 'build', label: 'menu.tools', route: '/tools', subMenus: [
        { icon: 'mail_outline', label: 'menu.notifications', route: '/tools/notifications'}
    ]}
];

class MenuDemo extends Component {
    render() {
        return (
            <Menu menus={menus} />
        )
    }
}
MenuDemo.displayName = 'MenuDemo';
export default MenuDemo;
