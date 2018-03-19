function langReducer(state, action) {
  if (state === undefined){
    return {
      lang:'',
      langPack: {},
    };
  }
  switch(action.type) {
    case "changeLang":
      return {
        ...state,
        lang:action.langData.lang,
        langPack:action.langData.langPack
      }

    default:
      return state;
  }
}

export default langReducer;
