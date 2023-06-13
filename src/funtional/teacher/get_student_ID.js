import axios from "axios";

const resolve = (data) => {
  return data.students;
};

export const get_id = () => {
  const api = import.meta.env.VITE_API_URL;

  return axios
    .get(api + "/Function/view_student")
    .then((response) => {
      if (response.status === 200) {
        // console.log(response.data);
        const students = response.data.students;
        const studentIds = students.map(({ ID }) => ({ ID }));
        return {"students": studentIds};
      } else {
        console.log(response.data);
        throw new Error(response.data);
      }
    })
    .catch((error) => {
      throw new Error(error);
    });
};
