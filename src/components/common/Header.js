import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  )
}

const styles = {
  viewStyle: {
    backgroundColor: '#29b955',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginTop: 22
  },
  textStyle: {
    fontSize: 20,
    color: '#f7f3f2'
  }
}

export { Header };
