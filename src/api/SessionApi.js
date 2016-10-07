class SessionApi {
  static login(credentials) {
    debugger;
    const request = new Request(`${process.env.API_HOST}/login`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify({auth: credentials})
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  } 
}

export default SessionApi;
