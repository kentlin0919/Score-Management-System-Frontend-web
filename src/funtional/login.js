import axios from "axios";
import { error } from "jquery";
import VueCookies from "vue-cookies";
import { encryptPassword } from './sha256.js';
const resolve = (data) => {
  return data;
};


export const login = async ($router, ID, password) => {
  const api = import.meta.env.VITE_API_URL;
console.log(password)
  // 对密码进行加密
  const encryptedPassword = await encryptPassword(password);
  console.log(encryptedPassword)
  const body = {
    ID: ID,
    Password: encryptedPassword
  };
  const Response = await axios.post(api + "/Account/Login", JSON.stringify(body), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  console.log(Response.status)
  // console.log(Response.error.eesponse)

  if (Response.status === 200) {
    const identity = Response.data;
    VueCookies.set('User', identity);
    console.log(identity)
    if (identity.Role === "Student") {
      $router.push("/student");
      return Response.data.detail
    } else if (identity.Role === "Teacher") {
      $router.push('/teacher');
      return Response.data.detail
    } else if (identity.Role === "Admin") {
      $router.push('/admin');
      return Response.data.detail
    }

  }
}