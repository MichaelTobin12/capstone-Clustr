import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import firebase from 'firebase';
import axios from 'axios';
import { GroupDetail } from './';

class GroupList extends Component {
  constructor(props) {
   super(props);
   this.userId = props.userId;
 }

  state = { groups: [], ref: {} };

  componentWillMount() {
    axios.get(`https://localhost:3000/${this.userId}`)
      .then(response => this.setState({ groups: response.data }));
  }

  ref = firebase.database().ref();

  renderGroups() {
    return this.state.groups.map(group =>
      <GroupDetail key={group.title} group={group} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderGroups()}
      </ScrollView>
    );
  }
}

export { GroupList };
