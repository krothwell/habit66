
import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap';

class EmailSub extends Component {

  constructor(props){
    super(props);
    this.emailLogin = "kmrothwell@gmail.com";
    this.errorEmail = '';

    this.state = {
        langPack:this.props.langPack.EmailSub,
        subAttempt:false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitEmail = this.submitEmail.bind(this);
  }

  getEmailValidationState() {
    const length = this.errorEmail.length;
    return (length>0) ? 'error' : 'success';
  }

  setEmailErrorMsg() {
    const length = this.props.email.length;
    if (length === 0){
      this.errorEmail = 'Email is required';
    }
    else if (length < 3){
      this.errorEmail = 'Email should be minimum 3 characters';
    }
    else if(this.props.email.indexOf('@') === -1){
      this.errorEmail = 'Email should contain @';
    }
    else {
      this.errorEmail = '';
    }
  }


  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    this.props.setEmail(value);
  }



  submitEmail() {
    this.setEmailErrorMsg();
    this.props.setPassword('');
    if (this.errorEmail.length > 0) {
      this.setState({
        subAttempt:true
      });
    } else {
      this.emailLogin === this.props.email ?
        this.props.setEmailFound(true):this.props.setEmailFound(false);
    }
  }

  render() {
    return (
      <FormGroup
        controlId="formBasicText"
        validationState={this.getEmailValidationState()}
        >
        <ControlLabel>{this.state.langPack.lblEnterEmail}</ControlLabel>
        <FormControl
            name="email"
            type="text"
            value={this.props.email}
            placeholder={this.state.langPack.placeHolderEmail}
            onChange={this.handleInputChange}
            readOnly={this.props.emailFound}
        />
        <FormControl.Feedback />
        { this.errorEmail.length > 0 &&
          this.state.subAttempt &&
            <HelpBlock>{this.errorEmail}</HelpBlock>
        }
        { !this.props.emailFound &&
          <Button
            type="button"
            disabled={this.props.email.length === 0}
            onMouseUp={this.submitEmail}>
            {this.state.langPack.btnSubmit}
          </Button>
        }
      </FormGroup>
    );
  }
}


export default EmailSub;
