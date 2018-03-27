function userReducer(state, action) {
  if (state === undefined){
    return {
      emailFound:false,
      email:'',
      passwordCorrect:false,
      password:'',
      loggedOn:false,
      userName:''
    };
  }
  switch(action.type) {
    case "setEmailFound":
      return {
        ...state,
        emailFound:action.emailFound
      }
    case "setEmail":
      return {
        ...state,
        email:action.email
      }
      case "setPasswordCorrect":
        return {
          ...state,
          passwordCorrect:action.passwordCorrect
        }
      case "setPassword":
        return {
          ...state,
          password:action.password
        }
      case "setLoggedOn":
        return {
          ...state,
          loggedOn:action.loggedOn,
          userName:action.userName
        }
    default:
      return state;
  }
}

export default userReducer;
