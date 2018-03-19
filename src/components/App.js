import React, { Component } from 'react';
import * as firebase from 'firebase';
import Home from './Home';
class App extends Component {

  constructor() {
    super();
    this.state = {
      langDataIsLoading:true
    };
  }

  getLangPackFromServer(lang) {
    this.setState({langDataIsLoading:true});
    let pathName = 'Language/' + lang;
    console.log("Getting language pack from " + pathName);
    firebase.database().ref(pathName).once('value', snapshot => {
      this.props.changeLang(lang, snapshot.val());
      console.log(snapshot.val());
      this.setState({langDataIsLoading:false});
    });
  }

  componentDidMount() {
    this.getLangPackFromServer('English');
  }

  render() {
    //let langthing2 = langthing.btnSubmit;
    return(
      <div>
        {this.state.langDataIsLoading &&
          <div>
            Loading
          </div>
        }
        {!this.state.langDataIsLoading &&
          <div>

            <Home
              langPack={this.props.langPack}
              getLangPackFromServer={this.getLangPackFromServer.bind(this)}
            />
          </div>
        }
      </div>
    )
  }
}
export default App
