import React, { Component } from 'react';
import { ScrollView, Text, View } from 'react-native';
import firebase from 'firebase';
import axios from 'axios';
import { ButtonWithAjax, Spinner } from './';
import Modal from '../components/ModelCom';

class GroupList extends Component {
  constructor(props) {
   super(props);
   this.userId = props.userId;
   this.state.index = 1;
 }

  state = { groups: [], sendMessage: [], clicked: [], content: '', index: 0 };

  componentWillMount() {
    axios.get(`https://clustrbackend.herokuapp.com/users/getgroups/${this.userId}`)
      .then(response => this.setState({ groups: response.data }));
  }

  buttonInputEnter() {
    this.setState({ index: 2 });
  }

  renderGroups() {
    switch (this.state.index) {
      case 1:
        return this.state.groups.map(group =>
          <ButtonWithAjax
          onPress={this.buttonInputEnter.bind(this)}
          key={group.name} group={group}
          />
        );
      case 2:
        return <Modal />;
      default:
        return <Spinner size="large" />;
    }
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
