export const cookie_teacher = (router,cookie_ID) => {
    
  const isAuthorized = "Teacher" // 使用您设定的固定身份令牌进行验证
  console.log(cookie_ID.role)
  if(cookie_ID.Role != isAuthorized){
    router.push('/')
  }
  
  
}

