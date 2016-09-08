class Auth {
  static loggedIn() {
    return !!localStorage.jwt;
  }

  static logOut() {
    localStorage.removeItem('jwt');
  }
}

export default Auth;