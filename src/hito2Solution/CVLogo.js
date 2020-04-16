import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import imgLogo from '../../assets/logo.png';
import Constants from '../Config/Constants';

export default class CVLogo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={imgLogo} style={styles.image} />
        <Text style={styles.text}>{Constants.NAME_APP}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 80,
    height: 80,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 20,
  },
});
