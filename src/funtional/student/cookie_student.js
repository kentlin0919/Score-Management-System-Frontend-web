export const cookie_student = (router,cookie_ID) => {
    
  const isAuthorized = "Teacher" // 使用您设定的固定身份令牌进行验证
  console.log(cookie_ID != isAuthorized)
  if(cookie_ID.Role == isAuthorized){
    router.push('/')
  }
  
  
}

