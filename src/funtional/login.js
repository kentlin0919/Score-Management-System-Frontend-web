import axios from "axios"
import { error } from "jquery"

export const login = ($router, email,password) => {
const api = import.meta.env
const body = {
    "email": email,
    "password":password
}
axios.post(api+"/login",JSON.stringify(body),{
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(Response => {
    if(Response.status == 200){
        const identity = Response.data;
        if(identity.ID == "student"){
            $router.push("/student")
        }else if(identity.ID == "teacher"){
            $router.push('/teacher')
        }else if(identity.ID == "manager"){
            $router.push('/manager')
        }
    }else{
        
    }
  })
  .catch(error => {

  }

  )

}