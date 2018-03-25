
import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';
import {
  canInputBeSubmitted,
  handleInputBlur,
  handleInputChange
} from '../utilities/Utilities_forms';

class PasswordSub extends Component {

  constructor(props){
    super(props);
    this.passwordLogin = "harlequin";
    this.errorPassword = '';

    this.state = {
        password: '',
        passwordTouched: false,
        langPack:this.props.langPack.PasswordSub
    };
    console.log(this.props);
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.submitPassword = this.submitPassword.bind(this);
    this.setUserDefault = this.setUserDefault.bind(this);
  }

  getPasswordValidationState() {
    const length = this.state.password.length;

    if(this.state.passwordTouched){
        if (length === 0){
          this.errorPassword = 'Password is required';
          return 'error';
        }
        else if (length < 3){
          this.errorPassword = 'Password should be minimum 3 characters';
          return 'error';
        }
        else {
          this.errorPassword = '';
          return 'success'
        }
      }
  }

  handleBlur(e){
    let myHandleBlur = handleInputBlur.bind(this, 'passwordTouched');
    myHandleBlur();
  }

  handleChange(e) {
    let myHandleChange = handleInputChange.bind(this, e, 'password');
    return myHandleChange();
  }

  submitPassword() {
    if (!canInputBeSubmitted(
        this.state.passwordTouched,
        this.errorPassword
    )) {
      return;
    } else {
      //get user habits, etc.

      this.passwordLogin === this.state.password ?
        this.props.setPasswordCorrect(true):this.props.setPasswordCorrect(false);
    }
  }

  setUserDefault() {
    this.props.setEmailFound(false);
    this.props.setEmailSubmitted('');
  }

  render() {
    const isEnabled = canInputBeSubmitted(
      this.state.passwordTouched,
      this.errorPassword
    );
    return (
      <FormGroup
        controlId="formBasicText"
        validationState={this.getPasswordValidationState()}
        >
        <ControlLabel>
          {this.state.langPack.lblEnterPassword + this.props.emailSubmitted}
        </ControlLabel>
        <FormControl
            name="password"
            type="text"
            value={this.state.password}
            placeholder={this.state.langPack.placeHolderPassword}
            onBlur={this.handleBlur}
            onChange={this.handleChange}
        />
        <FormControl.Feedback />
        { this.errorPassword.length > 0 && this.state.passwordTouched &&
            <HelpBlock>{this.errorPassword}</HelpBlock>
        }
          <Button
            type="button"
            onMouseUp={this.setUserDefault}>
            {this.state.langPack.btnCancel}
          </Button>
          <Button
            type="button"
            onMouseUp={this.submitPassword}
            disabled={!isEnabled}
          >
            {this.state.langPack.btnLogIn}
          </Button>
      </FormGroup>
    );
  }
}


export default PasswordSub;
