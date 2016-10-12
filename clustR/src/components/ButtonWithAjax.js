import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

const ButtonWithAjax = ({ onPress, group }) => {
  const { buttonStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Image source={{ uri: group.image }} style={styles.imageStyle} />
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    width: 150,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'orange',
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 5,
    marginRight: 5,
    height: 175
  },
  imageStyle: {
    flex: 1,
    resizeMode: 'cover'
  },
  backdropView: {
    backgroundColor: 'rgba(0,0,0,0)'
  },
  buttonTextStyle: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 24,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export { ButtonWithAjax };
