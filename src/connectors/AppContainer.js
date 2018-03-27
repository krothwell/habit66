//Libraries
import { connect } from 'react-redux';
//Components
import App from '../components/App'
//Style
import '../styles/App.css';

function mapStateToProps(state) {
  return {
    lang:state.lang,
    langPack:state.langPack,
    loggedOn: state.user.loggedOn,
    userName: state.user.userName
  }
}

function changeLang(dispatch, lang, langPack) {
  return dispatch({
    type:"changeLang",
    langData: {
      lang:lang,
      langPack: langPack
    }
  })
}

function setLoggedOn(dispatch, loggedOn, userName) {
  return dispatch({
    type:"setLoggedOn",
    loggedOn:loggedOn,
    userName:userName
  })
}


function mapDispatchToProps(dispatch) {
  return {
    changeLang:changeLang.bind(this,dispatch),
    setLoggedOn:setLoggedOn.bind(this,dispatch)
  }
}

//passing state and action to App as props
var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default connectedComponent;

// class NotFound extends Component {
//   render() {
//     return (
//       <div>Not found</div>
//     )
//   }
// }
