import axios from "axios";
export const input_score = async (id, score, User,reason) => {
  const api = import.meta.env.VITE_API_URL
  console.log(User.Subject)
  const body = {
    "student_id": id,
    "new_score": score,
    "subject": User.Subject,
    "reason": reason,
    "teacher_id": User.ID
  }
console.log(JSON.stringify(body))
  const Response = await axios.post(api + "/Function/update_score", JSON.stringify(body), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  console.log(Response.data)
  if (Response.status === 200) {
    console.log(Response.data)
    return Response.data
  } else {
    // 处理其他响应状态
  }
}
