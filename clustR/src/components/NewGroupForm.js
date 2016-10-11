import React, { Component } from 'react';
import { Text } from 'react-native';
import axios from 'axios';
import { Card, CardSection } from './';


class NewGroupForm extends Component {

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ groups: response.data }));
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Text> Add A new Group </Text>
        </CardSection>
      </Card>
    );
  }
}

export default NewGroupForm;
