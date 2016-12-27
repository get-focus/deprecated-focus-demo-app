import createfocusFetchProxy from 'focus-application/fetch/fetch-proxy'
let fetch;

export const initFetch =  dispatch => {
  fetch = createfocusFetchProxy(dispatch);
}
export const fetchFocus = ({url, method, data}) => {
    return fetch(url, {
        method: method,
        body: data,
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const fetchAsync = ({url, data, method}) => {
  return fetchFocus({url, data, method}).then(data => {
    return data
    //return data
  })
}

export const fetchAsync2 = async ({url, data, method}, isReturnVoid) => {
   const response = await fetchFocus({url, data, method});
   //const dataServer = await response.response.json();
   console.log(response)
   retu
   response.then(data => {
     console.log(data)
     return {...data.json(), truc: ''}
   }, error => {
     console.log('errrrrrrrrrrrrorrrrrrrrrrrrrrrrrrrrrrrrrr xthf ????????')
   })
  //  console.log(response.response)
  //  return {...response.response, status: response.status};

}
