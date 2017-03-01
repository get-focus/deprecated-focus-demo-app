import React, {PureComponent} from 'react';
import Menu from 'focus-components/menu';
import {withRouter} from 'react-router'

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

class MenuDemo extends PureComponent {
    render() {
        const {pathname} = this.props;
        return (
            <Menu menus={menus} pathname={pathname} />
        )
    }
}
MenuDemo.displayName = 'MenuDemo';
export default withRouter(MenuDemo);
