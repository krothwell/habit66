
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

  // componentDidMount(){
  //   this.setState({
  //     langData:
  //   })
  // }
  submitHandler(e) {
    e.preventDefault();
  }



  render() {

    console.log(this.props);
    return (
      <div>
        <h2>{this.state.langPack.h2logIn}</h2>
        <form onSubmit={this.submitHandler}>
            <EmailSub
              langPack={this.props.langPack}
              emailFound={this.props.emailFound}
              setEmailFound={this.props.setEmailFound}
              setEmailSubmitted={this.props.setEmailSubmitted}
              emailSubmitted={this.props.emailSubmitted}
            />
            { this.props.emailFound &&
              <PasswordSub
                langPack={this.props.langPack}
                emailSubmitted={this.props.emailSubmitted}
                setEmailFound={this.props.setEmailFound}
                setEmailSubmitted={this.props.setEmailSubmitted}
                setPasswordCorrect={this.props.setPasswordCorrect}
              />
            }
            { this.props.passwordCorrect &&
              <div>something</div>
            }
        </form>
      </div>
    );
  }
}


export default User;
