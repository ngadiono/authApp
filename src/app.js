import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAqdzzfk_APLyuBJ5oA5BD2Pn1Gk1I_sw8",
      authDomain: "authapp-d3dae.firebaseapp.com",
      databaseURL: "https://authapp-d3dae.firebaseio.com",
      projectId: "authapp-d3dae",
      storageBucket: "authapp-d3dae.appspot.com",
      messagingSenderId: "989651238196"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"></Header>
        <LoginForm />
      </View>
    );
  }
}

export default App;
