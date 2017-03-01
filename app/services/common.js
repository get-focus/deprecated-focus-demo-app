import {fetchBuilder} from 'focus-application/fetch/fetch-proxy'

const fetch = fetchBuilder({
    baseUrl: 'http://localhost:8080/common',
    useCredentials: true
});

export default {
    login() {
        return fetch({url: 'login', method: 'GET'});
    },
    pushNotification(notification) {
        console.log(notification);
        return fetch({url: 'notifications/push', method: 'POST'});
    }
}
