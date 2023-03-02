let token = localStorage.getItem('token')
const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

if (token) {
  var useremail = parseJwt(token).email
  var username = parseJwt(token).username
}

const apiUrl = 'http://localhost:5000';

export { apiUrl, useremail, username, token };


// https://questions-overflow.herokuapp.com  