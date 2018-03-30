
import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

class PasswordSub extends Component {

  constructor(props){
    super(props);
    this.passwordLogin = "harlequin";
    this.errorPassword = '';

    this.state = {
        password: '',
        langPack:this.props.langPack.PasswordSub,
        subAttempt:false
    };
    console.log(this.props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitPassword = this.submitPassword.bind(this);
    this.setUserDefault = this.setUserDefault.bind(this);
  }

  getPasswordValidationState() {
    const length = this.errorPassword.length;
    return (length>0) ? 'error' : 'success';
  }

  setPasswordErrorMsg() {
    const length = this.props.password.length;
    if (length === 0){
      this.errorPassword = 'Email is required';
    }
    else if (length < 3){
      this.errorPassword = 'Email should be minimum 3 characters';
    }
    else {
      this.errorPassword = '';
    }
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;

    this.props.setPassword(value);
  }

  submitPassword() {
    this.setPasswordErrorMsg();
    if (this.errorPassword.length > 0) {
      this.setState({
        subAttempt:true
      });
    } else {
      this.passwordLogin === this.props.password ?
        this.props.setPasswordCorrect(true):this.props.setPasswordCorrect(false);
        this.props.setLoggedOn(true,this.props.email)
    }
  }

  setUserDefault() {
    this.props.setEmailFound(false);
    this.props.setPassword('');
  }

  render() {
    return (
      <FormGroup
        controlId="formBasicText"
        validationState={this.getPasswordValidationState()}
        >
        <ControlLabel>
          {this.state.langPack.lblEnterPassword + this.props.email}
        </ControlLabel>
        <FormControl
            name="password"
            type="text"
            value={this.props.password}
            placeholder={this.state.langPack.placeHolderPassword}
            onChange={this.handleInputChange}
        />
        <FormControl.Feedback />
        { this.errorPassword.length > 0 &&
          this.state.passwordTouched &&
          this.state.subAttempt &&
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
            disabled={this.props.password.length===0}
          >
            {this.state.langPack.btnLogIn}
          </Button>
      </FormGroup>
    );
  }
}


export default PasswordSub;
