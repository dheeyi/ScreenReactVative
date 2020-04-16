import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import CVCasos from './CVCasos';

import Colors from '../../src/Config/Colors';
import Constants from '../Config/Constants';

const CVCiudad = (props) => {
  const {ciudad, onChangeTextConf, onChangeTextSosp} = props;
  return (
    <View>
      <Text style={styles.text}>{ciudad}</Text>
      <CVCasos
        typeCase={Constants.CASOS_CONF}
        onChangeText={onChangeTextConf}
        placeholder={Constants.PLACEHOLDER}
        autoCorrect={false}
        secureTextEntry={false}>
      </CVCasos>
      <CVCasos
        typeCase={Constants.CASOS_SOSP}
        onChangeText={onChangeTextSosp}
        placeholder={Constants.PLACEHOLDER}
        autoCorrect={false}
        secureTextEntry={false}>
      </CVCasos>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CVCiudad;
