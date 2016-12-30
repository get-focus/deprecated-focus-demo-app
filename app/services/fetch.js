import createfocusFetchProxy from 'focus-application/fetch/fetch-proxy'
let fetch;

export const initFetch =  dispatch => {
  fetch = createfocusFetchProxy(dispatch);
}
export const focusFetch = ({url, method, data}) => {
    return fetch(url, {
        method: method,
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
