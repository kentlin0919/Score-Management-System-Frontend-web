import axios from "axios";
import VueCookies from "vue-cookies";

const resolve = (data) => {
  return data.students;
};


export const getALL = (student_ID) => {

  const api = import.meta.env.VITE_API_URL;
  
  if(VueCookies.get('User').Role == "Teacher"){
    console.log(student_ID._value)
    return axios
    .get(api + "/Function/get_all_score/" + student_ID._value)
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data);
        const students = response.data;
        const studentIds = students.map(({ id }) => ({ id }));
        return students;
      } else {
        console.log(response.data);
        throw new Error(response.data);
      }
    })
    .catch((error) => {
      throw new Error(error);
    });

  }else{
    return axios
    .get(api + "/Function/get_all_score/" + VueCookies.get('User').ID)
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
  // console.log(VueCookies.get('User').ID)
  // return axios
  //   .get(api + "/function/get_all_score/" + VueCookies.get('User').ID)
  //   .then((response) => {
  //     if (response.status === 200) {
  //       console.log(response.data);
  //       const students = response.data;
  //       const studentIds = students.map(({ id }) => ({ id }));
  //       return students;
  //     } else {
  //       console.log(response.data);
  //       throw new Error(response.data);
  //     }
  //   })
  //   .catch((error) => {
  //     throw new Error(error);
  //   });




  // const body = [
  //     {
  //       "student_ID": "S001",
  //       "score": 100,
  //       "subject": "math",
  //       "reason": "first",
  //       "blockTimestamp": "2023/06/11 23:38",
  //       "teacherID": "T001"
  //     },
  //     {
  //       "student_ID": "S001",
  //       "score": 90,
  //       "subject": "math",
  //       "reason": "second",
  //       "blockTimestamp": "2023/06/11 23:39",
  //       "teacherID": "T002"
  //     },
  //     {
  //       "student_ID": "S001",
  //       "score": 0,
  //       "subject": "chinese",
  //       "reason": "ttt",
  //       "blockTimestamp": "2023/06/11 23:52",
  //       "teacherID": "T001"
  //     }
  //   ]
  // return body
}


