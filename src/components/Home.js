import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import User from './User';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      langPack:this.props.langPack.Home
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
    return (
      <div>
        <h1>{this.state.langPack.h1Main}</h1>
        <Button
          type="button"
          onMouseUp={this.changeToEnglish}>
          En
        </Button>
        <Button
          type="button"
          onMouseUp={this.changeToWelsh}>
          Cy
        </Button>
        <div id="slogan">{this.state.langPack.slogan}</div>
        <User langPack={this.props.langPack}
        />
      </div>
    );
  }
}

export default Home;
