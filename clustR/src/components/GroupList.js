import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import { GroupDetail } from './';

class GroupList extends Component {
  state = { groups: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ groups: response.data }));
  }

  renderGroups() {
    return this.state.groups.map(group =>
      <GroupDetail key={group.title} group={group} />
    );
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderGroups()}
      </ScrollView>
    );
  }
}

export { GroupList };
