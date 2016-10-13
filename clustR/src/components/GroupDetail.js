import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import { Card, CardSection, Button } from './';
  
const GroupDetail = ({ group }) => {
  const { name, artist, thumbnail_image, image, url } = group;
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image source={{ uri: image }} style={thumbnailStyle} />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{name}</Text>
        </View>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export { GroupDetail };
