//Libraries
import { connect } from 'react-redux';
//Components
import User from '../components/User'

function mapStateToProps(state) {
  return {
    emailFound:state.user.emailFound,
    emailSubmitted:state.user.emailSubmitted,
    passwordCorrect:state.user.passwordCorrect,
    passwordSubmitted:state.user.passwordSubmitted
  }
}

function setEmailFound(dispatch, emailFound) {
  return dispatch({
    type:"setEmailFound",
    emailFound:emailFound
  })
}

function setEmailSubmitted(dispatch, emailSubmitted) {
  return dispatch({
    type:"setEmailSubmitted",
    emailSubmitted:emailSubmitted
  })
}

function setPasswordCorrect(dispatch, passwordCorrect) {
  return dispatch({
    type:"setPasswordCorrect",
    passwordCorrect:passwordCorrect
  })
}

function setPasswordSubmitted(dispatch, passwordSubmitted) {
  return dispatch({
    type:"setPasswordSubmitted",
    passwordSubmitted:passwordSubmitted
  })
}

function mapDispatchToProps(dispatch) {
  return {
    setEmailFound:setEmailFound.bind(this,dispatch),
    setEmailSubmitted:setEmailSubmitted.bind(this,dispatch),
    setPasswordCorrect:setPasswordCorrect.bind(this,dispatch),
    setPasswordSubmitted:setPasswordSubmitted.bind(this,dispatch)
  }
}

//passing state and action to App as props
var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(User);

export default connectedComponent;
