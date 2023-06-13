import axios from "axios"
import { ref } from "vue";
const resolve = (data) => {
  return data.students;
};

export const score = (User,student_id) =>{
   let value = ""
  console.log(User.ID)
  if(User.Role == "Student"){
    value = User.ID
  }else{
    value = student_id
  }


  const api = import.meta.env.VITE_API_URL;
  return axios.get(api + "/Function/get_the_newest_score/" + value)
  .then((response) => {
    if (response.status === 200) {
      console.log(response.data);
      const students = response.data;
      return students;
    } else {
      console.log(response.data);
      throw new Error(response.data);
    }
  })
  .catch((error) => {
    throw new Error(error);
  });
}