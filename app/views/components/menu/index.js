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
    { icon: 'home', label: 'menu.home', route: '/home' }, // route: 'home'
    { icon: 'search', label: 'menu.search',route: '/search/advanced', handleOnClick: () => { /*this._onQuickSearchModalToggle()*/ }},
    { icon: 'settings', label: 'menu.admin', route: '/admin/masterdata', possibleRoutes:['/admin/masterdata'], subMenus: [
        { icon: 'settings', label: 'menu.admin', route: '/admin/masterdata/countries'},
        { icon: 'settings', label: 'menu.admin', route: '/admin/masterdata/lol'},
        { icon: 'settings', label: 'menu.admin', route: '/admin/masterdata'},
        { icon: 'settings', label: 'menu.admin', route: '/admin/masterdata'}
    ]}
];

class MenuDemo extends Component {
    render() {
        return (
            <Menu menus={menus} {...this.props}/>
        )
    }
}
MenuDemo.displayName = 'MenuDemo';
export default MenuDemo;
