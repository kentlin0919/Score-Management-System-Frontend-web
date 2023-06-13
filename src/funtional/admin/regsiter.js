import axios from "axios";
import { encryptPassword } from '../sha256.js';
import  VueCookies  from "vue-cookies";



export const regsiterF = async (role, subject, name, ID, password, school) => {
  const encryptedPassword = await encryptPassword(password);
  const api = import.meta.env.VITE_API_URL
  console.log(VueCookies.get('User'))
  const body = {
   
      "ID": ID,
      "Password": encryptedPassword,
      "Name": name,
      "Subject": subject,
      "Role": role,
      "Wallet_Address": "Null",
      "Private_Key": "Null"
    
  }
  console.log(JSON.stringify(body))

  if(role != "" && subject != "" && name != "" && ID != ""){
    const Response = await axios.post(api + "/Account/Register", JSON.stringify(body), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return "註冊成功"
  }else{
    return "註冊失敗"
  }
  
    
      // if (Response.status == 200) {
      //   console.log(Response.data)
      //   return "註冊成功"
      // } else {
      //   console.log(Response.data)
      //   return "註冊失敗"
    
      // }





    
}