import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn : null }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAqdzzfk_APLyuBJ5oA5BD2Pn1Gk1I_sw8",
      authDomain: "authapp-d3dae.firebaseapp.com",
      databaseURL: "https://authapp-d3dae.firebaseio.com",
      projectId: "authapp-d3dae",
      storageBucket: "authapp-d3dae.appspot.com",
      messagingSenderId: "989651238196"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button onPress={() => firebase.auth().signOut()}>Log out</Button>;
      case false:
        return <LoginForm />
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"></Header>
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
