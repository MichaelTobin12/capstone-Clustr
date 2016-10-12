import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import firebase from 'firebase';
import axios from 'axios';
import { GroupDetail } from './';

class GroupList extends Component {
  constructor(props) {
   super(props);
   this.userId = props.userId;
 }

  state = { groups: [], ref: [] };

  componentWillMount() {
    axios.get(`https://clustrbackend.herokuapp.com/users/getgroups/${this.userId}`)
      .then(response => this.setState({ groups: response.data }));
  }

  renderGroups() {
    console.log(this.state.groups);
    return this.state.groups.map(group =>
      <GroupDetail key={group.name} group={group} />
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
