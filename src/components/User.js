
import React, { Component } from 'react';
import EmailSub from './EmailSub';

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


  render() {
    //const isEnabled = EmailSub.canBeSubmitted();
    //console.log(this.props.langData.btnSubmit);
    return (
      <div>
        <h2>{this.state.langPack.h2logIn}</h2>
        <form onSubmit={EmailSub.handleSubmit}>
            <EmailSub
              langPack={this.props.langPack}
            />
        </form>
      </div>
    );
  }
}


export default User;
