//Libraries
import { connect } from 'react-redux';
//Components
import User from '../components/User'

function mapStateToProps(state) {
  return {
    emailFound:state.user.emailFound,
    email:state.user.email,
    passwordCorrect:state.user.passwordCorrect,
    password:state.user.password
  }
}

function setEmail(dispatch, email) {
  return dispatch({
    type:"setEmail",
    email:email
  })
}

function setPasswordCorrect(dispatch, passwordCorrect) {
  return dispatch({
    type:"setPasswordCorrect",
    passwordCorrect:passwordCorrect
  })
}

function setPassword(dispatch, password) {
  return dispatch({
    type:"setPassword",
    password:password
  })
}

function mapDispatchToProps(dispatch) {
  return {
    setEmail:setEmail.bind(this,dispatch),
    setPasswordCorrect:setPasswordCorrect.bind(this,dispatch),
    setPassword:setPassword.bind(this,dispatch)
  }
}

//passing state and action to App as props
var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(User);

export default connectedComponent;
