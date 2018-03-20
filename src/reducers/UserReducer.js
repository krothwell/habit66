function userReducer(state, action) {
  if (state === undefined){
    return {
      emailFound:false,
    };
  }
  switch(action.type) {
    case "setEmailFound":
      return {
        ...state,
        emailFound:action.emailFound
      }

    default:
      return state;
  }
}

export default userReducer;
