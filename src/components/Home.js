import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import UserContainer from '../connectors/UserContainer';
import Navigation from './Navigation';


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
    console.log(this.props);
    return (
      <div>
        {!this.props.loggedOn &&
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
            <UserContainer
              langPack={this.props.langPack}
              setLoggedOn={this.props.setLoggedOn}
              setEmailFound={this.props.setEmailFound}
            />
          </div>
        }
        {this.props.loggedOn &&
          <Navigation
            langPack={this.props.langPack}
            setLoggedOn={this.props.setLoggedOn}
            setEmailFound={this.props.setEmailFound}
          />
        }
      </div>
    );
  }
}

export default Home;
