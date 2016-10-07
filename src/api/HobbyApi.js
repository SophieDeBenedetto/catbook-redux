
class HobbyApi {
  static requestHeaders() {
    return {'AUTHORIZATION': `Bearer ${sessionStorage.jwt}`}
  }

  static getAllHobbies() {
    const headers = this.requestHeaders();
    const request = new Request(`${process.env.API_HOST}/api/v1/hobbies`, {
      method: 'GET', 
      headers: headers
    })
    return fetch(request).then(response => {
      return response.json()
    }).catch(error => {
      return error
    });
  }
}

export default HobbyApi;
