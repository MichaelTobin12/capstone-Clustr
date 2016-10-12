import React, { Component } from 'react';
import { Text } from 'react-native';
import Contacts from 'react-native-contacts';
import axios from 'axios';
import { Card, CardSection } from './';


class NewGroupForm extends Component {
state = { contacts: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ groups: response.data }));

      Contacts.getAll((err, contacts) => {
        if (err && err.type === 'permissionDenied') {
          // x.x
        } else {
          this.setState({ contacts });
          console.log(contacts);
        }
      });
  }

  renderContacts() {
    return this.state.contacts.map(contact =>
      <CardSection key={contact.familyName} contact={contact} />
    );
  }

  render() {
    return (
      <Card>
          {this.renderContacts()}
      </Card>
    );
  }
}

export default NewGroupForm;
