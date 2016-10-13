import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';
import axios from 'axios';
import { CardSection, Input, Button } from './';

class ModalCom extends Component {

  constructor(props) {
    super(props);
    this.state = { modalVisible: false };
  }
  state = { message: '' };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  buttonInputEnterModal() {
    axios.get(`https://clustrbackend.herokuapp.com/users/send/${this.state.message}`)
    .then(this.setModalVisible(!this.state.modalVisible));
  }

  render() {
    return (
      <View style={{ marginTop: 22 }}>
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => { }}
        >
         <View style={{ marginTop: 22 }}>
          <View>
            <CardSection>
              <Input
                placeholder="Message"
                value={this.state.message}
                onChangeText={message => this.setState({ message })}
              />
            </CardSection>
            <CardSection>
              <Button
              onPress={this.buttonInputEnterModal.bind(this)}
              > Send </Button>
            </CardSection>
            <TouchableHighlight
            onPress={() => {
              this.setModalVisible(!this.state.modalVisible);
            }}
            >
              <Text>Close</Text>
            </TouchableHighlight>

          </View>
         </View>
        </Modal>

        <TouchableHighlight
        onPress={() => {
          this.setModalVisible(true);
        }}
        >
          <Text>Show</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

export default ModalCom;
