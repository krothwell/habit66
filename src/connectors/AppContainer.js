//Libraries
import { connect } from 'react-redux';
//Components
import App from '../components/App'
//Style
import '../styles/App.css';

function mapStateToProps(state) {
  return {
    lang:state.lang,
    langPack:state.langPack
  }
}

function changeLang(dispatch, lang, langPack) {
  return dispatch({
    type:"changeLang",
    langData: {
      lang:lang,
      langPack: langPack
    }
  })
}


function mapDispatchToProps(dispatch) {
  return {
    changeLang:changeLang.bind(this,dispatch)
  }
}

//passing state and action to App as props
var connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default connectedComponent;

  // render() {
  //   return (
  //     <div>
  //       <Home />
  //     </div>
        // <BrowserRouter>
        //   <div>
        //     <Switch>
        //       <Route path="/edit/:id" component={Userform}/
        //       <Route exact path="/" component={User}/>
        //       <Route exact path="/add" component={Userform}/>
        //       <Route path="/*" component={NotFound}/>
        //     </Switch>
        //   </div>
        // </BrowserRouter>
        //<Home />

//     );
//   }
// }

// class NotFound extends Component {
//   render() {
//     return (
//       <div>Not found</div>
//     )
//   }
// }
