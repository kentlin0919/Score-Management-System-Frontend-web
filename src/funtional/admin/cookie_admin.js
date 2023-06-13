
export const cookie_admin = ($router,cookie_ID) => {
    
    const isAuthorized = "Admin" // 使用您设定的固定身份令牌进行验证
    if(cookie_ID.Role != isAuthorized){
      $router.push('/')
    }
    
    
  }

