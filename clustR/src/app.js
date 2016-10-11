import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, GroupList, Spinner, Button, CardSection } from './components';
import LoginForm from './components/LoginForm';
import NewGroupForm from './components/NewGroupForm';

class App extends Component {
  state = { loggedIn: null, index: 0, userData: {}, userId: '' };


  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDj3C7ZZNqNtG_O4vYGafTvgFmu3yK6JJk',
      authDomain: 'clustr-b2f2f.firebaseapp.com',
      databaseURL: 'https://clustr-b2f2f.firebaseio.com',
      storageBucket: 'clustr-b2f2f.appspot.com',
      messagingSenderId: '1087315457917'
    });

    this.db = firebase.database().ref();

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true, index: 1, userData: this.updateGroupsPage(user.uid), userId: user.uid });
        console.log(this.state.userId);
      } else {
        const FBuser = user.uid;
        const FBobject = { FBuser };
        this.db.child('users').push(FBobject);
        this.setState({ loggedIn: false, index: 2 });
      }
    });
  }

  updateGroupsPage(userId) {
    this.db.child('users').once('value', snap => {
      snap.forEach((user) => {
        if (user.val().FBuser === userId) {
          if (user.val().numbers.length !== 0) {
            const returner = user.val().numbers;
            this.setState({ userData: returner });
          } else {
            this.setState({ index: 3 });
          }
        }
      });
    });
  }

  buttonStateChange() {
    this.setState({ loggedIn: true, index: 3 });
  }

  renderButton() {
    return (
      <CardSection>
        <Button onPress={this.buttonStateChange.bind(this)}>+ Add New Group</Button>
      </CardSection>
    );
  }

  renderContent() {
    switch (this.state.index) {
      case 1:
        return (
            <GroupList />
        );
      case 2:
        return <LoginForm />;
      case 3:
        return <NewGroupForm userData={this.state.userId} />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Groups'} />
        {this.renderButton()}
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
