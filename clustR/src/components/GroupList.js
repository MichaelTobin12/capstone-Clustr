import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import firebase from 'firebase';
import axios from 'axios';
import { GroupDetail, ButtonWithAjax } from './';
import Modal from '../components/ModelCom';

class GroupList extends Component {
  constructor(props) {
   super(props);
   this.userId = props.userId;
 }

  state = { groups: [], sendMessage: [], clicked: [] };

  componentWillMount() {
    axios.get(`https://clustrbackend.herokuapp.com/users/getgroups/${this.userId}`)
      .then(response => this.setState({ groups: response.data }));
  }

  buttonInputEnter(group) {
    console.log(this.userId);
    console.log(group);
    axios.get(`https://clustrbackend.herokuapp.com/users/send/R7UdQvDKAHUWF8WrvEwX9tnZtyP2`);
  }

  renderGroups() {
    console.log(this.state.groups);
    return this.state.groups.map(group =>
      <ButtonWithAjax
      onPress={this.buttonInputEnter.bind(group)}
      key={group.name} group={group}
      />
    );
  }

  render() {
    return (
      <ScrollView>
        <View
          style={{ justifyContent: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}
        >
        {this.renderGroups()}
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  scrollViewStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#F2C2B9'
  }
};

export { GroupList };
