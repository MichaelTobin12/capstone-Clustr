import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, GroupList, Spinner, Button, NewGroupForm, CardSection } from './components';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null, index: 0 };


  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDj3C7ZZNqNtG_O4vYGafTvgFmu3yK6JJk',
      authDomain: 'clustr-b2f2f.firebaseapp.com',
      databaseURL: 'https://clustr-b2f2f.firebaseio.com',
      storageBucket: 'clustr-b2f2f.appspot.com',
      messagingSenderId: '1087315457917'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true, index: 1 });
      } else {
        this.setState({ loggedIn: false, index: 2 });
      }
    });
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
        return <NewGroupForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Groups'} />
        <CardSection>
          <Button>Add New Group</Button>
        </CardSection>
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  headerButtonStyle: {
    flex: 1,
    height: 50,
    width: 50,
    justifyContent: 'flex-end',
  }
};

export default App;
