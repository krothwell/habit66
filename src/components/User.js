
import React, { Component } from 'react';
import EmailSub from './EmailSub';
import PasswordSub from './PasswordSub';

class User extends Component {
  errorUsername;
  errorEmail;
  heading;
  id;

  constructor(props){
    super(props);


    this.state = {
        langPack:this.props.langPack.User
    };

  }

  submitHandler(e) {
    e.preventDefault();
  }



  render() {
    return (
      <div>
        {!this.props.emailFound &&
          <h2>{this.state.langPack.h2logIn}</h2>
        }
        <form onSubmit={this.submitHandler}>
            <EmailSub
              langPack={this.props.langPack}
              emailFound={this.props.emailFound}
              setEmailFound={this.props.setEmailFound}
              setEmail={this.props.setEmail}
              setPassword={this.props.setPassword}
              email={this.props.email}
            />
        {this.props.emailFound &&
          <PasswordSub
            langPack={this.props.langPack}
            email={this.props.email}
            setEmailFound={this.props.setEmailFound}
            setPassword={this.props.setPassword}
            setPasswordCorrect={this.props.setPasswordCorrect}
            setLoggedOn={this.props.setLoggedOn}
            password={this.props.password}
          />
        }
        </form>
      </div>
    );
  }
}


export default User;
