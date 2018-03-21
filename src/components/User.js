
import React, { Component } from 'react';
import EmailSub, { handleSubmit } from './EmailSub';

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
    EmailSub.handleSubmit();
  }

  componentDidMount() {
    this.props.setEmailFound(false);
  }



  render() {
    console.log(this.props);
    return (
      <div>
        <h2>{this.state.langPack.h2logIn}</h2>
        <form onSubmit={this.submitHandler}>
            <EmailSub
              langPack={this.props.langPack}
              setEmailFound={this.props.setEmailFound}
              emailFound={this.props.emailFound}
            />
        </form>
      </div>
    );
  }
}


export default User;
