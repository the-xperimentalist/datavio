import axios from 'axios'


const hostname = "http://localhost:8000"


export const loginApi = (username, password) => {
  console.log(username)
  console.log(password)
  return axios({
    method: "post",
    url: "http://localhost:8000/api-token-auth",
    headers: {"Content-Type": "application/json"},
    data: {"username": username, "password": password}
  })
}

export const signUpApi = (username, email, password, password1, firstName) => {
  return axios({
    method: "post",
    url: "http://localhost:8000/register",
    headers: {"Content-Type": "application/json"},
    data: {
      "username": username,
      "email": email,
      "first_name": firstName,
      "last_name": "",
      "password": password,
      "password2": password1
    }
  })
}

export const anonymousUserApi = () => {
  let randomName = Math.random().toString(36).substring(2,12);
  let randomEmail = randomName + "@gmail.com"
  return axios({
    method: "post",
    url: "http://localhost:8000/register",
    headers: {"Content-Type": "application/json"},
    data: {
      "username": randomName,
      "email": randomEmail,
      "password": randomName,
      "password2": randomName,
      "first_name": randomName,
      "last_name": ""
    }
  })
}
