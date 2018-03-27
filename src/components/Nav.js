import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      langPack:this.props.langPack.Nav
    };

    this.changeToEnglish = this.changeToEnglish.bind(this);
    this.changeToWelsh = this.changeToWelsh.bind(this);
    this.changeToWelsh.bind(this);
  }

  changeToEnglish() {
    this.props.getLangPackFromServer("English")
  }

  changeToWelsh() {
    this.props.getLangPackFromServer("Welsh")
  }

  render() {
    console.log(this.props);
    return (
      <div>
        something
      </div>
    );
  }
}

export default Nav;
