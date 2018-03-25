
import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import {
  canInputBeSubmitted,
  handleInputBlur,
  handleInputChange
} from '../utilities/Utilities_forms';

class EmailSub extends Component {

  constructor(props){
    super(props);
    this.emailLogin = "kmrothwell@gmail.com";
    this.errorEmail = '';

    this.state = {
        username: '',
        email: '',
        usernameTouched: false,
        emailTouched: false,
        langPack:this.props.langPack.EmailSub
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.submitEmail = this.submitEmail.bind(this);
  }

  // componentDidMount(){
  //   if(this.id){
  //       this.title = 'Edit User';
  //       firebase.database().ref('/' + this.id)
  //       .on('value',snapshot => {
  //           this.setState({
  //               username: snapshot.val().username,
  //               email: snapshot.val().email,
  //           });
  //         });
  //   }
  // }

  getEmailValidationState() {
    const length = this.state.email.length;

    if(this.state.emailTouched){
        if (length === 0){
          this.errorEmail = 'Email is required';
          return 'error';
        }
        else if (length < 3){
          this.errorEmail = 'Email should be minimum 3 characters';
          return 'error';
        }
        else if(this.state.email.indexOf('@') === -1){
          this.errorEmail = 'Email should contain @';
          return 'error';
        }
        else {
          this.errorEmail = '';
          return 'success'
        }
      }
  }

  handleBlur(e){
    let myHandleBlur = handleInputBlur.bind(this, 'emailTouched');
    myHandleBlur();
  }

  handleChange(e) {
    let myHandleChange = handleInputChange.bind(this, e, 'email');
    return myHandleChange();
  }

  submitEmail() {
    if (!canInputBeSubmitted(
        this.state.emailTouched,
        this.errorEmail
    )) {
      return;
    } else {
      //Once implemented, this will theoretically check the list of emails from
      //firebase, and if found show the password field, otherwise, begin
      //registration process
      console.log("setting email submitted...")
      this.props.setEmailSubmitted(this.state.email);
      console.log(this.props.emailSubmitted);
      this.emailLogin === this.state.email ?
        this.props.setEmailFound(true):this.props.setEmailFound(false);
    }
  }

  render() {
    const isEnabled = canInputBeSubmitted(
      this.state.emailTouched,
      this.errorEmail
    );
    return (
      <FormGroup
        controlId="formBasicText"
        validationState={this.getEmailValidationState()}
        >
        <ControlLabel>{this.state.langPack.lblEnterEmail}</ControlLabel>
        <FormControl
            name="email"
            type="text"
            value={this.state.email}
            placeholder={this.state.langPack.placeHolderEmail}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
            readOnly={this.props.emailFound}
        />
        <FormControl.Feedback />
        { this.errorEmail.length > 0 && this.state.emailTouched &&
            <HelpBlock>{this.errorEmail}</HelpBlock>
        }
        { !this.props.emailFound &&
          <Button
            type="button"
            disabled={!isEnabled}
            onMouseUp={this.submitEmail}>
            Submit
          </Button>
        }
      </FormGroup>
    );
  }
}


export default EmailSub;
