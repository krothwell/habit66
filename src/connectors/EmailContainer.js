//Libraries
import { connect } from 'react-redux';
//Components
import EmailSub from '../components/EmailSub'

function mapStateToProps(state) {
  return {
    emailFound:state.emailFound
  }
}

function setEmailFound(dispatch, isFound) {
  return dispatch({
    type:"setEmailFound",
    emailFound:isFound
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
)(EmailSub);

export default connectedComponent;
