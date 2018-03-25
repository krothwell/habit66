function userReducer(state, action) {
  if (state === undefined){
    return {
      emailFound:false,
      emailSubmitted:'',
      passwordCorrect:false,
      passwordSubmitted:''
    };
  }
  switch(action.type) {
    case "setEmailFound":
      return {
        ...state,
        emailFound:action.emailFound
      }
    case "setEmailSubmitted":
      return {
        ...state,
        emailSubmitted:action.emailSubmitted
      }
      case "setPasswordCorrect":
        return {
          ...state,
          passwordCorrect:action.passwordCorrect
        }
      case "setPasswordSubmitted":
        return {
          ...state,
          emailSubmitted:action.passwordSubmitted
        }
    default:
      return state;
  }
}

export default userReducer;
