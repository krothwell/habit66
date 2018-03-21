//Libraries
import { connect } from 'react-redux';
//Components
import User from '../components/User'

function mapStateToProps(state) {
  return {
    emailFound:state.user.emailFound
  }
}

function setEmailFound(dispatch, emailFound) {
  console.log("setEmailFound:", emailFound);
  return dispatch({
    type:"setEmailFound",
    emailFound:emailFound
  })
}

function mapDispatchToProps(dispatch) {
  return {
    setEmailFound:setEmailFound.bind(this,dispatch)
  }
}

//passing state and action to App as props
var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(User);

export default connectedComponent;
